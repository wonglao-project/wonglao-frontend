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
  // images: string[];
}

export enum EnumSellerCategory {
  BAR = "Bar",
  BREWER = "Brewer",
  PRODUCT = "Product",
}

export type SellerCategory =
  | EnumSellerCategory.BAR
  | EnumSellerCategory.BREWER
  | EnumSellerCategory.PRODUCT
