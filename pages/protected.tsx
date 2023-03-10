import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";

const Protected: NextPage = (): JSX.Element => {
  const session = useSession();
  console.log(session);
  return (
    <div className="flex h-screen">
      <div className="w-1/4" />
      <div className="w-2/4">
        <div className="grid h-full place-items-center">
          <div className="h-1/4">Profil</div>
          <div className="bg-gray-300 w-full h-full rounded-full"></div>
          <div className="h-1/4">John</div>
        </div>
        <div className="w-1/4" />
      </div>
    </div>
  );
};

export default Protected;
