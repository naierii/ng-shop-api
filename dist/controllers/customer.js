"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomer = void 0;
const customers_1 = __importDefault(require("../models/customers"));
const addCustomer = async (req, res, next) => {
    const fname = req.body.item;
    const lname = req.body.lname;
    const hashedAndSaltedPassword = "TEST_PASSWORD";
    const emailVerified = false;
    const address = {
        country: "philippines",
        street1: "#1 in Bikini Bottom",
        street2: null,
        city: "Quezon City",
        state: "Metro Manila",
        zip: "1116"
    };
    const newCustomer = new customers_1.default({
        fname, lname, hashedAndSaltedPassword, emailVerified, address
    });
};
exports.addCustomer = addCustomer;
