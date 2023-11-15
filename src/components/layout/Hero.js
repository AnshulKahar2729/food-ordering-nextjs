import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero mt-8">
      <div className=" py-12">
        <h1 className=" text-4xl font-semibold">
          Everything<br />
          is better <br />
          with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className=" my-6 text-gray-500 text-sm">
          Pizza is the ultimate comfort food. With its crispy crust, savory
          sauce, and gooey cheese, it's no wonder that pizza is loved by so
          many.
        </p>
        <div className=" flex gap-4  text-sm ">
          <button className="bg-primary uppercase items-center text-white rounded-full px-4 py-2 flex gap-2">
            Order now <Right />
          </button>
          <button className=" flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more <Right />{" "}
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          alt={"pizza"}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
}
