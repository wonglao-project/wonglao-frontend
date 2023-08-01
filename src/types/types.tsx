export interface ContentDto {
  id: number
  userId: string
  place_name: string
  operating_time: string[]
  description: string
  latitude: number
  longitude: number
  address: string
  tel: string
  email: string
  category: string
  images: string[]
}

export enum EnumSellerCategory {
  BAR = "Bar",
  BREWER = "Brewer",
  PRODUCT = "Product",
}

export type SellerCategory = EnumSellerCategory

export interface SearchPlaceDetails {
  place_name: string
}

export interface PlaceDetails extends SearchPlaceDetails {
  weekday_text: string[]
  latitude: number
  longitude: number
  address: string
}

export interface CreatePlaceDetails extends PlaceDetails {
  tel: string
  email: string
  description: string
  category: EnumSellerCategory.BAR | EnumSellerCategory.BREWER
  images: string[]
}

export interface ProductDto {
  id: number
  product_name: string
  product_category: EnumProductCategory
  description: string
  images: string[]
  sellerId: number
}

export interface CreateProduct {
  product_name: string
  product_category: EnumProductCategory
  description: string
  images: string[]
  sellerId: number
}
export interface Product extends CreateProduct {
  id: number
}

export enum EnumProductCategory {
  GIN = "Gin",
  RUM = "Rum",
  WHITE_SPIRIT = "White Spirit",
}

export type ProductCategory = EnumProductCategory
