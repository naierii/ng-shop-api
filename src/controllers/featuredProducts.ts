import { RequestHandler } from "express";
// import docToObject from "../functions/docToObject";
import Product from "../models/featuredProduct";

export const saveProduct:RequestHandler = async (req, res, next) =>{
  const name = (req.body as {name:string}).name
  const price = (req.body as {price:number}).price
  const prevPrice = (req.body as {prevPrice:number | undefined}).prevPrice
  const description = (req.body as {description:string}).description
  const image = (req.body as {image:string}).image
  
  const newProduct = new Product({
    name,
    price,
    description,
    image,
    prevPrice
  })

  try{
    await newProduct.save();
  }catch(err:any){
    res.status(500).json({ message: err.message });
    return;
  }
  res.status(201).json({message: "created a product", createdProduct: newProduct})
}

export const getProducts:RequestHandler = async (req, res, next) => {
  let featureds;
  try{
    featureds = await Product.find()
  }catch(err:any){
    res.status(500).json({ message: err.message });
    return;
  }

  if(!featureds){
    res.status(404).json({ message: "Error 404" });
    return
  }

  res.json({ featureds })

}

export const getProductById:RequestHandler = async (req, res, next) => {
  const id = req.params.id;

  let product;
  try{
    product = await Product.findById(id)
  }catch(err:any){
    res.status(500).json({ message: err.message });
    return;
  }

  if(!product){
    res.status(404).json({ message: "Error 404" });
    return
  }

  // res.json({ product: docToObject(product) })
  res.json({ product })

}