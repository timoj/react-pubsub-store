"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var ReactPubSubStore = {};
ReactPubSubStore._dao = null;
ReactPubSubStore._topics = {};
ReactPubSubStore._topicsOptions = {};
ReactPubSubStore._topicsData = {};
ReactPubSubStore._hOP = ReactPubSubStore._topics.hasOwnProperty;

ReactPubSubStore._updateTopicData = function (topic, append) {
  var url = topic;

  if (ReactPubSubStore._topicsOptions[topic] !== undefined && ReactPubSubStore._topicsOptions[topic].urlBuilder !== undefined && typeof ReactPubSubStore._topicsOptions[topic].urlBuilder === "function") {
    url = ReactPubSubStore._topicsOptions[topic].urlBuilder(topic, ReactPubSubStore._topicsOptions[topic]);
  }

  ReactPubSubStore._dao.fetchResource(url, function (response) {
    if (append) {
      if (response !== undefined && response.constructor === Array) ReactPubSubStore._topicsData[topic] = ReactPubSubStore._topicsData[topic].concat(response);
    } else {
      ReactPubSubStore._topicsData[topic] = response;
    }

    ReactPubSubStore._topics[topic].forEach(function (item) {
      item(ReactPubSubStore._topicsData[topic] !== undefined ? ReactPubSubStore._topicsData[topic] : {});
    });
  });
};

ReactPubSubStore.setDAO = function (dao) {
  ReactPubSubStore._dao = dao;
};

ReactPubSubStore.createStore = function (topic, urlBuilder) {
  ReactPubSubStore._topicsOptions[topic] = {};

  if (!ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic)) {
    if (urlBuilder !== undefined) ReactPubSubStore._topicsOptions[topic].urlBuilder = urlBuilder;
    ReactPubSubStore._topics[topic] = [];

    ReactPubSubStore._updateTopicData(topic);
  }
};

ReactPubSubStore.deleteStore = function (topic) {
  if (ReactPubSubStore._topics[topic] !== undefined) {
    delete ReactPubSubStore._topics[topic];
  }
};

ReactPubSubStore.subscribe = function (topic, listener, update) {
  var justCreated = false;

  if (update === undefined) {
    update = false;
  } // Create the topic's object if not yet created


  if (!ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic)) {
    ReactPubSubStore._topics[topic] = [];
    justCreated = true;
  } // Add the listener to queue


  var index = ReactPubSubStore._topics[topic].push(listener) - 1;

  if (justCreated || update) {
    ReactPubSubStore._updateTopicData(topic);
  } else {
    listener(ReactPubSubStore._topicsData[topic]);
  } // Provide handle back for removal of topic


  return {
    remove: function remove() {
      if (ReactPubSubStore._topics[topic] !== undefined) delete ReactPubSubStore._topics[topic][index];
    }
  };
};

ReactPubSubStore.update = function (topic, append, cb) {
  if (append === undefined) {
    append = false;
  }

  if (!ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic)) {
    if (cb !== undefined) cb(false);
    return;
  }

  ReactPubSubStore._updateTopicData(topic, append);

  if (cb !== undefined) cb(true);
};

ReactPubSubStore.publish = function (topic, data, method, cb) {
  if (method === undefined) {
    method = "POST";
  }

  if (ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic) || cb !== undefined) {
    ReactPubSubStore._dao.setResource(topic, data, function (response) {
      if (ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic)) {
        ReactPubSubStore._topicsData[topic] = response;

        ReactPubSubStore._topics[topic].forEach(function (item) {
          item(response !== undefined ? response : {});
        });
      }

      if (cb !== undefined) {
        cb(response !== undefined ? response : {});
      }
    }, method);
  }
};

var _default = ReactPubSubStore;
exports.default = _default;