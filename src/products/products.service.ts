import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UpdateProductService, CreateOneService, Product, Query, FindAll } from './types/products.interface'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private readonly productsModel: Model<Product>,
  ) { }

  async findManyProducts({findAll}: Query): Promise<FindAll> {
    try {
      const { currentPageNumber, limit} = findAll
      const total = await this.productsModel.count()

      const products = await this.productsModel.find().
      limit(Number(limit)).
      skip(Number(currentPageNumber) * Number(limit))

      return {
        total,
        data: products,
        currentPageNumber: Number(currentPageNumber),
        limit: Number(limit),
      }
    } catch (error) {
      Promise.reject(error)
    }
  }

  async findOneProduct(query: string): Promise<Product> {
    try {
      const product = await this.productsModel.findOne({_id: query})

      return product
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async createOneProduct(createOne: CreateOneService): Promise<any> {
    try {
      const { createOneProduct, rootImage, imageURL} = createOne

      const product = {
        ...createOneProduct,
        rootImage,
        imageURL,
      }


      const newProduct = await new this.productsModel(product)
      await newProduct.save()

      return newProduct
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async updateProduct({query, updateProduct}: UpdateProductService): Promise<boolean> {
    try {
      const product = await this.productsModel.findOne({_id: query})

      if (!product) {
        return Promise.reject({
          name: 'Product Not Found',
          code: 404
        })
      }

      await this.productsModel.updateOne({_id: query}, updateProduct, {
        $upsert: false,
      })

      return true
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async deleteProduct(query: string): Promise<boolean> {
    try {
      const product = await this.productsModel.findOne({_id: query})

      if (!product) {
        return Promise.reject({
          name: 'Product Not Found',
          code: 404
        })
      }

      await this.productsModel.remove({_id: query})

      return true
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
