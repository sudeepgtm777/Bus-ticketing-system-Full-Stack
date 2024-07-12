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

export const userModel = mongoose.model('User', userSchema)

// These are just examples.
/*
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({ 
  'authentication.sessionToken': sessionToken,
});
