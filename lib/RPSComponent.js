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
    _this._stores = [];
    _this._instanciatedStores = [];
    _this.storeCount = 0;
    _this.storeInitializedCount = 0;
    return _this;
  }

  (0, _createClass2.default)(RPSComponent, [{
    key: "setStores",
    value: function setStores(stores) {
      this._stores = stores;
    }
  }, {
    key: "setInitialLoadingContent",
    value: function setInitialLoadingContent(content) {
      this._initialLoadingContent = content;
      this._showInitialLoadingContent = true;
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.storeCount = this._stores.length;
      this.storeInitializedCount = 0;

      for (var i in this._stores) {
        var storeInstance = void 0;

        if (Array.isArray(this._stores[i])) {
          // parameter of path
          storeInstance = new this._stores[i][0](this._stores[i][1]);
        } else {
          storeInstance = new this._stores[i]();
        }

        if (storeInstance instanceof _RPSStore.default) {
          storeInstance.setClientListener(function (stateKey, data) {
            var state = {};
            state[stateKey] = data;

            _this2.setState(state);

            _this2.storeInitializedCount++;
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