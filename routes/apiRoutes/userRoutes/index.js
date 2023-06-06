const { createUser,
addFavoriteFood,
createTodo,
getUserById,
 } = require('../../../controllers/userController');

const router = require('express').Router();

router.get('/:id', getUserById);
router.post('/', createUser);
router.post('/addFavoriteFood/:id', addFavoriteFood);
router.post('/createTodo/:id', createTodo);




module.exports = router;