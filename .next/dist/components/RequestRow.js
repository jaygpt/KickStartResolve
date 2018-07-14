'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('../ethereum/Campaign');

var _Campaign2 = _interopRequireDefault(_Campaign);

var _babelTypes = require('babel-types');

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
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var accounts, campaign;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _web2.default.eth.getAccounts();

                        case 2:
                            accounts = _context2.sent;
                            campaign = (0, _Campaign2.default)(_this.props.address);
                            _context2.next = 6;
                            return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
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

            var readyToFinalize = request.approvalCount > approversCount / 2;

            return (
                // in es6 Table.Row = Row is written in this way
                _react2.default.createElement(Row, {
                    disabled: request.complete,
                    positive: readyToFinalize && !request.complete,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                }, id), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                }, request.description), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    }
                }, request.recipient), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }, 'Approve')), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                }, 'Finalize')))
            );
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwid2ViMyIsIkNhbXBhaWduIiwidGhyb3dTdGF0ZW1lbnQiLCJSZXF1ZXN0Um93Iiwib25BcHByb3ZlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU87O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUzs7Ozs7OztJLEFBRUg7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUNGLHFGQUFZLG1CQUFBOzBCQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUFBOzRDQUFBO21DQUNlLGNBQUEsQUFBSyxJQURwQixBQUNlLEFBQVM7OzZCQUExQjtBQURFLGdEQUVGO0FBRkUsdUNBRVMsd0JBQVMsTUFBQSxBQUFLLE1BRnZCLEFBRVMsQUFBb0I7NENBRjdCO21DQUdGLFNBQUEsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDLEtBQUssRUFBRSxNQUFNLFNBSDFELEFBR0YsQUFBb0QsQUFBUSxBQUFTOzs2QkFIbkU7NkJBQUE7NENBQUE7O0FBQUE7d0JBQUE7QSxtQkFLWixBLHNGQUFhLG9CQUFBOzBCQUFBOzRFQUFBOzBCQUFBO3VEQUFBOzZCQUFBOzZDQUFBO21DQUNjLGNBQUEsQUFBSyxJQURuQixBQUNjLEFBQVM7OzZCQUExQjtBQURHLGlEQUVIO0FBRkcsdUNBRVEsd0JBQVMsTUFBQSxBQUFLLE1BRnRCLEFBRVEsQUFBb0I7NkNBRjVCO21DQUdILFNBQUEsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0QsS0FBSyxFQUFFLE1BQU0sU0FIMUQsQUFHSCxBQUFxRCxBQUFRLEFBQVM7OzZCQUhuRTs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBOzs7OztpQ0FNTDtnQkFBQSxBQUNJLE1BREosQUFDa0IsdUJBRGxCLEFBQ0k7Z0JBREosQUFDUyxPQURULEFBQ2tCLHVCQURsQixBQUNTO3lCQUN1QixLQUZoQyxBQUVxQztnQkFGckMsQUFFRyxZQUZILEFBRUc7Z0JBRkgsQUFFTSxpQkFGTixBQUVNO2dCQUZOLEFBRWMsd0JBRmQsQUFFYyxBQUNsQjs7Z0JBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQWlFLEFBRWpFOztBQUNJO0FBQ0E7Z0NBQUMsY0FBRDs4QkFDa0IsUUFEbEIsQUFDMEIsQUFDbEI7OEJBQVUsbUJBQW1CLENBQUMsUUFGdEMsQUFFOEM7O2tDQUY5QztvQ0FBQSxBQUlBO0FBSkE7QUFDUSxtQ0FHUCxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSxtQkFKQSxBQUlBLEFBQ0EscUJBQUMsY0FBRDs7a0NBQUE7b0NBQUEsQUFBTztBQUFQO0FBQUEsMkJBTEEsQUFLQSxBQUFlLEFBQ2YsOEJBQUMsY0FBRDs7a0NBQUE7b0NBQUEsQUFBTztBQUFQO0FBQUEsaUNBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQU5sQyxBQU1BLEFBQU8sQUFBaUMsQUFDeEMsMkJBQUMsY0FBRDs7a0NBQUE7b0NBQUEsQUFBTztBQUFQO0FBQUEsMkJBUEEsQUFPQSxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7a0NBQUE7b0NBQUEsQUFBTztBQUFQO0FBQUEsMkJBQUEsQUFBZSxlQUFnQixLQVIvQixBQVFBLEFBQ0EsaUNBQUMsY0FBRDs7a0NBQUE7b0NBQUEsQUFDRDtBQURDO0FBQUEsMkJBQ0QsQUFBUSxXQUFSLEFBQW1CLHVCQUNsQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7a0NBQTFDO29DQUFBO0FBQUE7aUJBQUEsRUFYQSxBQVNBLEFBRUEsQUFLSiw2QkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUNHO0FBREg7QUFBQSwyQkFDRyxBQUFRLFdBQVIsQUFBbUIsdUJBQ2xCLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsU0FBUyxLQUFwQyxBQUF5QztrQ0FBekM7b0NBQUE7QUFBQTtpQkFBQSxFQXBCSixBQUVJLEFBZ0JKLEFBRUksQUFPUDs7Ozs7O0FBNUNvQixBLEFBK0N6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2pheS9EZXNrdG9wL25ldy9LaWNrU3RhcnQifQ==