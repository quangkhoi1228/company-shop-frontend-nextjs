export interface ProductDataType {
  name: string;
  descriptions: string;
  tag?: { content: string; color: string };
  category: string[];
  price: number;
  vote: number;
  createAt: string;
  yearOfMnufacture: string;
  thumbnail: string;
}
