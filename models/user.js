import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";
import  Jwt  from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"], // Required field with error message if not provided
    minlength: 2, // Minimum length of 2 characters
    maxlength: 25, // Maximum length of 25 characters
    trim: true, // Trim whitespace from the input
  },

  email: {
    type: String,
    validate: {
      validator: validator.isEmail, // Validate the email format using the validator library
      message: "Please provide a valid email", // Error message for invalid email format
    },
    required: [true, "Please provide email"], // Required field with error message if not provided
    unique: true, // Ensure email is unique
  },

  password: {
    type: String,
    required: [true, "Please provide password"], // Required field with error message if not provided
    minlength: [6, "Password should be at least 6 characters long"], // Minimum length of 6 characters
    validate: {
      validator: function (value) {
        // Password must contain at least one lowercase letter, one uppercase letter, and one special character
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
          value
        );
      },
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, and one special character", // Error message for invalid password format
    },
    select:false
  },

  lastName: {
    type: String,
    minlength: 2, // Minimum length of 2 characters
    maxlength: 25, // Maximum length of 25 characters
    trim: true, // Trim whitespace from the input
    default: "Last Name", // Default value if not provided.
  },
});

userSchema.pre("save", async function () {
  const salt = await bcryptjs.genSalt(12); // Generate a salt with 12 rounds
  this.password = await bcryptjs.hash(this.password, salt); // Hash the password with the generated salt
});

// Custom method to create a JWT (JSON Web Token)
userSchema.methods.createJwt=function(){
 return  Jwt.sign({userId:this._id}, process.env.SECRET_KEY, 
    {expiresIn: process.env.DURATION_TIME})
}

export default mongoose.model("User", userSchema);
