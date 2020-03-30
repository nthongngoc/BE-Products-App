import { Module } from '@nestjs/common'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsSchema } from './models/products.schema'
import { FirebaseModule } from 'src/firebase/firebase.module'

const ProductsModel = MongooseModule.forFeature([{ name: 'Products', schema: ProductsSchema }])

@Module({
  imports: [ProductsModel, FirebaseModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})

export class ProductsModule { }
