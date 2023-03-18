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

// export default function Posts({ posts }: PostsProps) {
//   return (
//     <div>

//   {/* untuk mengakses posts dengan index tertentu */}
//       <div>
//         <h1>Posts</h1>
//         {posts.length > 0 ? (
//           <ul>
//             <li>{posts[0].email}</li>
//             <li>{posts[0].nama}</li>
//           </ul>
//         ) : (
//           <p>No posts found</p>
//         )}
//       </div>

//     {/* untuk mengakses seluruh isi array */}
//     <div>
//         {posts.map((post) => (
//           <div key={post._id}>
//             <h2>{post.email}</h2>
//             <p>{post.nama}</p>
//           </div>
//         ))}
//     </div>
//   </div>
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

import React from 'react';
import Link from 'next/link';

interface User {
  _id: string;
  nama: string;
  email: string;
  username: string;
  no: string;
  password: string;
  repassword: string;
}

interface UsersProps {
  users: User[];
}

export default function Users({ users }: UsersProps) {
  return (
    <div>

      {/* untuk mengakses users dengan index tertentu */}
      <div>
        <h1>Users</h1>
        {users.length > 0 ? (
          <ul>
            <li>{users[0].email}</li>
            <li>{users[0].nama}</li>
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div>

      {/* untuk mengakses seluruh isi array */}
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <h2>{user.email}</h2>
            <p>{user.nama}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts?type=merchants');
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 10,
  };
}
