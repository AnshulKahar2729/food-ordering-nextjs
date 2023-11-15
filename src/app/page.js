import Link from "next/link";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero/>
     <HomeMenu/>
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="max-w-md flex flex-col gap-4 mx-auto mt-4 text-gray-500">
          {" "}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            distinctio nemo ipsam quae labore nihil quia. Vel officia voluptatum
            voluptas ex officiis ab soluta accusamus saepe et aut fugit
            aspernatur voluptates quaerat
          </p>
          <p>
            Vel officia voluptatum voluptas ex officiis ab soluta accusamus
            saepe et aut fugit aspernatur voluptates quaerat odit expedita sit
            voluptatibus vitae eius, magni, debitis itaque, asperiores quia
            laborum! Ut cum veniam itaque ipsum harum!
          </p>
          <p>
            Vel officia voluptatum voluptas ex officiis ab soluta accusamus
            saepe et aut fugit aspernatur voluptates quaerat odit expedita sit{" "}
          </p>
        </div>
      </section>
      <section className=" text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate us"}
          mainHeader={"Contact us"}
        />
        <div className=" mt-8 underline text-gray-500">
          <a href="tel:46485693256" className=" text-4xl">
            +46 485 693 256
          </a>
        </div>
      </section>
    
    </>
  );
}
