'use strict';

var _index = require('../public/index.js');

var API = function () {
    var baseUrl = 'http://localhost:8888/api';
    var username = 'root';
    var password = 't00r';

    var headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

    return {
        fetchResource: function fetchResource(path, cb) {
            fetch(baseUrl + path, {
                method: 'GET',
                headers: headers
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                return cb(response);
            });
        }
    };
}();

var Stores = {
    users: "/users",
    reports: "/reports"
};

(0, _index.ReactPubSubStore)(API);

_index.ReactPubSubStore.subscribe("/users", function (data) {
    console.log(data);
});
