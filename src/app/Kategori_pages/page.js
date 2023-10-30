import Image from "next/image";
import Back from "../../Assets/Icon/back.png";
import Search from "@/components/Search";
import Product from "@/components/Product";

export default function Kategori() {
  return (
    <>
      <div className="flex flex-row items-center mt-2 gap-24">
        <Image src={Back} className="w-8 h-8 ml-2" alt="iconback" />
        <h1 className="font-bold text-2xl">Kategori Baju</h1>
      </div>
      <div className="sticky top-0 bg-white pt-2 pb-2 shadow-lg">
        <Search />
      </div>
      <Product />
      <Product />
    </>
  );
}
