import { StatusCodes } from "http-status-codes";

const ErrorMiddleWare = (err, req, res, next) => {
   console.log(err)
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later"
  };

  if (err.name === "ValidatorError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    // If it's a ValidatorError, set the status code to "BAD_REQUEST"
    // Construct a detailed error message by mapping the error's messages and joining them together
    defaultError.msg = Object.values(err.errors).map((item) => item.message).join(',');
  }
  
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    // If it's a duplicate key error, set the status code to "BAD_REQUEST"
    // Construct an error message indicating which field should be unique
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  }

  // Send the response with the appropriate status code and error message in JSON format
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default ErrorMiddleWare;
