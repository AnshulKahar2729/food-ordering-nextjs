import Image from "next/image";
import Right from "../icons/Right";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section className="">
      <div className=" absolute left-0 right-0 w-full justify-start">
        <div className=" absolute text-left -z-10 left-0 -top-[70px]">
          <Image
            src={"/sallad1.png"}
            alt="sallad1"
            width={109}
            height={189}
          />
        </div>
        <div className=" absolute -top-[70px] right-0 -z-10">
          <Image
            src={"/sallad2.png"}
            alt="sallad1"
            width={107}
            height={195}
          />
        </div>
      </div>
      <div className=" text-center mb-4">
        <SectionHeaders subHeader={"Check Out"} mainHeader={"Our Menu"} />
      </div>
      <div className=" grid grid-cols-3 gap-4">
           <MenuItem/>
           <MenuItem/>
           <MenuItem/>
           <MenuItem/>
           <MenuItem/>
           <MenuItem/>
      </div>
    </section>
  );
}
