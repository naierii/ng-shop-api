"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const option_1 = __importDefault(require("./option"));
const Schema = mongoose_1.default.Schema;
const inventorySchema = new Schema({
    item: { type: String, required: true },
    description: { type: String, required: true },
    categories: [{ type: String, required: true }],
    currency: { type: String, required: true },
    options: [{ type: option_1.default, required: true }],
});
exports.default = mongoose_1.default.model('inventory', inventorySchema);
