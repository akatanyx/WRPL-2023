import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { connectToDatabase } from "../mongodb";
import { getSession } from "next-auth/react";

export default function Signup_merchant({user}: {user: any}) {
  const [namaResto, setNamaResto] = useState("");
  const [alamatResto, setAlamatResto] = useState("");
  const [deskripsiResto, setDeskripsiResto] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch("/api/signup?type=merchant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_user: user?._id,
        nama_resto: namaResto,
        alamat_resto: alamatResto,
        deskripsi_resto: deskripsiResto,
      }),
    });
    
    if (response.ok) {
      router.push("/merchant/landing_merchant");
    } else {
      console.error(response.statusText);
    }
  };

  return (
    // <!-- Gambar -->
    <div className="font-poppins">
      <Head>
        <title>LetsEAT Merchant: Sign Up</title>
      </Head>

      <div className="flex justify-center mt mt-10">
        <img src="/m_signup_image.svg" alt="" />
      </div>

      <h1 className="font-bold text-[24px] ml-[39px] mt-[25px] w-[290px]">
        Pendaftaran Merchant
      </h1>

      <form
        className="flex flex-col gap-y-5 mt-4 items-center"
        onSubmit={handleSubmit}
      >
        {/* Nama Resto */}
        <div>
          <input
            type="text"
            className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins 
                          text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
            placeholder="Nama Resto"
            value={namaResto}
            onChange={(event) => setNamaResto(event.target.value)}
          />
        </div>

        {/* Alamat Resto */}
        <div>
          <input
            type="text"
            className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins
                        text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
            placeholder="Alamat Resto"
            value={alamatResto}
            onChange={(event) => setAlamatResto(event.target.value)}
          />
        </div>

        {/* Deskripsi Resto */}
        <div>
          <textarea
            className="border border-[#9A9A9A] rounded-lg w-[290px] h-[172px] font-poppins
                        text-[19px] p-3 px-4 text-[#838080] focus:outline-none align-text-top"
            placeholder="Deskripsi Resto"
            value={deskripsiResto}
            onChange={(event) => setDeskripsiResto(event.target.value)}
          />
        </div>

        {/* Register */}
        <button
          className="w-[290px] h-[53px] mt-[71px] mb-[50px] rounded-lg mx-auto
                        flex justify-center items-center bg-[#EC7505]"
        >
          <h1 className="font-semibold text-[19px] text-white">Register</h1>
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context:any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/customer/login",
        permanent: false,
      },
    };
  }

  const db = await connectToDatabase();
  const email = session?.user?.email;
  const user = await db.collection("users").findOne({email});

  try {
    const collection = db.collection('merchants');
    const existingMerchant = await collection.findOne({ id_user: user?._id.toString() });
    if (existingMerchant) {
      return {
        redirect: {
          destination: '/merchant/landing_merchant', // Redirect to an error page or display an error message
          permanent: false,
        },
      };
    }
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    }, // Proceed with rendering the signup page
  };
  
}