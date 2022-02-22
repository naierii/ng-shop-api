"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const featuredProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    prevPrice: { type: Number || undefined, required: true },
    image: { type: String, required: true },
    sortId: { type: Number }
});
exports.default = mongoose_1.default.model('FeaturedProduct', featuredProductSchema);
