import Image from "next/image";
import shopee from "@/Assets/Icon/shopee.png";
import tokopedia from "@/Assets/Icon/tokopedia.png";

import React from "react";

const index = ({ api }) => {
  console.log(api);
  return (
    <div>
      <div className="border-2 border-black mb-4 mx-2 bg-white">
        {api.map((produk, index) => {
          return (
            <div key={index}>
              <img className="w-full h-auto" src={produk.image} alt="test" />
              <div className="m-2 ">
                <p>{produk.id}</p>
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
          );
        })}
      </div>
    </div>
  );
};

export default index;
