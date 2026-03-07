const router = require('express').Router();
const auth = require('../middleware/auth');
const ctrl = require('../controllers/messageController');

router.post('/', auth, ctrl.send);
router.get('/conversation/:otherId', auth, ctrl.conversation);

module.exports = router;