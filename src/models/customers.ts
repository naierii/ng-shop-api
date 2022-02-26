import mongoose from 'mongoose'

const Schema = mongoose.Schema

const customerSchema = new Schema({
  fname: {type:String, required: true},
  lname: {type:String, required: true},
  hashedAndSaltedPassword: {type: String, required: true},
  emailVerified: {type:Boolean},
  address: {
    country:{type:String, required: true},
    street1:{type:String, required: true},
    street2:{type:String, required: true},
    city:{type:String, required:true},
    state:{type:String, required:true},
    zip:{type:String, required:true},
  }
})

export default mongoose.model('customer', customerSchema)