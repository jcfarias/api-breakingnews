const userService = require("../services/user.service");

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username) {
    res.status(400).send({ message: "Informe todos os campos: nome e login" });
  }

  const user = await userService.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating User" });
  }

  res.status(201).send({
    message: "User created successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      password,
      avatar,
      background
    },
  });
};

module.exports = { create };
