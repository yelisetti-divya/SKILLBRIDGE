const router = require('express').Router();
const auth = require('../middleware/auth');
const ctrl = require('../controllers/opportunityController');

router.post('/', auth, ctrl.create);
router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.put('/:id', auth, ctrl.update);
router.delete('/:id', auth, ctrl.remove);

module.exports = router;