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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jay/Desktop/new/KickStart/components/RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        (0, _classCallCheck3.default)(this, RequestRow);

        return (0, _possibleConstructorReturn3.default)(this, (RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request;

            return (

                // in es6 Table.Row = Row is written in this way
                _react2.default.createElement(Row, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                }, _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                }, id), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                }, request.description), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                }, request.recipient), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                }, request.approvalCount))
            );
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwid2ViMyIsIlJlcXVlc3RSb3ciLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsInJlcXVlc3QiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUTs7QUFDUixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7O2lDQUVNO2dCQUFBLEFBQ0ksTUFESixBQUNrQix1QkFEbEIsQUFDSTtnQkFESixBQUNTLE9BRFQsQUFDa0IsdUJBRGxCLEFBQ1M7eUJBQ1EsS0FGakIsQUFFc0I7Z0JBRnRCLEFBRUcsWUFGSCxBQUVHO2dCQUZILEFBRU0saUJBRk4sQUFFTSxBQUNWOztBQUVJOztBQUNBO2dDQUFFLGNBQUY7O2tDQUFBO29DQUFBLEFBQ0E7QUFEQTtBQUFBLG1DQUNDLGNBQUQ7O2tDQUFBO29DQUFBLEFBQU87QUFBUDtBQUFBLG1CQURBLEFBQ0EsQUFDQSxxQkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSwyQkFGQSxBQUVBLEFBQWUsQUFDZiw4QkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSxpQ0FBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BSGxDLEFBR0EsQUFBTyxBQUFpQyxBQUN4QywyQkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSwyQkFKQSxBQUlBLEFBQWUsQUFDZiw0QkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSwyQkFSSixBQUdJLEFBS0EsQUFBZSxBQUd0Qjs7Ozs7O0FBaEJvQixBLEFBbUJ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2pheS9EZXNrdG9wL25ldy9LaWNrU3RhcnQifQ==