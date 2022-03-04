import { Router } from "express";
import { loginCustomer, signupCustomer } from "../controllers/customer";

import {check} from "express-validator"

import checkAuth from "../middlewares/check-auth";

const customerRouter = Router()

customerRouter.use(checkAuth)

customerRouter.post(
  "/signup", 
  [
    check('email').not().isEmpty(),
  ], 
  signupCustomer
)
customerRouter.post(
  "/login", 
  [
    check('email').not().isEmpty(),
    check('password').not().isEmpty(),
  ], 
  loginCustomer
)

export default customerRouter