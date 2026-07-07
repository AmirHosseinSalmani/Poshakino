export type ProductProps = {
  id: number;
  name: string;
  color: string[];
  category: { name: string; children: string };
  abuotProduct: string;
  image: string;
  price: number;
  count: number;
  rating: { rate: number; count: number };
  offer: number;
};
