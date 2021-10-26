const express = require('express')
const router = express.Router()
const { tryCatchWrapper, authMiddleware, uploadMiddleware } = require('../../middlewares')
const ctrl = require('../../controllers/auth')

router.post('/signup', tryCatchWrapper(ctrl.registration))
router.post('/login', tryCatchWrapper(ctrl.login))
router.get('/current', authMiddleware, tryCatchWrapper(ctrl.getCurrentUser))
router.post('/logout', authMiddleware, tryCatchWrapper(ctrl.logout))
router.patch('/', authMiddleware, tryCatchWrapper(ctrl.updateSubscription))
router.patch('/avatars', authMiddleware, uploadMiddleware.single('avatar'), tryCatchWrapper(ctrl.updateAvatar))

module.exports = router
