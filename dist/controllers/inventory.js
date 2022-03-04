"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = exports.addItem = void 0;
const inventory_1 = __importDefault(require("../models/inventory"));
const addItem = async (req, res, next) => {
    const item = req.body.item;
    const description = req.body.description;
    const categories = req.body.categories;
    const currency = req.body.currency;
    const options = req.body.options;
    const newItem = new inventory_1.default({
        item, description, categories, currency, options
    });
    try {
        await newItem.save();
    }
    catch (err) {
        res.status(500).json({ Error: err });
        process.exit();
    }
    res.status(201).json({ message: "Created new item", createdItem: newItem });
};
exports.addItem = addItem;
const getItems = async (req, res, next) => {
    let products;
    try {
        products = await inventory_1.default.find();
    }
    catch (e) {
        res.status(500).json(e);
        process.exit();
    }
    if (!products) {
        res.status(404).json({ message: "Error 404" });
        process.exit();
    }
    res.json({ products });
};
exports.getItems = getItems;
