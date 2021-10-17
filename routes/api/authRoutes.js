const express = require('express')
const router = express.Router()
const { tryCatchWrapper } = require('../../middlewares')
const { authMiddleware } = require('../../middlewares')
const ctrl = require('../../controllers/auth')

router.post('/signup', tryCatchWrapper(ctrl.registration))
router.post('/login', tryCatchWrapper(ctrl.login))
router.get('/current', authMiddleware, tryCatchWrapper(ctrl.getCurrentUser))
router.post('/logout', authMiddleware, tryCatchWrapper(ctrl.logout))
router.patch('/',authMiddleware, tryCatchWrapper(ctrl.updateSubscription))


module.exports = router
