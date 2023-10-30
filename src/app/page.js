import "./globals.css";
import Banner from "@/components/Banner";
import Search from "@/components/Search";
import Kategori from "@/components/Kategori";
import Product from "@/components/Product";
export default function Home() {
  return (
    <div>
      <Banner />
      <div className="sticky top-0 pt-2 h-auto bg-white ">
        <Search />
        <Kategori />
      </div>
      <Product />
      <Product />
    </div>
  );
}
