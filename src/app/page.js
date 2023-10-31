import "./globals.css";
import Banner from "@/components/Banner";
import Search from "@/components/Search";
import Kategori from "@/components/Kategori";
import Product from "@/components/Product";
export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`
  );
  const allProduk = await response.json();

  return (
    <div>
      <Banner />
      <div className="sticky top-0 pt-2 h-auto bg-white ">
        <Search />
        <Kategori />
      </div>

      <Product api={allProduk ?? []} />
    </div>
  );
}
