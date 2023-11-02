import Search from "@/components/Search";
import Product from "@/components/Product";
import Image from "next/image";
import Link from "next/link";
import Back from "@/Assets/Icon/back.png";

export default async function Page({ params }) {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?q=${keyword}`
  );
  const searchProduct = await response.json();

  return (
    <div>
      <div className="flex flex-row items-center text-center justify-between pb-2 h-20">
        <Link href="/">
          <Image src={Back} className="w-8 h-8 mx-2" alt="iconback" />
        </Link>
        <h1 className="font-bold text-2xl w-full">{keyword}</h1>
      </div>
      <Search />

      <Product api={searchProduct} />
    </div>
  );
}
