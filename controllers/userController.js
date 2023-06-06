const { User, Todo } = require('../model');

const createUser = async (req, res) => {
  const {
    userName,
    firstName,
    powerLevel,
    favoriteFood,
    primaryWeapon,
    secondaryWeapon,
    role,
  } = req.body;

  try {
    const newUser = await User.create({
      userName,
      firstName,
      powerLevel,
      favoriteFoods: [favoriteFood],
      weapons: {
        primaryWeapon,
        secondaryWeapon,
      },
      role,
    });

    res.json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};


const addFavoriteFood = async (req, res) => {
  const { favoriteFood } = req.body;

  try {
  // a lot of answers do it this way, but this is not the preferred way
  //   const user = await User.findById(req.params.id);
  //   user.favoriteFoods.push(favoriteFood);
  //   await user.save();


    // this is the preferred way
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { //or $push $pull
          favoriteFoods: favoriteFood,
        }
      },
        {
            new: true,
        }
    );
    res.json(user);

  } catch (error) {
    res.status(500).json(error);
  }


};


const createTodo = async (req, res) => {
    const {
        title,
      } = req.body;
    
      try {
        const newTodo = await Todo.create({
          title,
          userId: req.params.id,
        });
    
        res.json(newTodo);
      } catch (error) {
        res.status(500).json(error);
      }
};


const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        
        const todos = await Todo.find({ userId: req.params.id })
            .populate({
                path: 'userId',
                select: 'userName firstName',
            });

        res.json({ user, todos });
    } catch (error) {
        res.status(500).json(error);
    }

};

module.exports = {
  createUser,
  addFavoriteFood,
  createTodo,
    getUserById,
};