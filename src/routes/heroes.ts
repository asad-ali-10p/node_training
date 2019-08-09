import config from '../../config';
import * as ctrl from '../controllers/heroes';
import * as Router from 'koa-router'
import * as compose from 'koa-compose'

const router  = new Router ({
    prefix: `${config.api.baseURL}/heroes`,
});

router.get('/', ctrl.getAll);
router.post('/', ctrl.addHero);
router.delete('/:id', ctrl.deleteHero);
router.put('/', ctrl.updateHero);

const routes = router.routes();
export default compose([routes]);