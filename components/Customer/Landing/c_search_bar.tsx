import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/customer/search_result?query=${searchQuery}`);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <form className="flex items-center px-2 w-[329px]" onSubmit={handleSearch}>
          <div className="relative w-full drop-shadow-2xl">
            <div
              className="bg-white text-black font-poppins
                text-base rounded-3xl w-full pl-4 h-[44px] flex items-center
                border-black border-opacity-25 border-2"
            >
              <button
                className="bg-white text-black font-poppins mr-2"
                type="submit"
              >
                <img
                  className="h-[21px] w-[22px]"
                  src="/icon_nav_c_search.svg"
                />
              </button>
              <input
                type="text"
                className="w-[220px] rounded-lg pl-1 pr-1 focus:outline-none font-poppins"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
