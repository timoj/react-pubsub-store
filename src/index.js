(function (global) {
    "use strict";
    var ReactPubSubStore = {};
    ReactPubSubStore._dao = null;
    ReactPubSubStore._topics = {};
    ReactPubSubStore._topicsData = {};
    ReactPubSubStore._hOP = ReactPubSubStore._topics.hasOwnProperty;


    ReactPubSubStore._updateTopicData = function (topic) {
        ReactPubSubStore._dao.fetchResource(topic, (response) => {
            ReactPubSubStore._topicsData[topic] = response;
            ReactPubSubStore._topics[topic].forEach(function (item) {
                item(response !== undefined ? response : {});
            });
        });
    };

    ReactPubSubStore.setDAO = function (dao) {
        ReactPubSubStore._dao = dao;
    };

    ReactPubSubStore.subscribe = function (topic, listener) {
        var justCreated = false;

        // Create the topic's object if not yet created
        if (!ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic)) {
            ReactPubSubStore._topics[topic] = [];
            justCreated = true;
        }

        // Add the listener to queue
        var index = ReactPubSubStore._topics[topic].push(listener) - 1;

        if (justCreated) {
            ReactPubSubStore._updateTopicData(topic);
        } else {
            listener(ReactPubSubStore._topicsData[topic]);
        }

        // Provide handle back for removal of topic
        return {
            remove: function () {
                delete ReactPubSubStore._topics[topic][index];
            }
        };
    };

    ReactPubSubStore.publish = function (topic, data, method, cb) {
        if (method === undefined) {
            method = "POST";
        }
        if (ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic) || cb !== undefined) {
            ReactPubSubStore._dao.setResource(topic, data, function (response) {
                ReactPubSubStore._topicsData[topic] = response;
                ReactPubSubStore._topics[topic].forEach(function (item) {
                    item(response !== undefined ? response : {});
                });
                if (cb !== undefined) {
                    cb(response !== undefined ? response : {});
                }
            }, method);
        }
    };

    if (typeof module === 'object' && module && typeof module.exports === 'object') {
        module.exports = ReactPubSubStore;

        // Register as an AMD module
    } else if (typeof define === 'function' && define.amd) {
        define('ReactPubSubStore', [], function () {
            return ReactPubSubStore;
        });

        // Export into global space
    } else if (typeof global === 'object' && typeof global.document === 'object') {
        global.ReactPubSubStore = ReactPubSubStore;
    }
})(this);