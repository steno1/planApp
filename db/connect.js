//const connectionString="mongodb+srv://steno12:toochukwu@cluster0.ixu754a.mongodb.net/taskApp?retryWrites=true&w=majority"

import mongoose from "mongoose";
const connectDB=(url)=>{
return mongoose.connect(url)
}
export default connectDB;