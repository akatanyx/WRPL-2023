import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>LetsEAT: Mudah. Cepat. Aman.</title>
      </Head>
      Ga tau cara bikin komponen gan, yang dah jadi /login
      <a href="login">Login</a>
    </div>
  );
}
