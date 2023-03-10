import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import Navbar from "components/Navbar";
import NavbarCust from "@/components/Customer/Navbar";
import Header_Customer from "@/components/Header_Customer";

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login"); //direct ke login
  }, [status]);

  if (status === "authenticated")
    return (
      <div>
        {/* Header1 */}
        <div>
          <Header_Customer />
        </div>
        {/* Content */}
        <div>welcome to letseat</div>
        {/* Navbar */}
        <NavbarCust />
        <div></div>
      </div>
    );

  return <div className="text-bold text-3xl">loading</div>;
};

export default Protected;
