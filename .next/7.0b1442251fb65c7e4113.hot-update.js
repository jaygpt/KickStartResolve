webpackHotUpdate(7,{

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _factory = __webpack_require__(1114);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(461);

var _layout = __webpack_require__(710);

var _layout2 = _interopRequireDefault(_layout);

var _routes = __webpack_require__(651);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jay/Desktop/new/KickStart/pages/index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaign',
        value: function renderCampaign() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaign/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    }, 'View Description ')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('h2', { 'class': 'ui center aligned icon header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('i', { 'class': 'circular users icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), 'JGSTART'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'It is simple Dapp which use Metamask for different Ethereum Transaction on Rinkeby network.It is an attempt to solve Kickstart Frauds by Voting Rights'), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), _react2.default.createElement(_routes.Link, { route: '/campaign/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Create Campaign',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }))), this.renderCampaign()));
        }
    }], [{
        key: 'getInitialProps',

        //Nextjs have special way to load initial way to fetch data and it is
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWduIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUNULEFBQVM7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7O3lDQVFjLEFBQ1o7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFDOUM7OzRCQUFPLEFBQ0ssQUFDUjtpREFDSSxBQUFDLDhCQUFLLHNCQUFOLEFBQTRCO3NDQUE1Qjt3Q0FBQSxBQUF1QztBQUF2QztxQkFBQSxrQkFBdUMsY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQUh4QyxBQUdDLEFBQXVDLEFBRTNDOzJCQUxKLEFBQU8sQUFLSSxBQUVkO0FBUFUsQUFDSDtBQUZSLEFBQWMsQUFVZCxhQVZjOztpREFVUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQXNCOzhCQUF0QjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUVILEFBQ0o7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxjQUFBLFFBQUksU0FBSixBQUFVOzhCQUFWO2dDQUFBLEFBQ1Y7QUFEVTtvREFDUCxTQUFILEFBQVM7OEJBQVQ7Z0NBRFUsQUFDVjtBQUFBO2dCQUZVLEFBQ0EsQUFJWiw0QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFMWSxBQUtaLEFBQ1ksbU1BQU0sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQU5BLEFBTUEsQUFDQTtBQURBO2dDQUNBLEFBQUMsOEJBQUssT0FBTixBQUFjOzhCQUFkO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDO3lCQUFELEFBQ2MsQUFDVjt5QkFGSixBQUVhLEFBQ1Q7c0JBSEosQUFHVyxBQUNQO3lCQUpKOzs4QkFBQTtnQ0FUQSxBQU9BLEFBQ0EsQUFDQSxBQVFDO0FBUkQ7QUFDSSx1QkFaUixBQUNJLEFBQ0EsQUFpQkMsQUFBSyxBQUliOzs7YUE1Q0w7Ozs7Ozs7Ozs7O3VDQUVnQyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEEsQUFBdUM7O2lDQUF6RDtBO2lFQUVDLEVBQUUsV0FBRixBQUFhLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMQSxBLEFBZ0Q1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXkvRGVza3RvcC9uZXcvS2lja1N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/jay/Desktop/new/KickStart/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/jay/Desktop/new/KickStart/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4wYjE0NDIyNTFmYjY1YzdlNDExMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NWNjN2I0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IENvbXBvbmVudCB9ZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcblxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudHtcbi8vTmV4dGpzIGhhdmUgc3BlY2lhbCB3YXkgdG8gbG9hZCBpbml0aWFsIHdheSB0byBmZXRjaCBkYXRhIGFuZCBpdCBpc1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcbiAgICAgICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuXG4gICAgICAgIHJldHVybiB7IGNhbXBhaWduczogY2FtcGFpZ25zIH1cbiAgICB9XG5cbiAgICByZW5kZXJDYW1wYWlnbigpe1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zLm1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlID0ge2AvY2FtcGFpZ24vJHthZGRyZXNzfWB9PjxhPlZpZXcgRGVzY3JpcHRpb24gPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zID0geyBpdGVtcyB9IC8+XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInVpIGNlbnRlciBhbGlnbmVkIGljb24gaGVhZGVyXCI+XG4gIDxpIGNsYXNzPVwiY2lyY3VsYXIgdXNlcnMgaWNvblwiPjwvaT5cbiAgSkdTVEFSVFxuPC9oMj5cbjxwPkl0IGlzIHNpbXBsZSBEYXBwIHdoaWNoIHVzZSBNZXRhbWFzayBmb3IgZGlmZmVyZW50IEV0aGVyZXVtIFRyYW5zYWN0aW9uIG9uIFJpbmtlYnkgbmV0d29yay5JdCBpcyBhbiBhdHRlbXB0IHRvIHNvbHZlIEtpY2tzdGFydCBGcmF1ZHMgYnkgVm90aW5nIFJpZ2h0czwvcD5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4zLjEvc2VtYW50aWMubWluLmNzc1wiPjwvbGluaz5cbiAgICAgICAgICAgIDxMaW5rIHJvdXRlID0gXCIvY2FtcGFpZ24vbmV3XCI+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBmbG9hdGVkID0gXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgY29udGVudD0gXCJDcmVhdGUgQ2FtcGFpZ25cIlxuICAgICAgICAgICAgICAgIGljb24gPSBcImFkZCBjaXJjbGVcIlxuICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDYW1wYWlnbigpfVxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQVVBO0FBQUE7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFOQTtBQVFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSkE7O0FBQUE7QUFRQTtBQVJBO0FBQ0E7OztBQWpDQTtBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQURBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=