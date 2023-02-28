import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";

const Protected: NextPage = (): JSX.Element => {
  const session = useSession();
  console.log(session);
  return <div>hi</div>;
};

export default Protected;
