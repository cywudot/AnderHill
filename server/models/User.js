import mongoose from 'mongoose';
//password hashing function that is used to securely store user passwords
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: String,
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// compares the entered password to the hashed password stored in the database using the bcrypt library.
userSchema.methods.matchPasswords = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Called before doc is saved to db. Hashes the password using bcrypt and updates the password field in the document.
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  //Extra encryption
  const salt = await bcrypt.genSalt(10);
  //Save encryped password
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
export default User;
