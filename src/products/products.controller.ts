import { Controller, Get, Param, Post, Body, Put, Delete, UseInterceptors, UploadedFile, Query, HttpException, HttpStatus, Logger } from '@nestjs/common'
import { ProductsService } from './products.service'
import { Product, FindAll } from './types/products.interface'
import { CreateOneProductDto, UpdateProductDto, FindAllDto } from './types/product.dto'
import { FileInterceptor } from "@nestjs/platform-express"
import { FirebaseService } from '../firebase/firebase.service'
import * as  mongoose from 'mongoose'

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly firebaseService: FirebaseService,
    ) {}

  @Get()
  async getManyProducts(@Query() query: FindAllDto): Promise<FindAll> {
    try {
      const data = await this.productsService.findManyProducts({findAll: query})
      return data
    } catch (error) {
      Logger.log(error)
      throw Error(error)
    }
  }

  @Get(':productID')
  async getOneProduct(@Param() { productID } ): Promise<Product> {
    try {
      const product = await this.productsService.findOneProduct(productID)
      return product
    } catch (error) {
      Logger.log(error)
      throw Error(error)
    }
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createOneProduct(@Body() createOneProductDto: CreateOneProductDto, @UploadedFile() image): Promise<Product> {
    try {

      const type = ['png', 'jpg']

      const data = image.originalname.split(".")
      const mineType = data[data.length - 1]
      const isValidMineType = type.includes(mineType)

      if (!isValidMineType) {
        return Promise.reject({
          name: "File is not an image",
          code: 400
        })
      }

      const fileID = mongoose.Types.ObjectId()
      const rootImage = await this.firebaseService.uploadFileToFirebase(image, fileID)
      const imageURL = await this.firebaseService.generateSignedUrl(fileID, mineType)

      const newProduct = await this.productsService.createOneProduct({
        createOneProduct: createOneProductDto,
        rootImage,
        imageURL,
      })

      return newProduct
    } catch(error) {
      Logger.log(error)
      throw Error(error)
    }
  }

  @Put(':productID')
  @UseInterceptors(FileInterceptor('image'))
  async updateProduct(@Body() updateProductDto: UpdateProductDto, @UploadedFile() image, @Param() { productID }): Promise<boolean> {
    try {

      let imageURL = '';
      let rootImage = '';
      if (image) {
        const type = ['png', 'jpg']
        const data = image.originalname.split('.');
        const mineType = data[data.length - 1];
        const isValidMineType = type.includes(mineType)

        if (!isValidMineType) {
          return Promise.reject({
            name: "File is not an image",
            code: 400
          })
        }

        const fileID = mongoose.Types.ObjectId();
        rootImage = await this.firebaseService.uploadFileToFirebase(
          image,
          fileID,
        );

        imageURL = await this.firebaseService.generateSignedUrl(
          fileID,
          mineType,
        );
      } else {
        const product = await this.productsService.findOneProduct(productID);
        imageURL = product.imageURL;
        rootImage = product.rootImage;
      }

      const updateInfo = { ...updateProductDto, rootImage, imageURL };

      const isUpdated = await this.productsService.updateProduct({
        query: productID,
        updateProduct: updateInfo,
      });

      return isUpdated
    } catch(error) {
      Logger.log(error)
      throw Error(error)
    }
  }

  @Delete(':productID')
  async deleteOneProduct(@Param() { productID }): Promise<boolean> {
    try {
      const isDeleted = await this.productsService.deleteProduct(productID)

      return isDeleted
    } catch(error) {
      Logger.log(error)
      throw Error(error)
    }
  }
}
