'use strict';

var routes = require('next-routes')();

routes.add('/campaign/new', '/campaign/new').add('/campaign/:address', '/campaign/show').add('/campaign/:address/request', '/campaign/requests/index').add('/campaign/:address/request/new', '/campaign/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGlCQUN5QixBQUR6QixpQkFFSyxBQUZMLElBRVMsQUFGVCxzQkFFK0IsQUFGL0Isa0JBR0ssQUFITCxJQUdTLEFBSFQsOEJBR3VDLEFBSHZDLDRCQUlLLEFBSkwsSUFJUyxBQUpULGtDQUkyQyxBQUozQzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2pheS9EZXNrdG9wL25ldy9LaWNrU3RhcnQifQ==