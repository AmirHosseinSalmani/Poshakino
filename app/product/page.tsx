import Image from "next/image";
import Link from "next/link";

export type ProductProps = {
  product: {
    id: number;
    name: string;
    category: { name: string; children: string };
    abuotProduct: string;
    image: string;
    price: number;
    count: number;
    rating: { rate: number; count: number };
    offer?: number;
  };
};
function Products({ product }: ProductProps) {
  // const [id, category, abuotProduct, image, price, rating] = props;
  // console.log(id);
  return (
    <Link key={product.id} href={`/product/${product.id}`}>
      <div className="border w-[90%]  border-foterli shadow-xl rounded-xl cursor-pointer">
        <Image
          src={product.image}
          alt={`تصویر : ${product.name}`}
          height={200}
          width={300}
          className=" rounded-t-xl"
        />
        <div className="flex justify-between pt-3 p-2">
          <p className="">
            {product.name} {product.category.name} {product.abuotProduct}
          </p>
        </div>
        <div className="flex justify-between items-center p-3 mt-8">
          <span className="text-sm font-bold bg-primary p-2 px-3 rounded-lg cursor-pointer hover: text-background">
            جزییات
          </span>
          <p className="">{product.price.toLocaleString("fa-IR")} تومان </p>
        </div>
      </div>
    </Link>
  );
}

export default Products;
