"use server";
import { revalidateTag } from "next/cache";

  export const addProduct = async (e: FormData) => {
    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();
    if (!product || !price) return;

    const newProducto: UIproducts = {
      product,
      price,
    };

    await fetch("https://65310d5a4d4c2e3f333c4831.mockapi.io/products"),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProducto),
      };
      revalidateTag("products");
  };