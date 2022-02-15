import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import path from "path";

import featuredProductsRouter from "./routes/featuredProducts";

require('dotenv').config()

const app = express();

app.use(json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')))

app.use("/featuredproducts", featuredProductsRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

mongoose
  .connect(`mongodb+srv://${process.env.DEV}:${process.env.PASSWORD}@cluster0.pn1vx.mongodb.net/ng-shop?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch(
    err => {console.log(err)}
  );
