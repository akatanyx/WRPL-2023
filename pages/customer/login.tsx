import { getSession, signIn, SignInResponse } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const route = useRouter();

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
      route.push("/customer/hero");
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      {/* Navigasi Back To Index */}
      <div className="m-[27px]">
        <Link href="/customer">
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
        <div className="font-poppins font-bold text-[24px]">Login</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 mt-1">
          {/* Email */}
          <input
            className=" border border-[#9A9A9A] rounded-lg w-72 h-[53px] font-poppins text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            className="border border-[#9A9A9A] rounded-lg w-72 h-[53px] font-poppins text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center text-center px-1 w-72 justify-between">
            {/* Remember me */}
            <div className="flex">
              <input type="checkbox" className="mr-2 rounded-lg" />
              <div className="font-poppins text-[12px]">Remember me</div>
            </div>

            {/* Forgot password */}
            <Link href="/customer/forgot_password">
              <div className="font-poppins text-[12px] font-medium text-[#EC7505]">
                Forget password?
              </div>
            </Link>
          </div>

          {/* Button Login */}
          <button
            type="submit"
            value="Login"
            className="flex justify-center items-center w-[290px] h-[53px] 
              bg-[#EC7505] rounded-lg shadow-lg mt-[19px]"
          >
            <div className="text-white font-semibold font-poppins text-[19px]">
              Login
            </div>
          </button>
        </form>

        {/* tidak punya akun */}
        <div className="flex flex-row justify-center font-poppins">
          <Link href="/customer/signup">
            <div className="text-sm">
              Don&apos;t have an account?{" "}
              <button>
                <h1 className="font-bold text-sm">SIGN UP</h1>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (session?.user) {
    // User is authenticated, redirect to hero page
    return {
      redirect: {
        destination: "/customer/hero",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}