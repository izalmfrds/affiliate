import "./globals.css";
import Banner from "@/components/Banner";
import Search from "@/components/Search";
import Kategori from "@/components/Kategori";
import Product from "@/components/Product";
export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="sticky top-0 bg-white py-2 h-auto my-4">
        <Search />
        <Kategori />
      </div>
      <Product />
      <Product />
    </div>
  );
}
