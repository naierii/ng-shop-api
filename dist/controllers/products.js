"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.saveProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const saveProduct = async (req, res, next) => {
    const name = req.body.name;
    const type = req.body.type;
    const group = req.body.group;
    const description = req.body.description;
    const price = req.body.price;
    const prevPrice = req.body.prevPrice;
    const image = req.body.image;
    const newProduct = new product_1.default({
        name, type, group, description, price, prevPrice, image
    });
    try {
        await newProduct.save();
    }
    catch (err) {
        res.status(500).json({ message: err.message });
        process.exit();
    }
    res.status(201).json({ message: "created a product", createdProduct: newProduct });
};
exports.saveProduct = saveProduct;
const getProducts = async (req, res, next) => {
    let products;
    try {
        products = await product_1.default.find();
    }
    catch (e) {
        res.status(500).json({ message: e.message });
        return;
    }
    if (!products) {
        res.status(404).json({ message: "Error 404" });
        return;
    }
    res.json({ products });
};
exports.getProducts = getProducts;
