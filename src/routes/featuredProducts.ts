import { Router } from "express";
import { getProducts, saveProduct } from "../controllers/featuredProducts";

const featuredProductsRouter = Router()

featuredProductsRouter.post('/', saveProduct)

featuredProductsRouter.get('/', getProducts)

export default featuredProductsRouter