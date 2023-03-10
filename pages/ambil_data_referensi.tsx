import React from 'react';
import Link from 'next/link';

interface Post {
  _id: string;
  nama: string;
  email: string;
  username: string;
  no: string;
  password: string;
  repassword: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div>

  {/* untuk mengakses posts dengan index tertentu */}
      <div>
        <h1>Posts</h1>
        {posts.length > 0 ? (
          <ul>
            <li>{posts[0].email}</li>
            <li>{posts[0].nama}</li>
          </ul>
        ) : (
          <p>No posts found</p>
        )}
      </div>

    {/* untuk mengakses seluruh isi array */}
    <div>
        {posts.map((post) => (
          <div key={post._id}>
            <h2>{post.email}</h2>
            <p>{post.nama}</p>
          </div>
        ))}
    </div>
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
