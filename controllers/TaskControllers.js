const createTask=async(req, res)=>{
res.send("create task")
}

const getTask=async(req, res)=>{
    res.send("get task")
    }

    const updateTask=async(req, res)=>{
        res.send("update task")
        }
        const taskStat=async(req, res)=>{
            res.send("show stat")
            }
            const deleteTask=async(req, res)=>{
                res.send("delete stat")
                }

export {createTask, getTask, updateTask, taskStat, deleteTask}