import { RequestHandler } from "express";

import Product from "../models/product";

export const saveProduct: RequestHandler = async (req, res, next) => {
  const name = req.body.name
  const type = req.body.type
  const group = req.body.group
  const description = req.body.description
  const price = req.body.price
  const prevPrice = req.body.prevPrice
  const image = req.body.image

  const newProduct = new Product({
    name, type, group, description, price, prevPrice, image
  })

  try{
    await newProduct.save()
  }catch(err: any){
    res.status(500).json({message: err.message})
    process.exit()
  }
  res.status(201).json({message: "created a product", createdProduct: newProduct})
}

export const getProducts: RequestHandler = async (req, res, next) => {
  let products;
  try{
    products = await Product.find()
  }catch(e:any){
    res.status(500).json({message: e.message})
    return
  }

  if(!products){
    res.status(404).json({message: "Error 404"})
    return
  }

  res.json({products})
}