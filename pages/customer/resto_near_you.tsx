import Head from "next/head";
import CardRestoNearYou from "../../components/Customer/Resto_Near_You/Card_RestoNearYou";
import C_Header from "@/components/Customer/C_Header";
import { Merchant } from "../interface";

export default function resto_near_you({ merchants }: {merchants: Merchant[]}) {
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
