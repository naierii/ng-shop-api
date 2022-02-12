import {Router} from 'express'
import { createProducts, getProductById, getProducts } from '../controllers/products'

const productsRouter = Router()

productsRouter.post('/', createProducts)

productsRouter.get('/', getProducts)
productsRouter.get('/:id', getProductById)

productsRouter.patch('/', function(){})

productsRouter.delete('/', function(){})

export default productsRouter;