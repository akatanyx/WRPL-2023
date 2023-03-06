import { NextPage } from "next";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { FormEventHandler, useState } from "react";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
    Router.replace("/");
  };
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
                value={userInfo.email}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
                type="email"
                placeholder="Email"
                className="p-1 bg-white w-226 h-30 rounded-md border-2 border-[#E89005] flex justify-center"
              ></input>
            </div>
            {/* Password */}
            <div className="p-2">
              <p className=" font-bold text-left text-sm">Password</p>
              <input
                value={userInfo.password}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                }
                type="password"
                placeholder="********"
                className="p-1 bg-white w-226 h-30 rounded-md border-2 border-[#E89005] flex"
              ></input>
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
  );
};

export default SignIn;
