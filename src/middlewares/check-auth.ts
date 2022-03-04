import { NextFunction, Request, Response } from "express";
import HttpError from "../models/http-error";

import jwt from 'jsonwebtoken'

interface DecodedToken{
  userId: string;
}

interface UserData{
  userId: string;
}

interface ReqDynamic extends Request{
  userData?: UserData;
}

export default function checkAuth(req: ReqDynamic, res:Response, next: NextFunction) {
  try{
    const token = req.headers.authorization?.split(' ')[1]// Authorization: 'Bearer TOKEN'
    if(!token){
      return next(new HttpError("authentication failed!"))
    }
    const decodedToken = jwt.verify(token, 'anohalahubarachimimopolawertayo');
    req.userData = {userId: (decodedToken as DecodedToken).userId}
    next()
  }catch (err){
    return next(new HttpError("authentication failed!", 401))
  }
}