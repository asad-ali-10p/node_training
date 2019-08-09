import config from '../../config';
import * as ctrl from '../controllers/users';
import * as Router from 'koa-router'
import * as compose from 'koa-compose'

const router  = new Router ({
    prefix: `${config.api.baseURL}/users`,
});

router.get('/', ctrl.getAll);
router.post('/', ctrl.addUser);
router.post('/login', ctrl.loginUser);
// router.delete('/:id', ctrl.deleteUser);
// router.put('/', ctrl.updateUser);

const routes = router.routes();
export default compose([routes]);