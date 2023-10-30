import Image from "next/image";
import banner from "../../Assets/Images/banner.png";
export default function Banner() {
  return (
    <div className="">
      <Image className="w-full h-36 " src={banner} alt="banner" />
    </div>
  );
}
