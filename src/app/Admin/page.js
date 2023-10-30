import Image from "next/image";
import profile from "../../Assets/Images/profile.png";
export default function Admin() {
  return (
    <>
      <div className="border-2 rounded-2xl bg-[#343434] text-white m-1">
        <div className=" flex flex-row gap-4 mt-14 mx-2">
          <Image className="w-14 h-14" src={profile} alt="profileimg" />
          <div className="text-base">
            <p>Selamat Pagi,</p>
            <p>Kayes</p>
          </div>
        </div>
        <div className="my-6 mx-2">
          <h1 className="text-2xl font-medium ">
            Affiliate Shopee & Tokopedia No.1 Di Indonesia
          </h1>
        </div>
      </div>

      <div className="m-4">
        <h1 class="mb-2 font-medium">Upload Produk Affiliate</h1>
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </div>

      <div class="m-4">
        <label for="product" class="font-medium">
          Nama Produk
        </label>
        <div class="flex flex-row gap-1">
          <input
            type="text"
            id="product"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Masukan Kode"
          />
          <input
            type="text"
            id="product"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama Produk"
          />
        </div>
      </div>

      <div class="m-4">
        <label for="shopee" class="font-medium">
          Link Shopee
        </label>

        <input
          type="text"
          id="shopee"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Masukan Link Shopee"
        />
      </div>

      <div class="m-4">
        <label for="tokopedia" class="font-medium">
          Link Tokopedia
        </label>

        <input
          type="text"
          id="tokopedia"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Masukan Link Tokopedia"
        />
      </div>

      <div className="m-4">
        <button class="w-full h-12 bg-[#343434] text-white font-medium rounded-lg ">
          <h1>Upload Produk</h1>
        </button>
      </div>
    </>
  );
}
