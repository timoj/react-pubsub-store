# React PubSub Store

## Introduction

This is a implementation of a pubsub pattern for React. You can subscribe on store names that you create. When you subscribe to a store name that doesn't exist yet, it will be created as well as a initial data fetch for the specific store.

[![Build Status](https://travis-ci.org/timoj/react-pubsub-store.svg?branch=master)](https://travis-ci.org/timoj/react-pubsub-store)

## Installation

`npm install --save react-pubsub-store`

You need to create a component that implements a functions `fetchResource` and `setResource`, which you will pass to the pubsub store. For example:
```
var Fetcher = (function () {

    .....

    return {
        fetchResource: function (path, cb) {
            fetch(url, {
                method: 'GET',
            }).then(response => response.json())
            .then(response => cb(response));
        },
        setResource: function (path, data, cb) {
            fetch(url, {
                method: 'POST',
                ...
            }).then(response => response.json())
            .then(response => cb(response));
        }
    };
})();

export default Fetcher;
....

ReactPubSubStore.setFetcher(Fetcher);
```

You can now start a new subscription:
```
this.subscription = ReactPubSubStore.subscribe('storeName', function (obj) {
  console.log("Just got data for the store 'storeName': ", obj);
});
```

and you can publish new data:
```
ReactPubSubStore.publish('storeName', data);
```