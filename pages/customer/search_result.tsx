// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// interface Result {
//   _id: string;
//   nama: string;
//   harga: string;
//   desk: string;
//   tag: string;
//   kategori: string;
//   rating: string;
// }

// export default function SearchPage() {
//   const router = useRouter();
//   const { query } = router;

//   const [searchQuery, setSearchQuery] = useState(query.query?.toString() || '');
//   const [searchResults, setSearchResults] = useState<Result[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(`/api/search?query=${searchQuery}`);
//       const results = await response.json();
//       setSearchResults(results);
//     }

//     if (searchQuery) {
//       fetchData();
//     }
//   }, [searchQuery]);

//   function handleSearch(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     router.push(`/customer/search_result?query=${searchQuery}`);
//   }

//   return (
//     <div className="flex justify-center">
//       <div className="flex flex-col">
//         <form className="flex items-center px-2 w-80" onSubmit={handleSearch}>
//           <div className="relative w-full drop-shadow-2xl">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <img src="icon_search.svg" alt="" />
//             </div>
//             <input
//               type="text"
//               placeholder="e.g. Ayam Goreng"
//               required
//               className="bg-white text-black font-poppins text-base rounded-3xl block w-full pl-10 p-2.5 border border-black border-opacity-20 focus:outline-none"
//               value={searchQuery}
//               onChange={(event) => setSearchQuery(event.target.value)}
//             />
//           </div>
//           <button className="bg-white text-black font-poppins" type="submit">
//             Search
//           </button>
//         </form>
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result._id}>
//               <div>{result.nama}</div>
//               <div>{result.harga}</div>
//               <div>{result.desk}</div>
//               <div>{result.rating}</div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Result {
  _id: string;
  nama: string;
  harga: string;
  desk: string;
  tag: string;
  kategori: string;
  rating: string;
}

export default function SearchPage() {
  const router = useRouter();
  const { query } = router;

  const [searchQuery, setSearchQuery] = useState(query.query?.toString() || '');
  const [searchResults, setSearchResults] = useState<Result[]>([]);

  useEffect(() => {
    if (searchQuery) {
      fetchData();
    }
  }, []);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetchData();
    router.push(`/customer/search_result?query=${searchQuery}`);
  }
  
  async function fetchData() {
    const response = await fetch(`/api/search?query=${searchQuery}`);
    const results = await response.json();
    setSearchResults(results);
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
              className="bg-white text-black font-poppins text-base rounded-3xl block w-full pl-10 p-2.5 border border-black border-opacity-20 focus:outline-none"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
          <button className="bg-white text-black font-poppins" type="submit">
            Search
          </button>
        </form>
        <ul>
          {searchResults.map((result) => (
            <li key={result._id}>
              <div>{result.nama}</div>
              <div>{result.harga}</div>
              <div>{result.desk}</div>
              <div>{result.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

