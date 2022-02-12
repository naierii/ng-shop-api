import mongoose from 'mongoose'

const Schema = mongoose.Schema

const featuredProductSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type:Number, required: true},
  prevPrice: {type:Number || null},
  image: {type: String, required: true},
})

export default mongoose.model('FeaturedProduct', featuredProductSchema)