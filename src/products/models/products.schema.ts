import * as mongoose from 'mongoose'

export const ProductsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required : true },
  rootImage: { type: String },
  imageURL: { type: String },
  quantity: { type: Number,required: true },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
})
