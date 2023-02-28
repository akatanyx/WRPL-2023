import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login"); //direct ke login
  }, [status]);

  if (status === "authenticated")
    return (
      <div>
        <Head>
          <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="css/style.css"></link>
        </Head>
        <div
          onClick={() => signOut()}
          className="flex fixed w-full bg-white shadow justify-between p-4"
        >
          <h1 className="font-bold text-lg">Let's Eat Merchant</h1>
          <img src="../uiw_notification.svg" alt="" />
        </div>
        <body>
          <div className="py-7"></div>

          <section>
            {/* <!-- Status Pesanan --> */}
            <div className="flex justify-between">
              {/* <!-- Belum bisa focus --> */}
              {/* <!-- Belum terintegerasi pop up (?) --> */}
              <div className="mt-1 p-3 flex">
                <a
                  href="#"
                  className="focus:decoration-red-700 focus:underline focus:underline-offset-8"
                >
                  <p className=" text-mobile px-4 ">In Progress</p>
                </a>
                <a
                  href="#"
                  className="focus:decoration-red-700 focus:underline focus:underline-offset-8"
                >
                  <p className=" text-mobile px-4 ">Completed</p>
                </a>
                <a
                  href="#"
                  className="focus:decoration-red-700 focus:underline focus:underline-offset-8"
                >
                  <p className=" text-mobile px-4 ">Canceled</p>
                </a>
              </div>
            </div>
          </section>

          <section className=" border-4 m-6 border-red-500 rounded-lg ">
            {/* <!-- Nama Pemesan dan waktu pemesanan --> */}
            <div className="flex items-center justify-between p-6">
              <h1 className=" font-bold text-sm ">Your name</h1>
              <p className=" text-xmobile">2 menit lalu </p>
            </div>

            {/* <!-- List Pesanan --> */}
            <div className="flex flex-col px-7">
              <div className="border-2 border-yellow-600 mb-4 p-3 px-6 rounded-lg text-sm">
                <p className=" text-xmobile">2 menit lalu</p>
              </div>

              <div className="border-2 border-yellow-600 mb-4 p-3 px-6 rounded-lg text-sm">
                <p className=" text-xmobile">2 menit lalu</p>
              </div>

              <div className="border-2 border-yellow-600 mb-4 p-3 px-6 rounded-lg text-sm">
                <p className=" text-xmobile">2 menit lalu</p>
              </div>
            </div>
          </section>
          <section className=" border-4 m-6 border-red-500 rounded-lg ">
            {/* <!-- Nama Pemesan dan waktu pemesanan --> */}
            <div className="flex items-center justify-between p-6">
              <h1 className=" font-bold text-sm ">Your name</h1>
              <p className=" text-xmobile">2 menit lalu</p>
            </div>

            {/* <!-- List Pesanan --> */}
            <div className="flex flex-col px-7">
              <div className="border-2 border-yellow-600 mb-4 p-3 px-6 rounded-lg text-sm">
                <p className=" text-xmobile">2 menit lalu</p>
              </div>

              <div className="border-2 border-yellow-600 mb-4 p-3 px-6 rounded-lg text-sm">
                <p className=" text-xmobile">2 menit lalu</p>
              </div>

              <div className="border-2 border-yellow-600 mb-4 p-3 px-6 rounded-lg text-sm">
                <p className=" text-xmobile">2 menit lalu</p>
              </div>
            </div>
          </section>
        </body>
        {/* <!-- NavBar --> */}
        <section
          id="bottom-navigation"
          className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
        >
          <div id="tabs" className="flex justify-between px-4">
            <a href="#l" className="flex flex-col items-center">
              <img src="../img/logoletseat.svg" alt="" />
              <span className="text-yellow-600 font-bold tab tab-home block">
                Let's Eat
              </span>
            </a>
            <a href="" className="flex flex-col items-center">
              <img src="../circlenavbar.png" alt="" />
              <span className="tab tab-home block text-xmobile ">
                Transaksi
              </span>
            </a>
            <a href="#" className="flex flex-col items-center">
              <img src="../circlenavbar.png" alt="" />
              <span className="tab tab-home block text-xmobile ">Menu</span>
            </a>
            <a href="#" className="flex flex-col items-center">
              <img src="../circlenavbar.png" alt="" />
              <span className="tab tab-home block text-xmobile ">Promo</span>
            </a>
            <a href="#" className="flex flex-col items-center">
              <div className="bg-orange"></div>
              <button className="tab tab-home block text-xmobile">
                Profil
              </button>
            </a>
          </div>
        </section>
      </div>
    );

  return <div className="text-bold text-3xl">loading</div>;
};

export default Protected;
