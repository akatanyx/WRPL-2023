import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

export default function Signup() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password !== repassword) {
      alert("Password tidak sama");
      return;
    }

    const responseSignUpUser = await fetch("/api/post_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nama, email, password }),
    });

    if (responseSignUpUser.ok) {
      alert("Berhasil mendaftar");
      router.push("/customer/login");
    } else {
      alert("Gagal mendaftar");
      console.error(responseSignUpUser);
    }
  };

  return (
    <>
      {/* Navigasi Back To Index */}
      <div className="mx-[27px] my-[29px]">
        <Link href="/customer">
          <button>
            <img src="/icon_login_arrow_back.svg" alt="" />
          </button>
        </Link>
      </div>

      {/* Image */}
      <img src="/signup_c_image.svg" alt="" className="mx-auto" />

      {/* Signup*/}
      <div className="flex flex-col mt-10 gap-y-3 w-full">
        <h1
          className="mx-[37px] font-poppins font-bold text-[24px]
                sm:mx-auto
                "
        >
          Register
        </h1>

        <form
          className="flex flex-col gap-y-5 mt-4 items-center"
          onSubmit={handleSubmit}
        >
          {/* Nama */}
          <div>
            <input
              type="text"
              className=" border border-[#9A9A9A] rounded-lg h-[53px] font-poppins 
                                    w-[290px] text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="text"
              className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins 
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Re-enter Password */}
          <div>
            <input
              type="password"
              className={`border ${
                password == repassword ? "border-[#9A9A9A]" : "border-red-200"
              } rounded-lg w-[290px] h-[53px] font-poppins
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none`}
              placeholder="Re-enter Password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>

          {/* Button Regsiter */}
          <button
            className="flex justify-center items-center w-[290px] h-[44px] 
                                bg-[#EC7505] rounded-lg shadow-lg mt-2"
          >
            <h1 className="text-white font-semibold font-poppins text-[19px]">
              Register
            </h1>
          </button>
        </form>

        {/* tidak punya akun */}
        <div className="flex -translate-y-1 justify-center font-poppins ">
          <h2 className="text-sm">
            Already have an account?{" "}
            <Link href="/customer/login">
              <button>
                <h1 className="font-bold text-sm">Login</h1>
              </button>
            </Link>
          </h2>
        </div>

        <div className="mb-5" />
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/customer",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
