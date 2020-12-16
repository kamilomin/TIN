const express = require('express');
const router = express.Router();

const deptApiController = require('../../api/DepartmentApi.js');

router.get('/', deptApiController.getdeptloyees);
router.get('/:deptId', deptApiController.getdeptloyeeById);
router.post('/', deptApiController.createdeptloyee);
router.put('/:deptId', deptApiController.updatedeptloyee);
router.delete('/:deptId', deptApiController.deletedeptloyee);

module.exports = router;