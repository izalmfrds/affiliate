import "./globals.css";
import Banner from "@/components/Banner";
import Search from "@/components/Search";
import Kategori from "@/components/Kategori";
import Product from "@/components/Product";
export default function Home() {
  return (
    <div>
      <Banner />
      <Search />
      <Kategori />
      <Product />
      <Product />
    </div>
  );
}
