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

exports.default = function (props) {
    return _react2.default.createElement('div', null, _react2.default.createElement(_semanticUiReact.Container, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css' }), _react2.default.createElement('title', null, 'JgStart dApp ')), _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' } }, _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'left' }, _react2.default.createElement(_routes.Link, { route: '/' }, _react2.default.createElement('a', { className: 'item' }, 'CrowdCrown'))), _react2.default.createElement(_semanticUiReact.Menu.Menu, null, _react2.default.createElement(_routes.Link, { route: '/campaign/new' }, _react2.default.createElement('a', { className: 'item' }, ' + ')))), props.children, _react2.default.createElement('h3', null, 'CopyRight @ JNGOT')));
};