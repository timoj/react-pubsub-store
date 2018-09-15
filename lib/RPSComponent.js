"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _RPSStore = _interopRequireDefault(require("./RPSStore"));

var RPSComponent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RPSComponent, _React$Component);

  function RPSComponent(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RPSComponent);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RPSComponent).call(this, props));
    _this.stores = [];
    _this._instanciatedStores = [];
    return _this;
  }

  (0, _createClass2.default)(RPSComponent, [{
    key: "setStores",
    value: function setStores(stores) {
      this.stores = stores;
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      for (var store in this.stores) {
        if (this.stores[store] instanceof _RPSStore.default) {
          var storeInstance = this.stores[store]();
          storeInstance.setClientListener(function (stateKey, data) {
            var state = {};
            state[stateKey] = data;

            _this2.setState(state);
          });

          this._instanciatedStores.push(storeInstance);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      for (var storeInstance in this._instanciatedStores) {
        this._instanciatedStores[storeInstance].remove();
      }
    }
  }]);
  return RPSComponent;
}(_react.default.Component);

var _default = RPSComponent;
exports.default = _default;