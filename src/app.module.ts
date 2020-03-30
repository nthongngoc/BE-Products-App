import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsModule } from './products/products.module'
import { ConfigModule } from '@nestjs/config'

const url = 'mongodb://localhost:27017/appota'

const DatabaseModule = MongooseModule.forRoot(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env'}),
    DatabaseModule,
    ProductsModule,
  ],
})

export class AppModule { }
