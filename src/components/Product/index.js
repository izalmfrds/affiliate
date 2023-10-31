import Image from "next/image";
import shopee from "@/Assets/Icon/shopee.png";
import tokopedia from "@/Assets/Icon/tokopedia.png";

import React from "react";

const index = ({ api }) => {
  console.log(api);
  return (
    <div className="">
      <div className="mb-4 mx-2">
        {api.map((produk, index) => {
          return (
            <div key={index} className="border-2 border-black my-4 ">
              <div className="p-12">
                <Image
                  className="w-full h-250"
                  src={produk.image}
                  alt="test"
                  width={250}
                  height={250}
                />
              </div>

              <div className="border-t-[2px] border-black py-2">
                <div className="m-2 ">
                  <p className="font-bold">[ {produk.id} ]</p>
                  <p>{produk.title}</p>
                </div>
                <div className="flex flex-rows gap-2 items-center m-2">
                  <button className="flex flex-row w-full border-2 border-black">
                    <Image
                      className="w-12 h-12 mx-2"
                      src={shopee}
                      alt="icon shopee"
                    />
                    <h1 className="h-6 w-full text-lg text-center m-auto">
                      {" "}
                      Shopee
                    </h1>
                  </button>

                  <button className="flex flex-row w-full border-2 border-black">
                    <Image
                      className="w-12 h-12 mx-2"
                      src={tokopedia}
                      alt="icon tokped"
                    />
                    <h1 className="h-6 w-full text-lg text-center m-auto">
                      {" "}
                      Tokopedia
                    </h1>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
