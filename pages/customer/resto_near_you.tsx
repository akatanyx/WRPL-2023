import Head from "next/head";
import Link from "next/link";
import Card_Resto from "../../components/Customer/Resto_Near_You/Card_RestoNearYou";
import C_Header from "@/components/Customer/C_Header";
import React from "react";

interface Post {
  _id: string;
  nama: string;
  jam_buka: string;
  jam_tutup: string;
  jarak: string;
}

interface PostsProps {
  posts: Post[];
}

export default function resto_near_you({ posts }: PostsProps) {
  return (
    <>
    <div>
    <Head>
        <title>Restaurant Near You</title>
      </Head>

      <C_Header>
        Restoran di sekitar
      </C_Header>

      <div className="p-[20px] flex flex-col gap-y-[18px] rounded-lg ">
        {posts.map((post) => (
          <Card_Resto
            key={post._id}
            nama_resto={post.nama}
            jam_buka={post.jam_buka}
            jam_tutup={post.jam_tutup}
            jarak={post.jarak}/>
        ))}
      </div>

      <div className="mb-96"></div>
      </div>
    </>
    
      
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts?type=restos");
  console.log(res);
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}
