"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("../support/app.po");
describe('frontend/client-e2e', function () {
    beforeEach(function () { return cy.visit('/'); });
    it('should display welcome message', function () {
        // Custom command example, see `../support/commands.ts` file
        cy.login('my-email@something.com', 'myPassword');
        // Function helper example, see `../support/app.po.ts` file
        (0, app_po_1.getGreeting)().contains(/Welcome/);
    });
});
