"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const customerSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    hashedAndSaltedPassword: { type: String, required: true },
    emailVerified: { type: Boolean },
    address: {
        country: { type: String, required: true },
        street1: { type: String, required: true },
        street2: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true },
    }
});
exports.default = mongoose_1.default.model('customer', customerSchema);
