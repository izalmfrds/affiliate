import Link from "next/link";
import Image from "next/image";
import kategoriimg from "@/Assets/Images/kategoribaju.png";

export default function Kategori() {
  return (
    <div className="grid grid-cols-4 gap-4  bg-white shadow-md mx-2">
      <div className=" justify-items-center items-center text-center m-auto my-4">
        <Link href="/Kategori_pages">
          <Image className="w-12 h-12  " src={kategoriimg} alt="iconkategori" />
          <h1>Baju</h1>
        </Link>
      </div>

      <div className=" justify-items-center items-center text-center m-auto my-4">
        <Link href="/Admin">
          <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
          <h1>Baju</h1>
        </Link>
      </div>

      <div className=" justify-items-center items-center text-center m-auto my-4">
        <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
        <h1>Baju</h1>
      </div>
      <div className=" justify-items-center items-center text-center m-auto my-4">
        <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
        <h1>Baju</h1>
      </div>
      <div className=" justify-items-center items-center text-center m-auto my-4">
        <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
        <h1>Baju</h1>
      </div>
      <div className=" justify-items-center items-center text-center m-auto my-4">
        <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
        <h1>Baju</h1>
      </div>
      <div className=" justify-items-center items-center text-center m-auto my-4">
        <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
        <h1>Baju</h1>
      </div>
      <div className=" justify-items-center items-center text-center m-auto my-4">
        <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
        <h1>Baju</h1>
      </div>
    </div>
  );
}
