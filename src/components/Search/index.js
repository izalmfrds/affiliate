import Image from "next/image";
import search from "../../Assets/Icon/search.png";
export default function Search() {
  return (
    <div className="flex flex-row border-black border-2 w-auto h-auto mx-2 bg-white">
      <div className="flex flex-row  w-full h-11 justify-between m-1 items-center mx-2">
        <input
          class=" placeholder:text-slate-400 block  w-full py-2 pl-1 pr-3 focus:outline-none  sm:text-base"
          placeholder="Masukan Kode"
          type="text"
          name="search"
        />
        <Image className="h-6 w-6" src={search} alt="searchicon" />
      </div>
    </div>
  );
}
