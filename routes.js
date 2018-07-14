const routes = require('next-routes')();

routes
    .add('/campaign/new','/campaign/new')
    .add('/campaign/:address', '/campaign/show')
    .add('/campaign/:address/request', '/campaign/requests/index')
    .add('/campaign/:address/request/new', '/campaign/requests/new');

module.exports = routes;