// import { NextPage } from "next";
// import { signOut, useSession } from "next-auth/react";
// import Head from "next/head";
// import Router from "next/router";
// import { useEffect } from "react";
// // import Navbar from "@/components/Navbar";
// import C_Header from "@/components/Customer/C_Header";

// const Protected: NextPage = (): JSX.Element => {
//   const { status, data } = useSession();

//   useEffect(() => {
//     if (status === "unauthenticated") Router.replace("/login"); //direct ke login
//   }, [status]);

//   if (status === "authenticated")
//     return (
//       <div>
//         {/* Header1 */}
//         <div>
//           <C_Header />
//         </div>
//         {/* Content */}
//         <div>welcome to letseat</div>
//         {/* Navbar */}
//         <div></div>
//       </div>
//     );

//   return <div className="text-bold text-3xl">loading</div>;
// };

// export default Protected;


import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IndexPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.name) {
      router.push("/customer/landing");
    } else if (status === "loading") {
      // Don't return anything while session is being fetched
    } else {
      router.push("/login");
    }
  }, [session, status, router]);

  return null;
};

export default IndexPage;





