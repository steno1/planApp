import User from "../models/user.js";

import { StatusCodes } from "http-status-codes";

import {NotFoundError, BadRequestError}
 from "../customErrors/index.js";

// Register route handler
const register = async (req, res) => {
  // Extract data from request body
  const { name, email, password } = req.body;

  // Check if name, email, and password are present
  if (!name) {
    throw new BadRequestError("Please provide name");
  }
  if (!email) {
    throw new BadRequestError("Please provide email");
  }
  if (!password) {
    throw new BadRequestError("Please provide password");
  }
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const userAlreadyExists=await User.findOne({email});
  if(userAlreadyExists){
    throw new BadRequestError("Email already in use")
  }

  // Create user
  const user = await User.create({name, email, password});
  const token=user.createJwt();
  res.status(StatusCodes.CREATED).json({ user:{
    email:user.email,
    name:user.name,
    lastName:user.lastName,

  },
  token

});
};

// Login route handler
const login = (req, res) => {
  res.send("login");
};

// Update user route handler
const updateUser = (req, res) => {
  res.send("update");
};

export { register, login, updateUser };
