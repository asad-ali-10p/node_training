"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const ctrl = require("../controllers/users");
const Router = require("koa-router");
const compose = require("koa-compose");
const router = new Router({
    prefix: `${config_1.default.api.baseURL}/users`,
});
router.get('/', ctrl.getAll);
router.post('/', ctrl.addUser);
router.post('/login', ctrl.loginUser);
const routes = router.routes();
exports.default = compose([routes]);
//# sourceMappingURL=users.js.map