const router = require('express').Router();
const auth = require('../middleware/auth');
const ctrl = require('../controllers/applicationController');

router.post('/opportunity/:opportunityId', auth, ctrl.apply);
router.put('/:id/status', auth, ctrl.updateStatus);
router.get('/', auth, ctrl.list);

module.exports = router;