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
const service = require("../services/heroes");
exports.getAll = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.state.data = yield service.getAll();
    yield next();
});
exports.addHero = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const payload = ctx.request.body;
    ctx.state.data = yield service.addHero(payload);
    yield next();
});
exports.deleteHero = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const id = ctx.params.id;
    ctx.state.data = yield service.deleteHero(id);
    yield next();
});
exports.updateHero = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const payload = ctx.request.body;
    ctx.state.data = yield service.updateHero(payload);
    yield next();
});
//# sourceMappingURL=heroes.js.map