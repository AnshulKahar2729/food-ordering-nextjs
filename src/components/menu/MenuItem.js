export default function MenuItem() {
  return (
    <div className=" bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img src="/pizza.png" className="max-h-24 block mx-auto" alt="" />
      </div>

      <h4 className=" font-semibold my-3 text-xl">Pepperoni Pizza</h4>
      <p className=" text-gray-500 text-sm">
        Pepperoni Pizza is here, the most delicious pizza.
      </p>
      <button className="mt-4 rounded-full bg-primary text-white px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
}
