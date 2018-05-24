# React PubSub Store

## Introduction

This is a implementation of a pubsub pattern for React. You can subscribe on store names that you create. When you subscribe to a store name that doesn't exist yet, it will be created as well as a initial data fetch for the specific store.

## Installation

`npm install --save react-pubsub-store`

You need to create a component that implements a function name `fetchResource`, which you will pass tot the pubsub store. For example:
```
var Fetcher = (function () {

    .....

    return {
        fetchResource: function (path, cb) {
            fetch(url, {
                method: 'GET',
            }).then(response => response.json())
            .then(response => cb(response));
        }
    };
})();

export default Fetcher;

....

ReactPubSubStore.setFetcher(API);
```

You can now start a new subscription:
```
this.subscription = ReactPubSubStore.subscribe('storeName', function (obj) {
  console.log("Just got data for the store 'storeName': ", obj);
});
```