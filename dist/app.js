"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
// import featuredProductsRouter from "./routes/featuredProducts";
const products_1 = __importDefault(require("./routes/products"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/uploads/images', express_1.default.static(path_1.default.join('uploads', 'images')));
app.use("/products", products_1.default);
// app.use("/featuredproducts", featuredProductsRouter);
app.use((err, req, res, next) => {
    res.status(500).json({ err });
});
mongoose_1.default
    .connect(`mongodb+srv://${process.env.DEV}:${process.env.PASSWORD}@cluster0.pn1vx.mongodb.net/ng-shop?retryWrites=true&w=majority`)
    .then(() => {
    app.listen(process.env.PORT || 5000);
})
    .catch(err => { console.log(err); });
