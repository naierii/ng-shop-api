import mongoose from 'mongoose'

const Schema = mongoose.Schema
const optionSchema = new Schema({
  sku: {type:String, required:true},
  name:{type: String, required: true},
  price:{type:Number, required: true},
  quantity: {type:Number, required:true},
  maxQuantity:{type:Number, required:true},
  size:{
    h:{type:Number},
    l:{type:Number},
    w:{type:Number},
    uom:{type:String},
  } || {type:String || Number},
  // size: {type:String || Number},
  color:{type:String},
  image:{type:String},
})

export default optionSchema