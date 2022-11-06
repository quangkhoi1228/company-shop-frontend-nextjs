export interface ShopByProductDataType {
  name: string;
  icon: string;
  products: {
    code: string;
    name: string;
  }[];
}
