"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const featuredProducts_1 = require("../controllers/featuredProducts");
const featuredProductsRouter = (0, express_1.Router)();
featuredProductsRouter.post('/', featuredProducts_1.saveProduct);
featuredProductsRouter.get('/', featuredProducts_1.getProducts);
exports.default = featuredProductsRouter;
