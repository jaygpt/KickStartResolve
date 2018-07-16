'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* const web3 = new Web3(window.web3.currentProvider);*/

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // if metamask is running on our browser 
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // whem we are in server and metamask is not available
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/IwXeaA7paHZsIDAMIwMw');
    web3 = new _web2.default(provider);
}
exports.default = web3;