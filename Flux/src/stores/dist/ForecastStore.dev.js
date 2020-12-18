"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = require("events");

var _appDispatcher = _interopRequireDefault(require("../appDispatcher"));

var _actionTypes = _interopRequireDefault(require("../actions/actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CHANGE_EVENT = "change";
var _forecast = [];
var _filteredForecast = [];

var ForecastStore =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(ForecastStore, _EventEmitter);

  function ForecastStore() {
    _classCallCheck(this, ForecastStore);

    return _possibleConstructorReturn(this, _getPrototypeOf(ForecastStore).apply(this, arguments));
  }

  _createClass(ForecastStore, [{
    key: "addChangeListener",
    value: function addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback);
    }
  }, {
    key: "removeChangeListener",
    value: function removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
    /**
     * Triggers the change listener which trigger the "onChange",
     * which is defined separetelly for each page  
     */

  }, {
    key: "emitChange",
    value: function emitChange() {
      this.emit(CHANGE_EVENT);
    }
  }, {
    key: "getForecast",
    value: function getForecast() {
      return _forecast;
    }
  }, {
    key: "getFilteredForecast",
    value: function getFilteredForecast() {
      return _filteredForecast;
    }
  }]);

  return ForecastStore;
}(_events.EventEmitter);

var store = new ForecastStore();

_appDispatcher["default"].register(function _callee(action) {
  var dates;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = action.actionTypes;
          _context.next = _context.t0 === _actionTypes["default"].GET_FORECAST_HORSENS ? 3 : _context.t0 === _actionTypes["default"].GET_FORECAST_AARHUS ? 10 : _context.t0 === _actionTypes["default"].GET_FORECAST_CONPENHAGEN ? 17 : _context.t0 === _actionTypes["default"].GET_FORECAST_DATES ? 24 : 29;
          break;

        case 3:
          if (!action.data.ok) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(action.data.json());

        case 6:
          _forecast = _context.sent;
          _filteredForecast = _forecast;

        case 8:
          store.emitChange();
          return _context.abrupt("break", 29);

        case 10:
          if (!action.data.ok) {
            _context.next = 15;
            break;
          }

          _context.next = 13;
          return regeneratorRuntime.awrap(action.data.json());

        case 13:
          _forecast = _context.sent;
          _filteredForecast = _forecast;

        case 15:
          store.emitChange();
          return _context.abrupt("break", 29);

        case 17:
          if (!action.data.ok) {
            _context.next = 22;
            break;
          }

          _context.next = 20;
          return regeneratorRuntime.awrap(action.data.json());

        case 20:
          _forecast = _context.sent;
          _filteredForecast = _forecast;

        case 22:
          store.emitChange();
          return _context.abrupt("break", 29);

        case 24:
          dates = [];
          action.time.forEach(function (t) {
            dates.push(t.split("T")[0]);
          });
          _filteredForecast = _forecast.filter(function (x) {
            return dates.includes(x.time.split("T")[0]);
          });
          store.emitChange();
          return _context.abrupt("break", 29);

        case 29:
        case "end":
          return _context.stop();
      }
    }
  });
});

var _default = store;
exports["default"] = _default;