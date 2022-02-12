import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import path from "path";

import productsRouter from "./routes/products";
import featuredProductsRouter from "./routes/featuredProducts";

const app = express();

app.use(json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')))

app.use("/products", productsRouter);

app.use("/featuredProducts", featuredProductsRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("a")
  res.status(500).json({ message: err.message });
});

mongoose
  .connect('mongodb+srv://reian:M1mor4chi.@cluster0.pn1vx.mongodb.net/ng-shop?retryWrites=true&w=majority')
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch(
    err => {console.log(err)}
  );
