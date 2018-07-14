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
            recipient: '',
            loading: false,
            errorMessage: ''
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

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

                            case 10:
                                _routes.Router.pushRoute('/campaign/' + _this.props.address + '/requests');
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:
                                _this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
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
                    lineNumber: 44
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaign/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Back')), _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Create Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Descripton'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
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
            }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWduL3JlcXVlc3RzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJSb3V0ZXIiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTmV3UmVxdWVzdCIsInN0YXRlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBUyxBQUFRLEFBQU0sQUFBTzs7QUFDOUIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7Ozs7O3dOQUNGLEE7bUJBQVEsQUFDSSxBQUNSO3lCQUZJLEFBRVMsQUFDYjt1QkFISSxBQUdPLEFBQ1g7cUJBSkksQUFJSyxBQUNUOzBCQUxJLEFBS1UsQTtBQUxWLEFBQ0osaUIsQUFhSjtpR0FBVyxpQkFBQSxBQUFNLE9BQU47MEVBQUE7OzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFFQTs7QUFIQywyQ0FHVSx3QkFBUyxNQUFBLEFBQUssTUFIeEIsQUFHVSxBQUFvQjs4Q0FDSyxNQUpuQyxBQUl3QyxPQUp4QyxBQUlDLDBCQUpELEFBSUMsYUFKRCxBQUljLG9CQUpkLEFBSWMsT0FKZCxBQUlxQix3QkFKckIsQUFJcUIsQUFDNUI7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLGNBTHZCLEFBS1AsQUFBYyxBQUE4Qjs7Z0RBTHJDO2dEQUFBO3VDQVFvQixjQUFBLEFBQUssSUFSekIsQUFRb0IsQUFBUzs7aUNBQTFCO0FBUkgsb0RBQUE7Z0RBQUE7dUNBU0csU0FBQSxBQUFTLFFBQVQsQUFDRCxjQURDLEFBQ2EsYUFBYSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FEM0MsQUFDMEIsQUFBdUIsVUFEakQsQUFDMkQsV0FEM0QsQUFFRCxLQUFLLEVBQUMsTUFBTSxTQVhkLEFBU0csQUFFSSxBQUFPLEFBQVM7O2lDQUMxQjsrQ0FBQSxBQUFPLHlCQUF1QixNQUFBLEFBQUssTUFBbkMsQUFBeUMsVUFadEM7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBY0g7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFkMUIsQUFjSCxBQUFjLEFBQW1COztpQ0FFckM7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FoQlQsQUFnQlAsQUFBYyxBQUFXOztpQ0FoQmxCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBbUJIO3lCQUNKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNBO0FBREE7QUFBQSxhQUFBLGtCQUNBLEFBQUMsOEJBQUssc0JBQW9CLEtBQUEsQUFBSyxNQUF6QixBQUErQixVQUFyQzs4QkFBQTtnQ0FBQSxBQUNGO0FBREU7K0JBQ0YsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkUsQUFDQSxBQUNGLEFBRUUsMEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkEsQUFJQSxBQUNBLG1DQUFBLEFBQUUsdUNBQU0sVUFBWSxLQUFwQixBQUF5QixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUFqRCxBQUF1RDs4QkFBdkQ7Z0NBQUEsQUFDQTtBQURBOytCQUNDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUNBLCtCQUFBLEFBQUM7dUJBQ1ksS0FBQSxBQUFLLE1BRGxCLEFBQ3dCLEFBQ3BCOzBCQUFhLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFVLEVBQUMsYUFBYSxNQUFBLEFBQU0sT0FBNUMsQUFBUyxBQUFlLEFBQTJCO0FBRnBFOzs4QkFBQTtnQ0FIQSxBQUNBLEFBRUEsQUFLQTtBQUxBO0FBQ0ksaUNBSUgsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0EsbUNBQUEsQUFBQzt1QkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsQUFDcEI7MEJBQWEseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVUsRUFBQyxPQUFPLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWUsQUFBcUI7QUFGOUQ7OzhCQUFBO2dDQVZBLEFBUUEsQUFFQSxBQUtBO0FBTEE7QUFDSSxpQ0FJSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURBLEFBQ0EsQUFDQSw4QkFBQSxBQUFDO3VCQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxNQUFBLEFBQU0sT0FEekIsQUFDUixBQUFjLEFBQTBCO0FBSDVDOzs4QkFBQTtnQ0FqQkEsQUFlQSxBQUVBLEFBTUE7QUFOQTtBQUNFLGlDQUtGLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBdkJBLEFBdUJBLEFBQ0E7QUFEQTtnQ0FDQSxBQUFFLHlDQUFPLFNBQVQsTUFBaUIsU0FBVyxLQUFBLEFBQUssTUFBakMsQUFBdUM7OEJBQXZDO2dDQUFBO0FBQUE7ZUE5QkosQUFDSSxBQUtBLEFBd0JBLEFBS1A7Ozs7O21IQTdENEIsQTs7Ozs7aUNBQ2pCO0EsMENBQVksTSxBQUFNLE1BQWxCLEE7a0VBRUQsRUFBRSxTLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaVSxBLEFBeUV6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5L0Rlc2t0b3AvbmV3L0tpY2tTdGFydCJ9