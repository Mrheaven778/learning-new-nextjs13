import { addProduct } from "@/handler/serverActions";

export default async function Home() {
  const res = await fetch(
    "https://65310d5a4d4c2e3f333c4831.mockapi.io/products",
    {
      cache: "no-cache",
      next:{
        tags: ["products"],
      }
    }
  );
  const data: UIproducts[] = await res.json();

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">Products WareHouse</h1>
      <form
        action={addProduct}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          type="text"
          name="product"
          placeholder="Enter Product name..."
          className="border border-gray-300 p-2 rounded-md text-black font-bold"
        />
        <input
          type="text"
          name="price"
          placeholder="Enter Price..."
          className="border border-gray-300 p-2 rounded-md text-black font-bold"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-electric-violet-700 to-indigo-900 border hover:from-electric-violet-600 hover:to-indigo-600 transition hover:scale-105 transform duration-300 ease-out py-2 px-4 text-white rounded-full "
        >
          Add Product
        </button>
      </form>
      <hr className="border-violet-700 max-w-4xl mx-auto"/>
      <div className="flex flex-col items-center max-w-4xl mx-auto">

      <h2 className="font-bold p-5 text-electric-violet-400 text-3xl">
        List of Products
      </h2>
      <div className="flex flex-wrap gap-5">
        {data.map((product) => (
          <div
            key={product.id}
            className="p-5 shadow-sm shadow-electric-violet-300"
          >
            <h1>{product.product}</h1>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
}
