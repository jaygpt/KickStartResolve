'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jay/Desktop/new/KickStart/components/layout.js';

exports.default = function (props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, 'JgStart dApp ')), _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'left', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('a', { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, 'CrowdCrown'))), _react2.default.createElement(_semanticUiReact.Menu.Menu, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement(_routes.Link, { route: '/campaign/new', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement('a', { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, ' + ')))), props.children, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, 'CopyRight @ JNGOT')));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbInJlYWN0IiwiTWVudSIsIkNvbnRhaW5lciIsIkhlYWQiLCJMaW5rIiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBSzs7QUFDZCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFZLEFBRXJCOzs7Ozs7a0JBQWUsVUFBQSxBQUFDLE9BQVUsQUFDdEI7MkJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDQTtBQURBO0FBQUEsS0FBQSxrQkFDQSxBQUFDOztzQkFBRDt3QkFBQSxBQUNBO0FBREE7QUFBQSx1QkFDQSxBQUFDOztzQkFBRDt3QkFBQSxBQUNBO0FBREE7QUFBQSwrQ0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtzQkFBNUI7d0JBREEsQUFDQSxBQUNBO0FBREE7d0JBQ0EsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSEEsQUFDQSxBQUVBLEFBRUEsbUNBQUEsQUFBQyx1Q0FBSyxPQUFPLEVBQUUsV0FBZixBQUFhLEFBQWE7c0JBQTFCO3dCQUFBLEFBQ0E7QUFEQTt1QkFDQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO3NCQUFwQjt3QkFBQSxBQUNBO0FBREE7dUJBQ0EsQUFBRSw4QkFBSyxPQUFQLEFBQWU7c0JBQWY7d0JBQUEsQUFDQTtBQURBO3VCQUNBLGNBQUEsT0FBRyxXQUFILEFBQWU7c0JBQWY7d0JBQUE7QUFBQTtPQUhBLEFBQ0EsQUFDQSxBQUNBLEFBS0EsaUNBQUMsY0FBRCxzQkFBQSxBQUFNOztzQkFBTjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFFLDhCQUFLLE9BQVAsQUFBZTtzQkFBZjt3QkFBQSxBQUNBO0FBREE7dUJBQ0EsY0FBQSxPQUFHLFdBQUgsQUFBZTtzQkFBZjt3QkFBQTtBQUFBO09BZkosQUFLQSxBQVFBLEFBQ0ksQUFDQSxBQUlMLGlCQW5CQyxBQW1CSyxBQUNQLDBCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQXRCRixBQUNJLEFBQ0EsQUFvQkYsQUFLTDtBQTVCRCIsImZpbGUiOiJsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5L0Rlc2t0b3AvbmV3L0tpY2tTdGFydCJ9