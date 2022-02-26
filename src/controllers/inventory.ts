import { RequestHandler } from "express";

import Inventory from "../models/inventory";

export const addItem: RequestHandler = async (req, res, next) => {
  const item = req.body.item
  const description = req.body.description
  const categories = req.body.categories
  const currency = req.body.currency
  const options = req.body.options

  const newItem = new Inventory({
    item, description, categories, currency, options
  })

  try{
    await newItem.save()
  }
  catch(err){
    res.status(500).json({Error: err})
    process.exit()
  }
  res.status(201).json({message: "Created new item", createdItem: newItem})
}

export const getProducts: RequestHandler = async (req, res, next) => {

}