(function (global) {
    "use strict";
    var ReactPubSubStore = {};
    ReactPubSubStore._fetcher = null;
    ReactPubSubStore._topics = {};
    ReactPubSubStore._topicsData = {};
    ReactPubSubStore._hOP = ReactPubSubStore._topics.hasOwnProperty;


    ReactPubSubStore._updateTopicData = function (topic) {
        ReactPubSubStore._fetcher.fetchResource(topic, (response) => {
            ReactPubSubStore._topicsData[topic] = response;

            ReactPubSubStore._topics[topic].forEach(function (item) {
                item(response !== undefined ? response : {});
            });
        });
    };

    ReactPubSubStore.setFetcher = function (f) {
        ReactPubSubStore._fetcher = f;
    };

    ReactPubSubStore.subscribe = function (topic, listener) {
        // Create the topic's object if not yet created
        if (!ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic)) {
            ReactPubSubStore._topics[topic] = [];
            ReactPubSubStore._updateTopicData(topic);
        }

        // Add the listener to queue
        var index = ReactPubSubStore._topics[topic].push(listener) - 1;

        // Provide handle back for removal of topic
        return {
            remove: function () {
                delete ReactPubSubStore._topics[topic][index];
            }
        };
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