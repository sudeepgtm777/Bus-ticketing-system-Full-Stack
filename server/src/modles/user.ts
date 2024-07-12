import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true},
  email: { type: String, required: true},
  authentication: {
    password: { type: String, required: true, select: false},
    salt: { type: String, select: false},
    sessionToken: { type: String, select: false}
  },
});