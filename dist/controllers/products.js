"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getProducts = exports.createProducts = void 0;
const docToObject_1 = __importDefault(require("../functions/docToObject"));
const product_1 = __importDefault(require("../models/product"));
const createProducts = async (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const image = req.body.image;
    const newProduct = new product_1.default({
        name,
        price,
        description,
        image,
    });
    try {
        await newProduct.save();
    }
    catch (err) {
        res.status(500).json({ message: err.message });
        return;
    }
    res.status(201).json({ message: "created a product", createdProduct: newProduct });
};
exports.createProducts = createProducts;
const getProducts = async (req, res, next) => {
    let product;
    try {
        product = await product_1.default.find();
    }
    catch (err) {
        res.status(500).json({ message: err.message });
        return;
    }
    if (!product) {
        res.status(404).json({ message: "Error 404" });
        return;
    }
    res.json({ product });
};
exports.getProducts = getProducts;
const getProductById = async (req, res, next) => {
    const id = req.params.id;
    let product;
    try {
        product = await product_1.default.findById(id);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
        return;
    }
    if (!product) {
        res.status(404).json({ message: "Error 404" });
        return;
    }
    res.json({ product: (0, docToObject_1.default)(product) });
};
exports.getProductById = getProductById;
