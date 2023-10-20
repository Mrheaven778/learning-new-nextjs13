import { PageProps } from "@/.next/types/app/layout";
import React from "react";

export default async function page({ params }: PageProps) {
  const res = await fetch(
    `https://65310d5a4d4c2e3f333c4831.mockapi.io/products/${params.id}`
  );
  const product: UIproducts = await res.json();
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center"> <a href="/" className="">Products WareHouse</a></h1>
      <div className="max-w-4xl mx-auto flex md:flex-row flex-col items-center justify-center md:justify-between mt-11">
        <h2 className="md:ml-16 text-4xl ">
          ID:{" "}
          <span className="font-bold text-electric-violet-500  border-b border-electric-violet-500">
            {product.id}{" "}
          </span>{" "}
        </h2>
        <h3 className="text-2xl">
          Product name:{" "}
          <samp className="font-bold text-electric-violet-500  border-b border-electric-violet-500">
            {product.product}
          </samp>
        </h3>
        <p className="md:mr-16 text-2xl">
          Price:{" "}
          <span className="font-bold text-electric-violet-500 border-b border-electric-violet-500">
            {product.price}{" "}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
