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
const users_1 = require("../entities/users");
const joi = require("joi");
const repo = require("../repositories/users");
exports.getAll = () => __awaiter(this, void 0, void 0, function* () {
    return repo.getAll();
});
exports.addUser = (hero) => __awaiter(this, void 0, void 0, function* () {
    yield joi.validate(hero, {
        name: joi.string().required(),
        email: joi.string().required(),
        password_hash: joi.string().required(),
    });
    const toSaveUser = new users_1.Users();
    toSaveUser.name = hero.name;
    toSaveUser.email = hero.email;
    toSaveUser.password_hash = hero.password_hash;
    return repo.save(toSaveUser);
});
exports.loginUser = (hero) => __awaiter(this, void 0, void 0, function* () {
    yield joi.validate(hero, {
        email: joi.string().required(),
        password_hash: joi.string().required(),
    }, { allowUnknown: true });
    const toSaveUser = new users_1.Users();
    toSaveUser.email = hero.email;
    toSaveUser.password_hash = hero.password_hash;
    return repo.loginUer(toSaveUser);
});
//# sourceMappingURL=users.js.map