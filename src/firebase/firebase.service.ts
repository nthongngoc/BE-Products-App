/* eslint-disable @typescript-eslint/no-var-requires */
import { credential, initializeApp, storage } from 'firebase-admin'
import { Injectable, Logger } from '@nestjs/common'

const GOOGLE_APPLICATION_CREDENTIALS = '../../certs/service-account.json'

@Injectable()
export class FirebaseService {
  constructor(
  ) {
    initializeApp({
      credential: credential.cert(require(GOOGLE_APPLICATION_CREDENTIALS)),
      storageBucket: `${process.env.BUCKET_NAME_FIREBASE}.appspot.com`
    })
  }

  async uploadFileToFirebase(fileContent, fileID): Promise<string> {
    try {
      const mimeType = fileContent.originalname.split(".")
      const fileName = `${fileID}.${mimeType[mimeType.length-1].toLowerCase()}`
      const file = storage().bucket().file(fileName)

      const url = `https://storage.googleapis.com/${process.env.BUCKET_NAME_FIREBASE}.appspot.com/${fileName}`

      const blobStream = file.createWriteStream({
        metadata: {
          contentType: fileContent.mimeType,
        }
      })

      blobStream.on('error', (error) => {
        return Promise.reject(`Something is wrong! Unable to upload at the moment.\n ${error}`)
      })

      blobStream.on('finish', () => {
        console.log("Updated successfully!")
        return Promise.resolve(url)
      })

      blobStream.end(fileContent.buffer)

      return url
    } catch(error) {
      Logger.log(error)
      return Promise.reject(error)
    }
  }

  async generateSignedUrl(fileID, mimeType ): Promise<string> {
    try {
      const fileName = `${fileID}.${mimeType.toLowerCase()}`
      const file = storage().bucket().file(fileName)
      const url = await file.getSignedUrl({
        action: "read",
        expires: new Date().setHours(new Date().getHours() + 1000)
      })

      return url[0]
    } catch (error) {
      Logger.log(error)
      return Promise.reject(error)
    }
  }
}
