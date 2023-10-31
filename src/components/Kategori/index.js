import Link from "next/link";
import Image from "next/image";
import pakaian from "@/Assets/Images/t-shirt.png";
import elektronik from "@/Assets/Images/elektronik.png";
import perabotan from "@/Assets/Images/perabotan.png";
import hiasan from "@/Assets/Images/hiasan.png";

export default function Kategori() {
  return (
    <>
      <div className="mx-2 mt-2 py-2 ">
        <h1 className=" text-xl">Kategori</h1>
      </div>
      <div className="grid grid-cols-4 space-justify-between  bg-white shadow-md mx-2 mb-4 border-[2px] border-black ">
        <div className=" justify-items-center items-center text-center w-22 h-20 m-2 border-[1px] border-black">
          <Link href="/Kategori_pages">
            <Image
              className="w-12 h-12 mx-auto my-1 "
              src={pakaian}
              alt="iconkategori"
            />
            <h1>Pakaian</h1>
          </Link>
        </div>

        <div className=" justify-items-center items-center text-center w-22 h-20 m-2 border-[1px] border-black">
          <Link href="/Admin">
            <Image
              className="w-12 h-12 mx-auto my-1 "
              src={elektronik}
              alt="iconkategori"
            />
            <h1>Elektronik</h1>
          </Link>
        </div>

        <div className=" justify-items-center items-center text-center w-22 h-20 m-2 border-[1px] border-black">
          <Image
            className="w-12 h-12 mx-auto my-1"
            src={perabotan}
            alt="iconkategori"
          />
          <h1>Perabotan</h1>
        </div>
        <div className=" justify-items-center items-center text-center w-22 h-20 m-2 border-[1px] border-black">
          <Image
            className="w-12 h-12 mx-auto my-1"
            src={hiasan}
            alt="iconkategori"
          />
          <h1>Hiasan</h1>
        </div>
      </div>
    </>
  );
}
