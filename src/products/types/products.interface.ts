import { Types, Document } from 'mongoose'
import { FindAllDto } from './product.dto'

export interface Product extends Document {
  id: Types.ObjectId
  name: string
  price: number
  quantity: number
  rootImage: string
  imageURL: string
  createdAt: Date
  updatedAt: Date
}

  export interface CreateOneProduct {
    name: string
    price: string
    quantity: string
  }

export interface CreateOneService {
  createOneProduct: CreateOneProduct
  rootImage: string,
  imageURL: string
}

export interface UpdateProduct {
  id?: Types.ObjectId
  name?: string
  price?: number
  quantity?: number
  rootImage?: string
  imageURL?: string
}

export interface UpdateProductService {
  query: Types.ObjectId
  updateProduct:  UpdateProduct
}

export interface Query {
  findAll: FindAllDto
}

export interface FindAll {
  total: number
  data: Product[]
  currentPageNumber: number
  limit: number
}
