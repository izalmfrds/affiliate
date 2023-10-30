import Image from "next/image";
import Productimg from "@/Assets/Images/test.png";
import shopee from "@/Assets/Icon/shopee.png";
import tokopedia from "@/Assets/Icon/tokopedia.png";

export default function Product() {
  return (
    <div className="border-2 border-black mb-6">
      <Image className="w-full h-auto" src={Productimg} alt="test" />
      <div className="m-2 ">
        <p>[Code]</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="flex flex-rows gap-2 items-center m-2">
        <button className="flex flex-row w-full border-2 border-black">
          <Image className="w-12 h-12 mx-2" src={shopee} alt="icon shopee" />
          <h1 className="h-6 w-full text-lg text-center m-auto"> Shopee</h1>
        </button>

        <button className="flex flex-row w-full border-2 border-black">
          <Image className="w-12 h-12 mx-2" src={tokopedia} alt="icon tokped" />
          <h1 className="h-6 w-full text-lg text-center m-auto"> Tokopedia</h1>
        </button>
      </div>
    </div>
  );
}
