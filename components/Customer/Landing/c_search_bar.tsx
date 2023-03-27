import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/customer/search_result?query=${searchQuery}`);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <form className="flex items-center px-2 w-80" onSubmit={handleSearch}>
          <div className="relative w-full drop-shadow-2xl">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src="icon_search.svg" alt="" />
            </div>
            <input
              type="text"
              placeholder="e.g. Ayam Goreng"
              required
              className="bg-white text-black font-poppins
                text-base rounded-3xl block w-full pl-10 p-2.5 border
                border-black border-opacity-20 focus:outline-none"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
          <button className="bg-white text-black font-poppins" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
