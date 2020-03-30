import { IsNotEmpty, IsString, IsNumberString, IsOptional } from 'class-validator'

export class CreateOneProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsNotEmpty()
  @IsNumberString()
  readonly price: string

  @IsNotEmpty()
  @IsNumberString()
  readonly quantity: string
}

export class UpdateProductDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  readonly name?: string

  @IsNotEmpty()
  @IsNumberString()
  @IsOptional()
  readonly price?: number

  @IsNotEmpty()
  @IsNumberString()
  @IsOptional()
  readonly quantity?: number
}

export class FindAllDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  readonly limit?: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  readonly currentPageNumber?: string
}
