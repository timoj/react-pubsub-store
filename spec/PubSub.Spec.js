describe("Player", function () {
    var Fetcher = (function () {

        var resources = {
            users: ["user1", "user2", "user3"],
            reports: ["report1", "report2", "report3"]
        };

        return {
            fetchResource: function (path, cb) {
                var returnVal;
                switch (path) {
                    case "users":
                        returnVal = resources.users;
                        break;
                    case "reports":
                        returnVal = resources.reports;
                        break;
                    default:
                        returnVal = null;
                        break;
                }
                cb(returnVal);
            },
            setResource: function (path, data, cb) {
                switch (path) {
                    case "users":
                        resources.users = data;
                        break;
                    case "reports":
                        resources.reports = data;
                        break;
                    default:
                        break;
                }
                cb(resources[path]);
            }
        };
    })();

    var ReactPubSubStore = require('../src/index');

    beforeEach(function () {
        ReactPubSubStore.setDAO(Fetcher);
    });

    it("should be able to fetch correct users", function (done) {
        ReactPubSubStore.subscribe('users', function (data) {
            expect(data).toEqual(["user1", "user2", "user3"]);
            done();
        });
    });

    it("should be able to publish data", function (done) {
        ReactPubSubStore.subscribe('reports', function (data) {
            if (data.length === 3) {
                expect(data).toEqual(["report1", "report2", "report3"]);
            } else {
                expect(data).toEqual(["report1", "report2", "report3", "report4"]);
                done();
            }
        });
        setTimeout(function () {
            ReactPubSubStore.publish('reports', ["report1", "report2", "report3", "report4"]);
        }, 500);
    });
});
