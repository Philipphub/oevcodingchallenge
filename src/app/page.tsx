import "bootstrap/dist/css/bootstrap.css";
import { ShoppingList } from "@/app/components/ShoppingList";
import { getProducts } from "@/api/products-dao";

export default async function Home() {
  const products = await getProducts();

  return <ShoppingList products={products.products} />;
}
