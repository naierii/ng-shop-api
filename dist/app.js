"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const products_1 = __importDefault(require("./routes/products"));
const featuredProducts_1 = __importDefault(require("./routes/featuredProducts"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/uploads/images', express_1.default.static(path_1.default.join('uploads', 'images')));
app.use("/products", products_1.default);
app.use("/featuredProducts", featuredProducts_1.default);
app.use((err, req, res, next) => {
    console.log("a");
    res.status(500).json({ message: err.message });
});
mongoose_1.default
    .connect('mongodb+srv://reian:M1mor4chi.@cluster0.pn1vx.mongodb.net/ng-shop?retryWrites=true&w=majority')
    .then(() => {
    app.listen(process.env.PORT || 5000);
})
    .catch(err => { console.log(err); });
