import Head from 'next/head';
import Items_resto from '@/components/Customer/Resto/items_resto';
import React from 'react';

interface Post {
  _id: string;
  nama: string;
  harga: string;
  desk: string;
  tag: string;
  kategori: string;
  rating: string;
}

interface PostsProps {
  posts: Post[];
}

export default function resto ({posts}: PostsProps){
    return (
        <>
            <Head>
                <title>Resto Page</title>
            </Head>

            <div className='rounded-b-3xl absolute w-full bg-[#EC7505] h-82 shadow-lg'>
                <h1 className='text-[#EC7505] text-center text-3xl'>empty</h1>
            </div>

            <div>
                <div className="relative flex rounded-lg w-[332] bg-transparent p-6">
                    <img src="/icon_landing_restaurant.svg" alt=""/>
                    <div className="flex-col flex translate-y-3 translate-x-6 py-3 gap-y-3">
                        <h1 className="font-semibold font-poppins text-xl">Anteiku</h1>
                        <h2 className="font-medium font-poppins text-[17px] text-[#666666]"
                        >
                            Jl.LohaLohe No.17
                        </h2>
                        <div className='flex'>
                            <img src="/icon_star.svg" alt="" className="w-[18px] h-[18px]"/>
                            <p className='font-bold text-[15px] font-poppins translate-x-1'>5.0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='font-bold font-poppins text-xl px-5'>Promo Hari Ini</h1>
                <div className='flex flex-wrap px-5 gap-x-10 gap-y-4'>
                {posts.map((post) => (
                    <div >
                        <Items_resto key={post._id}
                            nama={post.nama}
                            harga={post.harga}
                        />
                    </div>
                ))}
                </div>
            </div>

            <div className='mb-96'></div>

        </>
    )
}


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/posts_menu');
    const posts: Post[] = await res.json();
  
    return {
      props: {
        posts,
      },
    };
}