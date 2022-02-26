"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const optionSchema = new Schema({
    sku: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    maxQuantity: { type: Number, required: true },
    size: {
        h: { type: Number },
        l: { type: Number },
        w: { type: Number },
        uom: { type: String },
    } || { type: String || Number },
    // size: {type:String || Number},
    color: { type: String },
    image: { type: String },
});
exports.default = optionSchema;
