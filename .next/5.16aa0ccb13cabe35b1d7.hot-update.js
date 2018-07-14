webpackHotUpdate(5,{

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(461);

var _web = __webpack_require__(953);

var _web2 = _interopRequireDefault(_web);

var _Campaign = __webpack_require__(952);

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jay/Desktop/new/KickStart/components/RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var accounts, campaign;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _web2.default.eth.getAccounts();

                        case 2:
                            accounts = _context.sent;
                            campaign = (0, _Campaign2.default)(_this.props.address);
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            return (

                // in es6 Table.Row = Row is written in this way
                _react2.default.createElement(Row, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                }, _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                }, id), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }, request.description), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }, request.recipient), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }, ' Approve ')))
            );
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCIsImFwcHJvdmFsQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7Ozs7Ozs7d05BQ0YsQSxxRkFBWSxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFBQTs0Q0FBQTttQ0FDZSxjQUFBLEFBQUssSUFEcEIsQUFDZSxBQUFTOzs2QkFBMUI7QUFERSxnREFFRjtBQUZFLHVDQUVTLHdCQUFTLE1BQUEsQUFBSyxNQUZ2QixBQUVTLEFBQW9COzRDQUY3QjttQ0FHRixTQUFBLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUErQyxLQUFLLEVBQUUsTUFBTSxTQUgxRCxBQUdGLEFBQW9ELEFBQVEsQUFBUzs7NkJBSG5FOzZCQUFBOzRDQUFBOztBQUFBO3dCQUFBO0E7Ozs7O2lDQUtKO2dCQUFBLEFBQ0ksTUFESixBQUNrQix1QkFEbEIsQUFDSTtnQkFESixBQUNTLE9BRFQsQUFDa0IsdUJBRGxCLEFBQ1M7eUJBQ3VCLEtBRmhDLEFBRXFDO2dCQUZyQyxBQUVHLFlBRkgsQUFFRztnQkFGSCxBQUVNLGlCQUZOLEFBRU07Z0JBRk4sQUFFYyx3QkFGZCxBQUVjLEFBQ2xCOztBQUVJOztBQUNBO2dDQUFFLGNBQUY7O2tDQUFBO29DQUFBLEFBQ0E7QUFEQTtBQUFBLG1DQUNDLGNBQUQ7O2tDQUFBO29DQUFBLEFBQU87QUFBUDtBQUFBLG1CQURBLEFBQ0EsQUFDQSxxQkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSwyQkFGQSxBQUVBLEFBQWUsQUFDZiw4QkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSxpQ0FBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BSGxDLEFBR0EsQUFBTyxBQUFpQyxBQUN4QywyQkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSwyQkFKQSxBQUlBLEFBQWUsQUFDZiw0QkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSwyQkFBQSxBQUFlLGVBQWdCLEtBTC9CLEFBS0EsQUFDQSxpQ0FBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUNBO0FBREE7QUFBQSxtQ0FDQSxBQUFDLHlDQUFPLE9BQVIsQUFBZ0IsU0FBUSxPQUF4QixNQUE4QixTQUFXLEtBQXpDLEFBQThDO2tDQUE5QztvQ0FBQTtBQUFBO21CQVZKLEFBR0ksQUFNQSxBQUNBLEFBSVA7Ozs7OztBQXZCb0IsQSxBQTBCekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXkvRGVza3RvcC9uZXcvS2lja1N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/jay/Desktop/new/KickStart/components/RequestRow.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/jay/Desktop/new/KickStart/components/RequestRow.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xNmFhMGNjYjEzY2FiZTM1YjFkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzPzU0ZDM4MWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vQ2FtcGFpZ24nO1xuXG5jbGFzcyBSZXF1ZXN0Um93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBvbkFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcbiAgICAgICAgY29uc3Qge2lkLHJlcXVlc3QsYXBwcm92ZXJzQ291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBpbiBlczYgVGFibGUuUm93ID0gUm93IGlzIHdyaXR0ZW4gaW4gdGhpcyB3YXlcbiAgICAgICAgICAgIDwgUm93PlxuICAgICAgICAgICAgPENlbGw+e2lkfTwvQ2VsbD5cbiAgICAgICAgICAgIDxDZWxsPntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cbiAgICAgICAgICAgIDxDZWxsPnt3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwnZXRoZXInKX08L0NlbGw+XG4gICAgICAgICAgICA8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxuICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuYXBwcm92YWxDb3VudH0ve2FwcHJvdmVyc0NvdW50fTwvQ2VsbD5cbiAgICAgICAgICAgIDxDZWxsPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvciA9IFwiZ3JlZW5cIiBiYXNpYyBvbkNsaWNrID0ge3RoaXMub25BcHByb3ZlfT4gQXBwcm92ZSA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7Ozs7Ozs7O0FBR0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==