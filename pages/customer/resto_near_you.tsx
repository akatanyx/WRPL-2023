import Head from "next/head";
import Link from "next/link";
import CardRestoNearYou from "../../components/Customer/Resto_Near_You/Card_RestoNearYou";
import C_Header from "@/components/Customer/C_Header";
import React from "react";
import { getSession } from "next-auth/react";
import { connectToDatabase } from "../mongodb";
import { Merchant } from "../interface";
interface RestoNearProps {
  merchants: Merchant[];
}

export default function resto_near_you({ merchants }: RestoNearProps) {
  return (
    <>
      <div>
        <Head>
          <title>Restaurant Near You</title>
        </Head>

        <C_Header>Restoran di sekitar</C_Header>

        <div className="p-[20px] flex flex-col gap-y-[18px] rounded-lg ">
          {merchants.map((item: Merchant) => (
            <CardRestoNearYou key={item._id} merchantItem={item} />
          ))}
        </div>

        <div className="mb-96"></div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session?.user) {
    // User is not authenticated, redirect to login page or show an error
    return {
      redirect: {
        destination: "/customer/login",
        permanent: false,
      },
    };
  } else {
    // User is authenticated

    const merchants = await fetch(
      `http://localhost:3000/api/getcollection?type=merchants`
    ).then((res) => res.json());
    return {
      props: {
        merchants,
      },
    };
  }
}
