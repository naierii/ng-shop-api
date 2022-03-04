"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_error_1 = __importDefault(require("../models/http-error"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function checkAuth(req, res, next) {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1]; // Authorization: 'Bearer TOKEN'
        if (!token) {
            return next(new http_error_1.default("authentication failed!"));
        }
        const decodedToken = jsonwebtoken_1.default.verify(token, 'anohalahubarachimimopolawertayo');
        req.userData = { userId: decodedToken.userId };
        next();
    }
    catch (err) {
        return next(new http_error_1.default("authentication failed!", 401));
    }
}
exports.default = checkAuth;
