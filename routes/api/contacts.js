const express = require('express')
const router = express.Router()
const { tryCatchWrapper } = require('../../middlewares');
const ctrl =require('../../controllers/contacts')


router.get('/', tryCatchWrapper(ctrl.getAll) )

router.get('/:contactId', tryCatchWrapper(ctrl.getById))

router.post('/', tryCatchWrapper(ctrl.addItem));

router.delete('/:contactId', tryCatchWrapper(ctrl.deleteItem))

router.patch('/:contactId', tryCatchWrapper(ctrl.updateItem));

module.exports = router
