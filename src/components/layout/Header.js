import Link from "next/link";

export default function Header() {
  return (
    <header className=" flex flex-row items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="/">
        EATILICIOUS
      </Link>
      <nav className=" flex flex-row gap-8 text-gray-500 font-semibold items-center">
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className=" flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={"/login"}>Login</Link>
        <Link
          href={"/register"}
          className="bg-primary px-8 text-white rounded-full  py-2"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
