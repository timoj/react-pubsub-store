(function (global) {
    "use strict";
    let ReactPubSubStore = {};
    ReactPubSubStore._dao = null;
    ReactPubSubStore._URLBuilder = null;
    ReactPubSubStore._topics = {};
    ReactPubSubStore._topicsOptions = {};
    ReactPubSubStore._topicsData = {};
    ReactPubSubStore._hOP = ReactPubSubStore._topics.hasOwnProperty;


    ReactPubSubStore._updateTopicData = function (topic, append) {
        let url = topic;
        if (typeof ReactPubSubStore._URLBuilder === "function") {
            url = ReactPubSubStore._URLBuilder(topic, ReactPubSubStore._topicsOptions[topic]);
        }
        ReactPubSubStore._dao.fetchResource(url, (response) => {
            if (append) {
                ReactPubSubStore._topicsData[topic] = ReactPubSubStore._topicsData[topic].concat(response);
            } else {
                ReactPubSubStore._topicsData[topic] = response;
            }
            ReactPubSubStore._topics[topic].forEach(function (item) {
                item(response !== undefined ? response : {});
            });
            if (ReactPubSubStore._topicsOptions[topic] !== undefined && ReactPubSubStore._topicsOptions[topic].pagination) {
                ReactPubSubStore._topicsOptions[topic].page += 1;
            }
        });
    };

    ReactPubSubStore.setDAO = function (dao) {
        ReactPubSubStore._dao = dao;
    };

    ReactPubSubStore.setURLBuilder = function (func) {
        ReactPubSubStore._URLBuilder = func;
    };

    ReactPubSubStore.createStore = function (topic, pagination) {
        if (pagination === undefined) {
            pagination = false;
        }
        ReactPubSubStore._topicsOptions[topic] = {};
        if (!ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic)) {
            ReactPubSubStore._topicsOptions[topic].pagination = pagination;
            if (pagination)
                ReactPubSubStore._topicsOptions[topic].page = 1;
            ReactPubSubStore._topics[topic] = [];
        }
    };

    ReactPubSubStore.subscribe = function (topic, listener) {
        let justCreated = false;

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

    ReactPubSubStore.update = function (topic, append, cb) {
        if (append === undefined) {
            append = false;
        }
        if (!ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic)) {
            if (cb !== undefined)
                cb(false);
            return;
        }
        ReactPubSubStore._updateTopicData(topic, append);
        if (cb !== undefined)
            cb(true);
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