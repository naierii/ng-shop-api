"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCustomer = exports.signupCustomer = void 0;
const customers_1 = __importDefault(require("../models/customers"));
const express_validator_1 = require("express-validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_error_1 = __importDefault(require("../models/http-error"));
const signupCustomer = async (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const error = new http_error_1.default("Invalid inputs passed, please check your data", 422);
        return next(error);
    }
    // receives data from a request
    const { fname, lname, email, password, image, address } = req.body;
    // check if user is already registered
    let existingCustomer;
    try {
        existingCustomer = await customers_1.default.findOne({ email });
    }
    catch (e) {
        const error = new http_error_1.default("Sign up failed, please try again later", 500);
        return next(error);
    }
    if (existingCustomer) {
        const error = new http_error_1.default("User exists already, please login instead", 422);
        return next(error);
    }
    let hashedAndSaltedPassword;
    try {
        hashedAndSaltedPassword = await bcryptjs_1.default.hash(password, 12);
    }
    catch (e) {
        const error = new http_error_1.default("Could not create user, please try again.", 500);
        return next(error);
    }
    const newCustomer = new customers_1.default({
        fname,
        lname,
        email,
        hashedAndSaltedPassword,
        image,
        address,
    });
    try {
        await newCustomer.save();
    }
    catch (err) {
        const error = new http_error_1.default("Sign up failed, please try again later", 400, err);
        return next(error);
    }
    let token;
    try {
        token = jsonwebtoken_1.default.sign({ userId: newCustomer.id, email: newCustomer.email }, "anohalahubarachimimopolawertayo", { expiresIn: "1h" });
    }
    catch (e) {
        return next(new http_error_1.default("Signing up failed, please try again later.", 500, e));
    }
    res
        .status(201)
        .json({ userId: newCustomer.id, email: newCustomer.email, token });
};
exports.signupCustomer = signupCustomer;
const loginCustomer = async (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return next(new http_error_1.default("Invalid inputs passed, please check your data", 422));
    }
    // receives data from a request
    const { email, password } = req.body;
    // check if user is already registered
    let existingCustomer;
    try {
        existingCustomer = await customers_1.default.findOne({ email });
    }
    catch (e) {
        return next(new http_error_1.default("Logging in failed, please try again later.", 500));
    }
    if (!existingCustomer) {
        return next(new http_error_1.default("Invalid credentials, could not log in", 401));
    }
    let isValidPassword = false;
    try {
        isValidPassword = await bcryptjs_1.default.compare(password, existingCustomer.hashedAndSaltedPassword);
    }
    catch (e) {
        return next(new http_error_1.default("Could not log you in, please check your credentials and try again.", 500, e));
    }
    if (!isValidPassword) {
        return next(new http_error_1.default("Invalid credentials, could not log in", 401));
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
    res.status(201).json({ userId: existingCustomer.id, email: existingCustomer.email, token });
};
exports.loginCustomer = loginCustomer;
