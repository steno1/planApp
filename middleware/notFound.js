const notFoundMiddleWare=(req, res)=>
res.status(404).send("server does not exist")

export default notFoundMiddleWare;