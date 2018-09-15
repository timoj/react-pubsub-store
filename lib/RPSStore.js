"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ReactPubSubStore = _interopRequireDefault(require("./ReactPubSubStore"));

var RPSStore =
/*#__PURE__*/
function () {
  function RPSStore(path, stateKey) {
    (0, _classCallCheck2.default)(this, RPSStore);
    this.data = null;
    this.path = path;
    this.doUpdate = false;
    this.stateKey = stateKey;

    this.clientListener = function () {};

    this.subscription = null;

    this._subscribe();
  }

  (0, _createClass2.default)(RPSStore, [{
    key: "setClientListener",
    value: function setClientListener(listener) {
      this.clientListener = listener;
    }
  }, {
    key: "_subscribe",
    value: function _subscribe() {
      var _this = this;

      this.subscription = _ReactPubSubStore.default.subscribe(this.path, function (response) {
        _this.data = response;

        _this._updateClients();
      }, this.doUpdate);
    }
  }, {
    key: "_updateClients",
    value: function _updateClients() {
      this.clientListener(this.stateKey, this.data);
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.subscription !== null) {
        this.subscription.remove();
      }
    }
  }]);
  return RPSStore;
}();

var _default = RPSStore;
exports.default = _default;