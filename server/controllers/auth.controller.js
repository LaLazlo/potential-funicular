import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next)=>{
    const { username, email, password, userType } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword, userType });
    try {
        await newUser.save();
        if(userType)
        res.status(201).json("Account Created Successfully");
    } catch (error) {
        next(error);
    }
};

export const signin = async (req, res, next)=>{
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404, 'User not found'));
        }
        const isValidPassword = bcrypt.compareSync(password, validUser.password);
        if (!isValidPassword) {
            return next(errorHandler(401, 'Wrong Credential'))
        }
        const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET);
        const {password:pass, ...rest} = validUser._doc;
        res.cookie('token', token, {httpOnly: true}).status(200).json(rest);
    } catch (error) {
        
    }
};

export const signOut = async (req, res, next) => {
    try {
      res.clearCookie('access_token');
      res.status(200).json('User has been logged out!');
    } catch (error) {
      next(error);
    }
};