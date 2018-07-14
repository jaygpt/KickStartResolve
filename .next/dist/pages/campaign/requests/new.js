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

var _layout = require('../../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _routes = require('../../../routes');

var _semanticUiReact = require('semantic-ui-react');

var _Campaign = require('../../../ethereum/Campaign');

var _Campaign2 = _interopRequireDefault(_Campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jay/Desktop/new/KickStart/pages/campaign/requests/new.js?entry';


var NewRequest = function (_Component) {
    (0, _inherits3.default)(NewRequest, _Component);

    function NewRequest() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, NewRequest);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewRequest.__proto__ || (0, _getPrototypeOf2.default)(NewRequest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            recipient: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _Campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

                            case 9:
                                _context.next = 13;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](3);

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(NewRequest, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

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
            }, 'Create Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'Descripton'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Create Request ')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return NewRequest;
}(_react.Component);

exports.default = NewRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWduL3JlcXVlc3RzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJSb3V0ZXIiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTmV3UmVxdWVzdCIsInN0YXRlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQWM7O0FBQzdCLEFBQVMsQUFBUSxBQUFNLEFBQU87O0FBQzlCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7Ozs7Ozt3TkFDRixBO21CQUFRLEFBQ0ksQUFDUjt5QkFGSSxBQUVTLEFBQ2I7dUJBSEksQSxBQUdPO0FBSFAsQUFDSixpQixBQVdKO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjswRUFBQTs7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUVBOztBQUhDLDJDQUdVLHdCQUFTLE1BQUEsQUFBSyxNQUh4QixBQUdVLEFBQW9COzhDQUNLLE1BSm5DLEFBSXdDLE9BSnhDLEFBSUMsMEJBSkQsQUFJQyxhQUpELEFBSWMsb0JBSmQsQUFJYyxPQUpkLEFBSXFCLHdCQUpyQixBQUlxQjtnREFKckI7Z0RBQUE7dUNBTW9CLGNBQUEsQUFBSyxJQU56QixBQU1vQixBQUFTOztpQ0FBMUI7QUFOSCxvREFBQTtnREFBQTt1Q0FPRyxTQUFBLEFBQVMsUUFBVCxBQUNELGNBREMsQUFDYSxhQUFhLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixPQUQzQyxBQUMwQixBQUF1QixVQURqRCxBQUMyRCxXQUQzRCxBQUVELEtBQUssRUFBQyxNQUFNLFNBVGQsQUFPRyxBQUVJLEFBQU8sQUFBUzs7aUNBVHZCO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQUFBOztpQ0FBQTtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQWlCSDt5QkFDSjs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0EsbUNBQUEsQUFBRSx1Q0FBTSxVQUFZLEtBQXBCLEFBQXlCOzhCQUF6QjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0EsK0JBQUEsQUFBQzt1QkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsQUFDcEI7MEJBQWEseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVUsRUFBQyxhQUFhLE1BQUEsQUFBTSxPQUE1QyxBQUFTLEFBQWUsQUFBMkI7QUFGcEU7OzhCQUFBO2dDQUhBLEFBQ0EsQUFFQSxBQUtBO0FBTEE7QUFDSSxpQ0FJSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURBLEFBQ0EsQUFDQSxtQ0FBQSxBQUFDO3VCQUNZLEtBQUEsQUFBSyxNQURsQixBQUN3QixBQUNwQjswQkFBYSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBVSxFQUFDLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBZSxBQUFxQjtBQUY5RDs7OEJBQUE7Z0NBVkEsQUFRQSxBQUVBLEFBS0E7QUFMQTtBQUNJLGlDQUlILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUNBLDhCQUFBLEFBQUM7dUJBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLE1BQUEsQUFBTSxPQUR6QixBQUNSLEFBQWMsQUFBMEI7QUFINUM7OzhCQUFBO2dDQWpCQSxBQWVBLEFBRUEsQUFNQTtBQU5BO0FBQ0UsaUNBS0YsQUFBRSx5Q0FBTyxTQUFUOzhCQUFBO2dDQUFBO0FBQUE7ZUExQkosQUFDSSxBQUVBLEFBdUJBLEFBS1A7Ozs7O21ILEFBdkQ0Qjs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE1BQWxCLEE7a0VBRUQsRUFBRSxTQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWVSxBLEFBaUV6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5L0Rlc2t0b3AvbmV3L0tpY2tTdGFydCJ9