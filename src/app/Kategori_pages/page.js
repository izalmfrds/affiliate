import Search from "@/components/Search";
import Product from "@/components/Product";

export default function Kategori() {
  return (
    <>
      <div className="sticky top-0 bg-white pt-2 pb-2 shadow-lg">
        <Search />
      </div>
      <Product />
      <Product />
    </>
  );
}
