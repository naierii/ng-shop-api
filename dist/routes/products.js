"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controllers/products");
const productsRouter = (0, express_1.Router)();
// productsRouter.post("/", saveProduct)
productsRouter.get("/", products_1.getProducts);
productsRouter.patch("/", () => { });
productsRouter.delete("/", () => { });
exports.default = productsRouter;
