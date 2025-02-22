"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var cypress_preset_1 = require("@nx/cypress/plugins/cypress-preset");
var cypress_1 = require("cypress");
exports.default = (0, cypress_1.defineConfig)({
    e2e: __assign(__assign({}, (0, cypress_preset_1.nxE2EPreset)(__filename, {
        cypressDir: 'src',
        webServerCommands: {
            default: 'npx nx run admin:serve',
            production: 'npx nx run admin:serve-static',
        },
        ciWebServerCommand: 'npx nx run admin:serve-static',
        ciBaseUrl: 'http://localhost:4200',
    })), { baseUrl: 'http://localhost:4200' }),
});
