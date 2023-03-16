import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import Header from "@/components/Merchant/Header_w_notif";
import Navletseat from "components/Navletseat";
import ContentLetsEat from "components/ContentLetsEat";
import Navbar from "components/Navbar";

const TambahMenu: NextPage = (): JSX.Element => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login"); //direct ke login
  }, [status]);

  if (status === "authenticated")
    return (
      <div>
        {/* Header1 */}
        <div>
          <Header />
        </div>
        {/* Header per bagian */}
        <div>
          <Navletseat />
        </div>
        {/* Content */}
        <div>tambahkan menu</div>
        {/* Navbar */}
        <div>
          <Navbar />
        </div>
      </div>
    );

  return <div className="text-bold text-3xl">loading</div>;
};

export default TambahMenu;
