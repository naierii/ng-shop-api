import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

import User from './interfaces/User'

const Schema = mongoose.Schema

const customerSchema = new Schema<User>({
  fname: {type:String, required: true},
  lname: {type:String, required: true},
  email: {type:String, required: true, unique: true},
  hashedAndSaltedPassword: {type: String, required: true},
  image:{type: String, required: true},
  address: {
    country:{type:String, required: true},
    street1:{type:String, required: true},
    street2:{type:String},
    city:{type:String, required:true},
    state:{type:String, required:true},
    zip:{type:String, required:true},
  }
})

customerSchema.plugin(uniqueValidator)

export default mongoose.model('Customer', customerSchema)