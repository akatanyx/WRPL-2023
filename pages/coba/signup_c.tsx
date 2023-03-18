import Head from "next/head";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Confirmation from "./confirmation";

export default function SignupForm() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [no, setNo] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch('/api/signup?type=user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nama, email, username, no, password, repassword }),
    });
    if (response.ok) {
      router.push('/login');
    } else {
      console.error(response.statusText);
    }
  };

  return (
    <form onSubmit={handleSubmit}
      action="/"
      method="POST"
      className="space-y-3">
      <div className="flex justify-center">
        <div className="max-w-full">
          <p className="text-left font-bold text-[15px]">
            Nama
          </p>
          <input
            className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
            id="nama"
            type="nama"
            aria-label="nama"
            placeholder="Nama"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
          />
        </div>
      </div>
      {/* <!-- Email  --> */}
      <div className="flex justify-center mt-2">
        <div className="max-w-full">
          <p className="text-left font-bold  text-[15px]">
            Email
          </p>
          <input
            className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
            id="email"
            type="email"
            aria-label="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      {/* <!-- Username  --> */}
      <div className="flex justify-center mt-2">
        <div className="max-w-full">
          <p className="text-left font-bold  text-[15px]">
            Username
          </p>
          <input
            className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
            id="Username"
            type="Username"
            aria-label="Username"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
      </div>

      {/* <!-- Nomor Telepon  --> */}
      <div className="flex justify-center mt-2">
        <div className="max-w-full">
          <p className="text-left font-bold  text-[15px]">
            Nomor Telepon
          </p>
          <input
            className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
            id="Nomor Telepon"
            type="Nomor Telepon"
            aria-label="Nomor Telepon"
            placeholder="Nomor Telepon"
            value={no}
            onChange={(event) => setNo(event.target.value)}
          />
        </div>
      </div>

      {/* <!-- Password --> */}
      <div className="flex justify-center mt-2">
        <div className="max-w-full">
          <p className="text-left font-bold  text-[15px]">
            Password
          </p>
          <input
            className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
            id="Password"
            type="Password"
            aria-label="Password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      {/* <!-- Re-enter Password --> */}
      <div className="flex justify-center mt-2">
        <div className="max-w-full">
          <p className="text-left font-bold  text-[15px]">
            Re-enter Password
          </p>
          <input
            className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
            id="Re-enter Password"
            type="Re-enter Password"
            aria-label="Re-enter Password"
            placeholder="Re-enter Password"
            value={repassword}
            onChange={(event) => setRepassword(event.target.value)}
          />
        </div>
      </div>
      {/* <!-- Button Signup --> */}
      <div className="flex justify-center py-4">
        {/* <Link
        href="Confirmation"> */}
          <button className="bg-[#EC7505] text-white
           text-[20px] px-4 py-2 rounded font-bold">
            SIGNUP
          </button>
        {/* </Link> */}
      </div>
    </form>
  )
}