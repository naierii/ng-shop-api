"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getProducts = exports.saveProduct = void 0;
const docToObject_1 = __importDefault(require("../functions/docToObject"));
const featuredProduct_1 = __importDefault(require("../models/featuredProduct"));
const saveProduct = async (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const image = req.body.image;
    const newProduct = new featuredProduct_1.default({
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
exports.saveProduct = saveProduct;
const getProducts = async (req, res, next) => {
    let featureds;
    try {
        featureds = await featuredProduct_1.default.find();
    }
    catch (err) {
        res.status(500).json({ message: err.message });
        return;
    }
    if (!featureds) {
        res.status(404).json({ message: "Error 404" });
        return;
    }
    console.log(process.env.USERNAME);
    res.json({ featureds });
};
exports.getProducts = getProducts;
const getProductById = async (req, res, next) => {
    const id = req.params.id;
    let product;
    try {
        product = await featuredProduct_1.default.findById(id);
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
