'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jay/Desktop/new/KickStart/pages/campaign/new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement('h3', { style: { alignSelf: 'right' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, ' Create Campaign'), _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    _this2.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, 'Submit'))));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWduL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRhaW5lciIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIkxheW91dCIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYWxpZ25TZWxmIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBVSxBQUFLLEFBQU87O0FBQzlCLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFFYjs7Ozs7Ozs7Ozs7Ozs7ME4sQUFDRjtpQ0FDeUIsQSxBQURqQjtBQUFBLEFBQ0o7Ozs7O2lDQUVJO3lCQUNKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUEsUUFBSSxPQUFTLEVBQUUsV0FBZixBQUFhLEFBQWE7OEJBQTFCO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EscUNBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUNBQUEsQUFBQzt1QkFBRCxBQUNZLEFBQ1I7K0JBRkosQUFFb0IsQUFDaEI7dUJBQVMsS0FBQSxBQUFLLE1BSGxCLEFBR3dCLEFBQ3BCOzBCQUFZLHlCQUFTLEFBQ2pCOzJCQUFBLEFBQUssU0FBUyxFQUFDLHFCQUFxQixNQUFBLEFBQU0sT0FBMUMsQUFBYyxBQUFtQyxBQUNwRDtBQU5MOzs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFTSjtBQVRJO0FBQ0ksaUNBUVIsQUFBQyx5Q0FBTyxTQUFSLEFBQWtCLFNBQVEsU0FBMUI7OEJBQUE7Z0NBQUE7QUFBQTtlQWhCaEIsQUFDSSxBQUNJLEFBRUksQUFZSSxBQUtuQjs7Ozs7QUExQnFCLEEsQUE2QjFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXkvRGVza3RvcC9uZXcvS2lja1N0YXJ0In0=