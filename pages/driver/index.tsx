import Header_w_notif from "@/components/Merchant/Header_w_notif"
import { connectToDatabase } from "../mongodb";
import { getSession } from "next-auth/react";

export default function index () {
    return (
        <div>
            <Header_w_notif> Index Page </Header_w_notif>
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const session = await getSession(context);
    if (!session?.user) {
      return {
        redirect: {
          destination: "/customer/login",
          permanent: false,
        },
      };
    } else {
      const db = await connectToDatabase();
      const collection = db.collection("users");
      const user = await collection.findOne({ email: session.user.email });
  
      if (!user || !user.roles.includes("driver")) {
        return {
          redirect: {
            destination: "/signup_driver",
            permanent: false,
          },
        };
      } else { //Sementara ini page index driver kosong jadi arahkan ke landing driver
        return{
          redirect: {
            destination: "/driver/landing_driver",
          }
        }
      }

      return {
        props: {},
      };
    }
  }