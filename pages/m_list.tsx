import React from 'react';
import Link from 'next/link';

interface Post {
  _id: string;
  nama: string;
  username: string;
  no: string;
  password: string;
  repassword: string;
}

interface PostsProps {
  posts: Post[];
}

{ /*Template list merchat
    Design masih bisa dirubah
    Isi nanti diganti kalau dah ada database list restoran
    Bakal ditambah array menu juga
    Sudah menerapkan konsep perulangan
*/ }

export default function Posts({ posts }: PostsProps) {
  return (
    <div >
        {posts.map((post) => (
            <div className="sm:w-1/2 sm:mx-auto m-4 p-4 w-226 h-30 rounded-md border-4 border-[#D84A05] flex flex-col">
                <div className="flex justify-between space-y-2">
                    <div key={post._id}>
                        <h2>{post.nama}</h2>
                        <p>{post.email}</p>
                    </div>
                    <div className="flex flex-row items-center justify-center space-x-2 text-[11px]">
                        <div>
                            2 menit lalu
                        </div>
                        <Link href="">
                            <img src="/detail.svg"></img>
                        </Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}
