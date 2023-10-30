import Link from "next/link";
import Image from "next/image";
import kategoriimg from "@/Assets/Images/kategoribaju.png";

export default function Kategori() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className=" justify-items-center items-center text-center m-auto">
        <Link href="/Kategori_pages">
          <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
          <h1>Baju</h1>
        </Link>
      </div>

      <div className=" justify-items-center items-center text-center m-auto">
        <Link href="/Admin">
          <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
          <h1>Baju</h1>
        </Link>
      </div>

      <div className=" justify-items-center items-center text-center m-auto">
        <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
        <h1>Baju</h1>
      </div>
      <div className=" justify-items-center items-center text-center m-auto">
        <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
        <h1>Baju</h1>
      </div>
      <div className=" justify-items-center items-center text-center m-auto">
        <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
        <h1>Baju</h1>
      </div>
      <div className=" justify-items-center items-center text-center m-auto">
        <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
        <h1>Baju</h1>
      </div>
      <div className=" justify-items-center items-center text-center m-auto">
        <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
        <h1>Baju</h1>
      </div>
      <div className=" justify-items-center items-center text-center m-auto">
        <Image className="w-12 h-12 " src={kategoriimg} alt="iconkategori" />
        <h1>Baju</h1>
      </div>
    </div>
  );
}
