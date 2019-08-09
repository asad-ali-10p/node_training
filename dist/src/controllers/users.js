"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service = require("../services/users");
const jwt = require("jsonwebtoken");
const jwtSecret = "@QEGTUI";
exports.getAll = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.state.data = yield service.getAll();
    yield next();
});
exports.addUser = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const payload = ctx.request.body;
    ctx.state.data = yield service.addUser(payload);
    yield next();
});
exports.loginUser = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const payload = ctx.request.body;
    const jwtToken = "";
    const users = yield service.loginUser(payload);
    if (users.length > 0) {
        const user = users[0];
        const token = jwt.sign({ userId: user.id, email: user.email }, jwtSecret, { expiresIn: "1h" });
        ctx.state.data = token;
    }
    ctx.state.data = jwtToken;
    yield next();
});
//# sourceMappingURL=users.js.map