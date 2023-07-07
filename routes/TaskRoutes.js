
import express from "express";
const router=express.Router()
import { createTask, getTask,updateTask, taskStat,deleteTask } 
from "../controllers/TaskControllers.js";

router.route('/createTask').post(createTask)
router.route('/getTask').get(getTask)
router.route('/updateTask').patch(updateTask)
router.route('/taskStat').get(taskStat)
router.route('/deleteTask').delete(deleteTask)



export default router;

