const routes = require('next-routes')();

routes.add('/campaign/new','/campaign/new');
routes.add('/campaign/:address', '/campaign/show');

module.exports = routes;