import "bootstrap/dist/css/bootstrap.css";
import { ShoppingList } from "@/app/ShoppingList";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const products = await getData();

  return <ShoppingList products={products.products} />;
}
