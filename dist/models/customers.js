"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const Schema = mongoose_1.default.Schema;
const customerSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hashedAndSaltedPassword: { type: String, required: true },
    image: { type: String, required: true },
    address: {
        country: { type: String, required: true },
        street1: { type: String, required: true },
        street2: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true },
    }
});
customerSchema.plugin(mongoose_unique_validator_1.default);
exports.default = mongoose_1.default.model('Customer', customerSchema);
