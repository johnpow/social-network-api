const { Todo } = require('../model');

const createTodo = async (req, res) => {
  const {
    title,
    completed,
  } = req.body;

  try {
    const newTodo = await Todo.create({
      title,
      completed,
    });

    res.json(newTodo);
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  createTodo,
};