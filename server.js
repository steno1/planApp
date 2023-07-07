import express from "express";
import notFoundMiddleWare from "./middleware/notFound.js";
import ErrorMiddleWare from "./middleware/ErrorMiddleWare.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
import "express-async-errors"

const app = express();

// Import routers
import authRouter from "./routes/AuthRoutes.js";
import taskRouter from "./routes/TaskRoutes.js"

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    // Handle the root endpoint
    res.send("Welcome to my server");
});


// Mount authRouter at "/api/v1/auth"
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tasks", taskRouter)

// Error-handling middleware
app.use(notFoundMiddleWare); // Middleware to handle 404 errors
app.use(ErrorMiddleWare); // Middleware to handle other errors

const port = process.env.PORT || 5000;

// Function to start the server
const start = async () => {
    try {
        // Connect to the database
        await connectDB(process.env.MONGO_URL);
        // Start listening for incoming requests
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

// Start the server
start();
