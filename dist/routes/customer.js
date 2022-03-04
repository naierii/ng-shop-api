"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_1 = require("../controllers/customer");
const express_validator_1 = require("express-validator");
const check_auth_1 = __importDefault(require("../middlewares/check-auth"));
const customerRouter = (0, express_1.Router)();
customerRouter.use(check_auth_1.default);
customerRouter.post("/signup", [
    (0, express_validator_1.check)('email').not().isEmpty(),
], customer_1.signupCustomer);
customerRouter.post("/login", [
    (0, express_validator_1.check)('email').not().isEmpty(),
    (0, express_validator_1.check)('password').not().isEmpty(),
], customer_1.loginCustomer);
exports.default = customerRouter;
