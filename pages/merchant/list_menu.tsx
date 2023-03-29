import React from "react";
import Link from "next/link";

import Card_Menu from "../../components/Merchant/List Menu/Card_Menu";
import M_Navbar from "../../components/Merchant/M_Navbar";
import Header_w_notif from "../../components/Merchant/Header_w_notif";
import Tambah_Menu from "@/components/Merchant/List Menu/Tambah_Menu";

interface Post {
  _id: string;
  nama: string;
  desk: string;
  harga: number;
  imgURL: string;
}

interface PostsProps {
  posts: Post[];
}

export default function list_menu({ posts }:PostsProps) {
  return (
    <>
      <div>
        <Header_w_notif>List Menu</Header_w_notif>
      </div>

      <div className="mx-5 mt-4">
        <h1 className=" font-poppins font-semibold text-[23px]">Makanan</h1>

        <div className="flex flex-col gap-y-3">
            {posts.map((post)=>(
            <Card_Menu
              key={post._id}
              nama={post.nama}
              desk={post.desk}
              harga={post.harga}
              imgURL={post.imgURL}
            />
            ))}    
        </div>
      </div>

      <div>
        <M_Navbar />
      </div>

      <div>
        <Tambah_Menu />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts?type=menus");
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}

// import React from 'react';
// import Link from 'next/link';

// interface Post {
//   _id: string;
//   nama: string;
//   email: string;
//   username: string;
//   no: string;
//   password: string;
//   repassword: string;
// }

// interface PostsProps {
//   posts: Post[];
// }

// { /*Template list merchat
//     Design masih bisa dirubah
//     Isi nanti diganti kalau dah ada database list restoran
//     Bakal ditambah array menu juga
//     Sudah menerapkan konsep perulangan
// */ }

// export default function Posts({ posts }: PostsProps) {
//   return (
//     <div >
//         {posts.map((post) => (
//             <div className="sm:w-1/2 sm:mx-auto m-4 p-4 w-226 h-30 rounded-md border-4 border-[#D84A05] flex flex-col">
//                 <div className="flex justify-between space-y-2">
//                     <div key={post._id}>
//                         <h2>{post.nama}</h2>
//                         <p>{post.email}</p>
//                     </div>
//                     <div className="flex flex-row items-center justify-center space-x-2 text-[11px]">
//                         <div>
//                             2 menit lalu
//                         </div>
//                         <Link href="">
//                             <img src="/detail.svg"></img>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/posts');
//   const posts: Post[] = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
