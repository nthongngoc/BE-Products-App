import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()

  const port = parseInt(process.env.PORT)

  await app.listen(port)
  Logger.log("app started at: "+port)
}

bootstrap()
