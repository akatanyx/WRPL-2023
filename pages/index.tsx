import Head from "next/head";

export default function Home() {
  return (
    <div>
      <head>
          <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="css/style.css"></link>
      </head>
      <body>
          {/* <!-- Header --> */}
          <div className="block fixed inset-x-0 z-10 bg-white shadow">
              <div className="flex justify-between p-4">
                  <h1 className="font-bold font-inter text-lg">Let's Eat Merchant</h1>
                  <img src="../img/uiw_notification.svg" alt=""/>
              </div>
          </div> 
          <div className="py-7"></div>

          <section>
              {/* <!-- Status Pesanan --> */}
              <div className="flex justify-between">
                  {/* <!-- Belum bisa focus --> */}
                  {/* <!-- Belum terintegerasi pop up (?) --> */}
                  <div className="mt-1 p-3 flex">
                      <a href="#" className="focus:decoration-red-700 focus:underline focus:underline-offset-8">
                          <p className="font-inter text-mobile px-4 ">In Progress</p>
                      </a>
                      <a href="#" className="focus:decoration-red-700 focus:underline focus:underline-offset-8">
                          <p className="font-inter text-mobile px-4 ">Completed</p>
                      </a>
                      <a href="#" className="focus:decoration-red-700 focus:underline focus:underline-offset-8">
                          <p className="font-inter text-mobile px-4 ">Canceled</p>
                      </a>
                  </div>
              </div>
          </section>
          
          <section className=" border-4 m-6 border-red-500 rounded-lg ">
              {/* <!-- Nama Pemesan dan waktu pemesanan --> */}
              <div className="flex items-center justify-between p-6">
                  <h1 className="font-inter font-bold text-sm ">Your name</h1>
                  <p className="font-inter text-xmobile">2 menit lalu </p>
              </div>

              {/* <!-- List Pesanan --> */}
              <div className="flex flex-col px-7">
                  <div className="border-2 border-yellow-600 mb-4 p-3 px-6 rounded-lg font-inter text-sm">
                  <p className="font-inter text-xmobile">2 menit lalu</p>
                  </div>

                  <div className="border-2 border-yellow-600 mb-4 p-3 px-6 rounded-lg font-inter text-sm">
                  <p className="font-inter text-xmobile">2 menit lalu</p>
                  </div>

                  <div className="border-2 border-yellow-600 mb-4 p-3 px-6 rounded-lg font-inter text-sm">
                  <p className="font-inter text-xmobile">2 menit lalu</p>
                  </div>
              </div>
          </section>
          <section className=" border-4 m-6 border-red-500 rounded-lg ">
              {/* <!-- Nama Pemesan dan waktu pemesanan --> */}
              <div className="flex items-center justify-between p-6">
                  <h1 className="font-inter font-bold text-sm ">Your name</h1>
                  <p className="font-inter text-xmobile">2 menit lalu</p>
              </div>

              {/* <!-- List Pesanan --> */}
              <div className="flex flex-col px-7">
                  <div className="border-2 border-yellow-600 mb-4 p-3 px-6 rounded-lg font-inter text-sm">
                   <p className="font-inter text-xmobile">2 menit lalu</p>
                  </div>

                  <div className="border-2 border-yellow-600 mb-4 p-3 px-6 rounded-lg font-inter text-sm">
                   <p className="font-inter text-xmobile">2 menit lalu</p>
                  </div>

                  <div className="border-2 border-yellow-600 mb-4 p-3 px-6 rounded-lg font-inter text-sm">
                   <p className="font-inter text-xmobile">2 menit lalu</p>
                  </div>
              </div>
          </section>

          {/* <!-- NavBar --> */}
          <div className="py-8"></div>
        <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
          <div id="tabs" className="flex justify-between px-4">
            <a href="#l" className="flex flex-col items-center">
              <img src="../img/logoletseat.svg" alt="" />
              <span className="text-yellow-600 font-bold tab tab-home block text-xmobile font-inter">Let's Eat</span>
            </a>
            <a href="/code/transaksi_sel.html" className="flex flex-col items-center">
              <img src="../img/circlenavbar.png" alt="" />
              <span className="tab tab-home block text-xmobile font-inter">Transaksi</span>
            </a>
            <a href="#" className="flex flex-col items-center">
              <img src="../img/circlenavbar.png" alt="" />
              <span className="tab tab-home block text-xmobile font-inter">Menu</span>
            </a>
            <a href="#" className="flex flex-col items-center">
              <img src="../img/circlenavbar.png" alt="" />
              <span className="tab tab-home block text-xmobile font-inter">Promo</span>
            </a>
            <a href="#" className="flex flex-col items-center">
              <img src="../img/circlenavbar.png" alt="" />
              <span className="tab tab-home block text-xmobile font-inter">Profil</span>
            </a>
          </div>
        </section>
      </body>
    </div>
  );
}
