"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignIn = void 0;
var common_1 = require("@nestjs/common");
exports.SignIn = (0, common_1.createParamDecorator)(function (data, ctx) {
    var args = ctx.getArgs()[1];
    return { username: args.username, password: args.password };
});
