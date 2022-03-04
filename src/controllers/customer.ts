import { RequestHandler } from "express";
import Customer from "../models/customers";

import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import HttpError from "../models/http-error";

export const signupCustomer: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs passed, please check your data",
      422
    );
    return next(error);
  }

  // receives data from a request
  const { fname, lname, email, password, image, address } = req.body;
  // check if user is already registered
  let existingCustomer;
  try {
    existingCustomer = await Customer.findOne({ email });
  } catch (e) {
    const error = new HttpError("Sign up failed, please try again later", 500);
    return next(error);
  }

  if (existingCustomer) {
    const error = new HttpError(
      "User exists already, please login instead",
      422
    );
    return next(error);
  }

  let hashedAndSaltedPassword;
  try {
    hashedAndSaltedPassword = await bcrypt.hash(password, 12);
  } catch (e) {
    const error = new HttpError(
      "Could not create user, please try again.",
      500
    );
    return next(error);
  }

  const newCustomer = new Customer({
    fname,
    lname,
    email,
    hashedAndSaltedPassword,
    image,
    address,
  });

  try {
    await newCustomer.save();
  } catch (err) {
    const error = new HttpError(
      "Sign up failed, please try again later",
      400,
      err
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: newCustomer.id, email: newCustomer.email },
      "anohalahubarachimimopolawertayo",
      { expiresIn: "1h" }
    );
  } catch (e) {
    return next(
      new HttpError("Signing up failed, please try again later.", 500, e)
    );
  }

  res
    .status(201)
    .json({ userId: newCustomer.id, email: newCustomer.email, token });
};



export const loginCustomer: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data", 422)
    );
  }

  // receives data from a request
  const { email, password } = req.body;

  // check if user is already registered
  let existingCustomer;
  try {
    existingCustomer = await Customer.findOne({ email });
  } catch (e) {
    return next(
      new HttpError("Logging in failed, please try again later.", 500)
    );
  }

  if (!existingCustomer) {
    return next(new HttpError("Invalid credentials, could not log in", 401));
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(
      password,
      existingCustomer.hashedAndSaltedPassword
    );
  } catch (e) {
    return next(
      new HttpError(
        "Could not log you in, please check your credentials and try again.",
        500,
        e
      )
    );
  }

  if (!isValidPassword) {
    return next(new HttpError("Invalid credentials, could not log in", 401));
  }

  let token;
  // try {
  //   token = jwt.sign(
  //     { userId: existingCustomer.id, email: existingCustomer.email },
  //     "anohalahubarachimimopolawertayo",
  //     { expiresIn: "1h" }
  //   );
  // } catch (e) {
  //   return next(
  //     new HttpError("Logging in failed ,please try again later", 500, e)
  //   );
  // }

  res.status(201).json({userId: existingCustomer.id, email:existingCustomer.email, token});
};
