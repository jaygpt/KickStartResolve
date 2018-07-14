'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _layout = require('../../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _routes = require('../../../routes');

var _semanticUiReact = require('semantic-ui-react');

var _Campaign = require('../../../ethereum/Campaign');

var _Campaign2 = _interopRequireDefault(_Campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jay/Desktop/new/KickStart/pages/campaign/requests/index.js?entry';


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.request.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    request: request,
                    address: _this2.props.address,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'This is Request Page '), _react2.default.createElement(_routes.Link, { route: '/campaign/' + this.props.address + '/request/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, ' Create Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Recipient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, this.renderRows())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, request;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _Campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return _promise2.default.all(Array(requestCount).fill().map(function (element, index) {
                                    campaign.methods.requests;
                                }));

                            case 7:
                                request = _context.sent;
                                return _context.abrupt('return', { address: address, request: request, requestCount: requestCount });

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

;

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWduL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiTGluayIsIkJ1dHRvbiIsIlRhYmxlIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93IiwiUmVxdWVzdEluZGV4IiwicHJvcHMiLCJyZXF1ZXN0IiwibWFwIiwiaW5kZXgiLCJhZGRyZXNzIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyZW5kZXJSb3dzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInJlcXVlc3RDb3VudCIsImFsbCIsIkFycmF5IiwiZmlsbCIsImVsZW1lbnQiLCJyZXF1ZXN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBUyxBQUFROztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7O3FDQWdCVzt5QkFDVDs7d0JBQU8sQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNsRDt1Q0FDSSxBQUFDO3lCQUFELEFBQ0ssQUFDTDs2QkFGQSxBQUVTLEFBQ1Q7NkJBQVMsT0FBQSxBQUFLLE1BSGQsQUFHb0I7O2tDQUhwQjtvQ0FESixBQUNJLEFBTUg7QUFORztBQUNBLGlCQURBO0FBRkosQUFBTyxBQVNWLGFBVFU7Ozs7aUNBV0g7Z0JBQUEsQUFDSSxTQURKLEFBQ3NDLHVCQUR0QyxBQUNJO2dCQURKLEFBQ1ksTUFEWixBQUNzQyx1QkFEdEMsQUFDWTtnQkFEWixBQUNpQixhQURqQixBQUNzQyx1QkFEdEMsQUFDaUI7Z0JBRGpCLEFBQzZCLE9BRDdCLEFBQ3NDLHVCQUR0QyxBQUM2QixBQUVqQzs7bUNBQ0ksQUFBRTs7OEJBQUY7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0EsMENBQUEsQUFBRSw4QkFBSyxzQkFBc0IsS0FBQSxBQUFLLE1BQTNCLEFBQWlDLFVBQXhDOzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQUpKLEFBRUEsQUFDQSxBQUNJLEFBR0osc0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDRjtBQURFO0FBQUEsK0JBQ0QsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDRTtBQURGO0FBQUEsK0JBQ0csY0FBRDs7OEJBQUE7Z0NBQUEsQUFDRTtBQURGO0FBQUEsK0JBQ0csY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREYsQUFDRSxBQUNBLHVCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZGLEFBRUUsQUFDQSxnQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFIRixBQUdFLEFBQ0EsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkYsQUFJRSxBQUNBLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxGLEFBS0UsQUFDQSxtQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFORixBQU1FLEFBQ0EsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBVEYsQUFDRixBQUNFLEFBT0UsQUFHSiwrQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxvQkFwQkYsQUFDSSxBQU9BLEFBWUYsQUFBTyxBQUFLLEFBSWpCOzs7OztpSEF0RDRCLEE7Ozs7O2lDQUNqQjtBLDBDQUFZLE0sQUFBTSxNQUFsQixBLEFBQ0Y7QSwyQ0FBVyx3QixBQUFBLEFBQVM7O3VDQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CLEFBQWpCLEFBQW9DOztpQ0FBekQ7QTs7eURBQ2dCLEFBQVEsVUFDMUIsQUFBTSxjQUFOLEFBQ0MsT0FERCxBQUVDLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFVLEFBQ3BCOzZDQUFBLEFBQVMsUUFBVCxBQUFpQixBQUNwQjtBQUxpQixBQUNsQixBLGlDQUFBLENBRGtCOztpQ0FBaEI7QTtpRUFPQyxFQUFFLFNBQUYsU0FBVyxTQUFYLFNBQW9CLGNBQXBCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaWSxBOztBQXdEMUIsQUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXkvRGVza3RvcC9uZXcvS2lja1N0YXJ0In0=