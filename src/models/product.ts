import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  group: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  prevPrice: {type: Number || undefined, required: true},
  image: {type:String, required: true},

  // soldCount: {type:Number, required: true},
  // stocksCount: {type:Number, required:true},
})

export default mongoose.model('Product', productSchema)