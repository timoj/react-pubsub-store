(function (global) {
    "use strict";
    let ReactPubSubStore = (function (f) {
        let fetcher = f;
        let topics = {};
        let topicsData = {};
        let hOP = topics.hasOwnProperty;


        let updateTopicData = (topic) => {
            fetcher.fetchResource(topic, (response) => {
                topicsData[topic] = response;

                topics[topic].forEach(function (item) {
                    item(response !== undefined ? response : {});
                });
            });
        };

        return {
            subscribe: function (topic, listener) {
                // Create the topic's object if not yet created
                if (!hOP.call(topics, topic)) {
                    topics[topic] = [];
                    updateTopicData(topic);
                }

                // Add the listener to queue
                let index = topics[topic].push(listener) - 1;

                // Provide handle back for removal of topic
                return {
                    remove: function () {
                        delete topics[topic][index];
                    }
                };
            }
        };
    })();
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