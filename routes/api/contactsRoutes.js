const express = require('express')
const router = express.Router()
const { tryCatchWrapper, authMiddleware } = require('../../middlewares')
const ctrl = require('../../controllers/contacts')

router.use(authMiddleware)

router.get('/', tryCatchWrapper(ctrl.getAll))

router.get('/:contactId', tryCatchWrapper(ctrl.getById))

router.post('/', tryCatchWrapper(ctrl.addItem))

router.delete('/:contactId', tryCatchWrapper(ctrl.deleteItem))

router.patch('/:contactId', tryCatchWrapper(ctrl.updateItem))

router.patch('/:contactId/favorite', tryCatchWrapper(ctrl.updateItemStatus))

module.exports = router
