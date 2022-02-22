"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const productSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    group: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    prevPrice: { type: Number || undefined, required: true },
    image: { type: String, required: true },
    // soldCount: {type:Number, required: true},
    // stocksCount: {type:Number, required:true},
});
exports.default = mongoose_1.default.model('Product', productSchema);
