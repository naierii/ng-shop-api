"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = __importDefault(require("../models/product"));
const testProductsRouter = (0, express_1.Router)();
testProductsRouter.get("/", function (req, res, next) {
    const testProduct = new product_1.default({
        name: "Test product",
        type: "Test type",
        group: "Test group",
        description: "This is a test product and this is a test description",
        price: 99,
        prevPrice: 100,
        image: "/uploads/images/special-offers/featured/HUAWEI-P50-Pocket-1.jpg",
    });
});
