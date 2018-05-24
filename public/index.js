"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var ReactPubSubStore = function (f) {
    var fetcher = f;
    var topics = {};
    var topicsData = {};
    var hOP = topics.hasOwnProperty;

    var updateTopicData = function updateTopicData(topic) {
        fetcher.fetchResource(topic, function (response) {
            topicsData[topic] = response;

            topics[topic].forEach(function (item) {
                item(response !== undefined ? response : {});
            });
        });
    };

    return {
        subscribe: function subscribe(topic, listener) {
            // Create the topic's object if not yet created
            if (!hOP.call(topics, topic)) {
                topics[topic] = [];
                updateTopicData(topic);
            }

            // Add the listener to queue
            var index = topics[topic].push(listener) - 1;

            // Provide handle back for removal of topic
            return {
                remove: function remove() {
                    delete topics[topic][index];
                }
            };
        }
    };
}();

exports.default = { ReactPubSubStore: ReactPubSubStore };
