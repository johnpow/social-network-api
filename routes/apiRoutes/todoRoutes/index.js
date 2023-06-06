const { createTodo,
 } = require('../../../controllers/todoController');

const router = require('express').Router();

router.post('/', createTodo);




module.exports = router;