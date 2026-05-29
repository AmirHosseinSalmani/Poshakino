type category = {
  name: string;
  children: string;
};
type rating = {
  rate: number;
  count: number;
};
export type ProductsType = {
  id: number;
  category: category[];
  abuotProduct: string;
  image: string;
  price: number;
  rating: rating[];
};
