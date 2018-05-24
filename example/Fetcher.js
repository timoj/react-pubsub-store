import { ReactPubSubStore } from '../public/index.js';

let API = (function () {
    let baseUrl = 'http://localhost:8888/api';
    let username = 'root';
    let password = 't00r';

    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));


    return {
        fetchResource: function (path, cb) {
            fetch(baseUrl + path, {
                method: 'GET',
                headers: headers,
            }).then(response => response.json())
                .then(response => cb(response));
        }
    };
})();

const Stores = {
    users: "/users",
    reports: "/reports"
};


ReactPubSubStore(API);

ReactPubSubStore.subscribe("/users", function (data) {
    console.log(data);
});