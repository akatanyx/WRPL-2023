// import { NextPage } from "next";
// import { signIn } from "next-auth/react";
// import Router from "next/router";
// import { FormEventHandler, useState } from "react";

// interface Props {}

// const SignIn: NextPage = (props): JSX.Element => {
//   const [userInfo, setUserInfo] = useState({ email: "", password: "" });
//   const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
//     // validate your userinfo
//     e.preventDefault();

//     const res = await signIn("credentials", {
//       email: userInfo.email,
//       password: userInfo.password,
//       redirect: false,
//     });

//     console.log(res);
//     Router.replace("/");
//   };
  // return (
  //   <div className="flex flex-col item-center justify-center min-h-screen py-2">
  //     <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
  //       <div className="bg-white justify-center">
  //         {/* Logo */}
  //         <div className="flex justify-center py-6">
  //           <img
  //             className="h-205 w-206 justify-center rounded-lg"
  //             src="/logo.svg"
  //           ></img>
  //         </div>
  //         <form onSubmit={handleSubmit}>
  //           {/* email */}
  //           <div className="p-2">
  //             <p className="text-left font-bold text-sm">Email</p>
  //                 <label htmlFor="email">Email address</label>
  //                 <input
  //                   type="email"
  //                   id="email"
  //                   value={email}
  //                   onChange={(e) => setEmail(e.target.value)}
  //                 />
  //           </div>
  //           {/* Password */}
  //           <div className="p-2">
  //             <p className=" font-bold text-left text-sm">Password</p>
  //                 <label htmlFor="password">Password</label>
  //                 <input
  //                   type="password"
  //                   id="password"
  //                   value={password}
  //                   onChange={(e) => setPassword(e.target.value)}
  //                   />
  //             <p className="text-right text-[#D84A05] font-bold text-xs ">
  //               Forgot Password
  //             </p>
  //           </div>
  //           {/* tombol login */}
  //           <div>
  //             <div className="py-2">
  //               <button
  //                 type="submit"
  //                 value="Login"
  //                 className="bg-[#EC7505] hover:bg-orange-700 text-white text-[20px] px-4 py-2 rounded font-bold"
  //               >
  //                 LOGIN
  //               </button>
  //             </div>
  //           </div>
  //         </form>
  //         {/* tidak punya akun */}
  //         <div className="flex flex-row justify-center py-2">
  //           <p className="text-[12px]">
  //             Doesn't have an account?{" "}
  //             <a href="signup_page" className="text-bold text-[12px] font-bold">
  //               SIGN UP
  //             </a>
  //           </p>
  //         </div>
  //       </div>
  //     </main>
  //   </div>
  // );
// };

import { signIn, SignInResponse } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const result = (await signIn("credentials", {
      email,
      password,
      redirect: false,
    })) as SignInResponse;

    if (result?.error) {
      alert("Invalid email or password");
    } else {
      // Redirect the user to the home page or any other page of your choice
      window.location.href = "/customer/hero";
    }
  };

  return (
    <>
      {/* Navigasi Back To Index */}
      <div className="mx-[27px] my-[27px]">
        <Link href="/customer/landing">
          <button>
            <img src="/icon_login_arrow_back.svg" alt="" />
          </button>
        </Link>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <img src="/login_image.svg" alt="" />
      </div>

      {/* Login */}
      <div className="flex flex-col mx-[37px] mt-6 gap-y-3 md:items-center">
        <h1 className="font-poppins font-bold text-[24px]">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3 mt-1">
          {/* Email */}
          <div >
            <input
            className=" border border-[#9A9A9A] rounded-lg w-72 h-[53px] font-poppins text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
            placeholder="Email" 
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div
            
          >
            <input
            className="border border-[#9A9A9A] rounded-lg w-72 h-[53px] font-poppins text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
            placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center text-center px-1 w-72 justify-between">
            {/* Remember me */}
            <div className="flex ">
              <input type="checkbox" className="mr-2 rounded-lg" />
              <p className="font-poppins text-[12px]">Remember me</p>
            </div>

            {/* Forgot password */}
            <div className="">
              <Link href="/customer/forgot_password">
                <p className="font-poppins text-[12px] font-medium text-[#EC7505]">
                  Forget password?
                </p>
              </Link>
            </div>
          </div>

          {/* Button Login */}
          <div
            className="flex justify-center items-center w-[290px] h-[44px] 
                                bg-[#EC7505] rounded-lg shadow-lg mt-2"
          >
            <button
              type="submit"
              value="Login"
              className="text-white font-semibold font-poppins text-[19px]"
            >
              Login
            </button>
          </div>
        </form>

        {/* tidak punya akun */}
        <div className="flex flex-row justify-center font-poppins ">
          <h2 className="text-sm">
            Don't have an account?{" "}
            <Link href="/customer/signup">
              <button>
                <h1 className="font-bold text-sm">SIGN UP</h1>
              </button>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}
