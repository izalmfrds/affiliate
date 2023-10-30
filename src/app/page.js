import "./globals.css";
import Banner from "@/components/Banner";
import Search from "@/components/Search";
import Kategori from "@/components/Kategori";
import Product from "@/components/Product";
export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="sticky top-0 py-2 h-auto ">
        <Search />
        <Kategori />
      </div>
      <Product />
      <Product />
    </div>
  );
}
