import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  prevPrice: {type: Number || null},
  image: {type: String, required: true},
  // location: {
  //   lat: {type: Number, required: true},
  //   lng: {type: Number, required: true},
  // },
})

export default mongoose.model('Product', productSchema)