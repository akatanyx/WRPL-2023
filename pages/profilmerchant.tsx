import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import Header from "components/Header";
import Navletseat from "components/Navletseat";
import Navbar from "components/Navbar";
import Pendapatan from "@/components/Pendapatan";
import ProfilM from "@/components/ProfilM";

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
        {/* Content */}
        <div>
          <ProfilM />
        </div>
        {/* Navbar */}
        <div>
          <Navbar />
        </div>
      </div>
    );

  return <div className="text-bold text-3xl">loading</div>;
};

export default TambahMenu;
