import { Router } from "express";
import { getProducts, saveProduct } from "../controllers/products";

const productsRouter = Router();

// productsRouter.post("/", saveProduct)

productsRouter.get("/", getProducts)

productsRouter.patch("/", ()=>{})

productsRouter.delete("/", ()=>{})

export default productsRouter