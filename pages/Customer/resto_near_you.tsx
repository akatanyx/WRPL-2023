import Head from 'next/head'
import Link from 'next/link'
import Card_Resto from '../../components/Customer/Resto_Near_You/Card_Resto'
import SlideRestoNearYou from '../../components/Customer/Resto_Near_You/SlideRestoNearYou'
import React from 'react';

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

export default function resto_near_you ({posts}: PostsProps) {
    return (
        <>
            <Head>
                <title>Restaurant Near You</title>
            </Head>

            <div className='flex items-center'>
                <Link href='/customer' >
                    <img src="../icon_arrow_back.svg" alt="" />
                </Link>
                <h1 className='font-poppins font-bold text-[21px] -translate-x-1'>Restaurant Near You</h1>
            </div>

            <div className='bg-[#E89005] p-[14px] flex flex-col gap-y-4 rounded-lg'>
                {/* <SlideRestoNearYou /> */}
                {posts.map((post) => (
                    <div >
                        <Card_Resto key={post._id}
                            nama_resto={post.nama}
                            jam_buka={post.jam_buka}
                            jam_tutup={post.jam_tutup}
                            jarak={post.jarak}
                        />
                    </div>
                ))}
            </div>
            
            <div className="mb-96"></div>
        </>
    )
}


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/posts_resto');
    const posts: Post[] = await res.json();
  
    return {
      props: {
        posts,
      },
    };
}
