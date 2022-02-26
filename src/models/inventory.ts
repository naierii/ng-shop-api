import mongoose from 'mongoose'

import optionSchema from './option'

const Schema = mongoose.Schema

const inventorySchema = new Schema({
  item: {type: String, required: true},
  description: {type: String, required: true},
  categories: [{type: String, required:true}],
  currency: {type: String, required: true},
  options: [{type: optionSchema, required:true}],
})

export default mongoose.model('inventory', inventorySchema)