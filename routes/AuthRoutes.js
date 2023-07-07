import express from "express";
import { register, login, updateUser } 
from "../controllers/AuthControllers.js";

const router=express.Router();

 router.route("/register").post(register);
 router.route("/login").post(login);
 router.route("/update").patch(updateUser);
 
 export default router;