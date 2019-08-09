"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const ctrl = require("../controllers/heroes");
const Router = require("koa-router");
const compose = require("koa-compose");
const router = new Router({
    prefix: `${config_1.default.api.baseURL}/heroes`,
});
router.get('/', ctrl.getAll);
router.post('/', ctrl.addHero);
router.delete('/:id', ctrl.deleteHero);
router.put('/', ctrl.updateHero);
const routes = router.routes();
exports.default = compose([routes]);
//# sourceMappingURL=heroes.js.map