import { useState } from 'react';
import Router from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event : any) => {
    event.preventDefault();

    const response = await fetch('/api/otentikasi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      setIsLoggedIn(true);
      Router.push('/landingcoba');
    } else {
      console.error('Login failed');
    }
  };

  if (isLoggedIn) {
    return <p>You are already logged in</p>;
  }

  return (
      <div className="flex flex-col item-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white justify-center">
          {/* Logo */}
          <div className="flex justify-center py-6">
            <img
              className="h-205 w-206 justify-center rounded-lg"
              src="/logo.svg"
            ></img>
          </div>
          <form onSubmit={handleSubmit}>
            {/* email */}
            <div className="p-2">
              <p className="text-left font-bold text-sm">Email</p>
              <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  className="p-1 bg-white w-226 h-30 rounded-md border-2 border-[#E89005] flex justify-center"
                  onChange={(event) => setEmail(event.target.value)}
                >
                
              </input>
            </div>
            {/* Password */}
            <div className="p-2">
              <p className=" font-bold text-left text-sm">Password</p>
              <input
                  type="password"
                  value={password}
                  placeholder="********"
                  className="p-1 bg-white w-226 h-30 rounded-md border-2 border-[#E89005] flex"
                  onChange={(event) => setPassword(event.target.value)}
                >
              </input>
              <p className="text-right text-[#D84A05] font-bold text-xs ">
                Forgot Password
              </p>
            </div>
            {/* tombol login */}
            <div>
              <div className="py-2">
                <button
                  type="submit"
                  value="Login"
                  className="bg-[#EC7505] hover:bg-orange-700 text-white text-[20px] px-4 py-2 rounded font-bold"
                >
                  LOGIN
                </button>
              </div>
            </div>
          </form>
          {/* tidak punya akun */}
          <div className="flex flex-row justify-center py-2">
            <p className="text-[12px]">
              Doesn't have an account?{" "}
              <a href="signup_page" className="text-bold text-[12px] font-bold">
                SIGN UP
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>


  //   <form onSubmit={handleSubmit}>
  //     <label>
  //       Email:
  //       <input
  //         type="email"
  //         value={email}
  //         onChange={(event) => setEmail(event.target.value)}
  //       />
  //     </label>
  //     <label>
  //       Password:
  //       <input
  //         type="password"
  //         value={password}
  //         onChange={(event) => setPassword(event.target.value)}
  //       />
  //     </label>
  //     <button type="submit">Login</button>
  //   </form>
  );
}
