import Feedback from "@/components/Feedback";
import Head from "next/head";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register_driver() {
    const [nama_driver, setDriver] = useState('');
    const [alamat, setAlamat] = useState('');
    const [kendaraan, setKendaraan] = useState('');
    const [plat_motor, setPlat] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch('/api/signup?type=driver', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nama_driver, alamat, kendaraan, plat_motor, password }),
        });
        if (response.ok) {
            router.push('/driver/login_driver');
        } else {
            console.error(response.statusText);
        }
    };

    return (
        // {/*<!-- Gambar -->*/}
        <div>
            <Head>
                <title>LetsEAT: Sign Up</title>
            </Head>

            {/* Header */}
            <div
                className="mt-6 flex flex-col items-center justify-center 0 font-bold font-inter 
         text-[27px] text-[#E89005]"
            >
                <h1>REGISTRASI</h1>
                <h1>DRIVER</h1>
            </div>

            {/*{/* <!-- Login --> */}
            <div className="flex flex-col items-center justify-center">
                <div className="mt-4">
                    <div className="max-w-full ">
                        {/* <!-- Isi action dengan tujuan page apabila menekan submit --> */}
                        <form onSubmit={handleSubmit}
                            action="/"
                            method="POST"
                            className="space-y-3">
                            {/* <!-- Form --> */}
                            {/* <!-- Nama --> */}
                            <div className="flex justify-center">
                                <div className="max-w-full">
                                    <p className="text-left font-bold text-[15px]">
                                        Nama Lengkap
                                    </p>
                                    <input
                                        className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                                        id="nama"
                                        type="nama"
                                        aria-label="nama"
                                        placeholder="Nama"
                                        value={nama_driver}
                                        onChange={(e) => setDriver(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* <!-- Email  --> */}
                            <div className="flex justify-center ">
                                <div className="max-w-full">
                                    <p className="text-left font-bold  text-[15px]">
                                        Alamat
                                    </p>
                                    <input
                                        className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                                        id="alamat"
                                        type="alamat"
                                        aria-label="alamat"
                                        placeholder="Alamat"
                                        value={alamat}
                                        onChange={(e) => setAlamat(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* <!-- Jenis Kendaraan  --> */}
                            <div className="flex justify-center ">
                                <div className="max-w-full">
                                    <p className="text-left font-bold  text-[15px]">
                                        Jenis Kendaraan
                                    </p>
                                    <input
                                        className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                                        id="kendaraan"
                                        type="kendaraan"
                                        aria-label="Jenis Kendaraan"
                                        placeholder="Jenis Kendaraan"
                                        value={kendaraan}
                                        onChange={(e) => setKendaraan(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* <!-- PLat Kendaraan  --> */}
                            <div className="flex justify-center ">
                                <div className="max-w-full">
                                    <p className="text-left font-bold  text-[15px]">
                                        Nomor Plat Kendaraan
                                    </p>
                                    <input
                                        className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                                        id="Nomor Plat kendaraan"
                                        type="Nomor Plat kendaraan"
                                        aria-label="Nomor Plat kendaraan"
                                        placeholder="Nomor Plat kendaraan"
                                        value={plat_motor}
                                        onChange={(e) => setPlat(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* <!-- Password --> */}
                            <div className="flex justify-center ">
                                <div className="max-w-full">
                                    <p className="text-left font-bold  text-[15px]">
                                        Password
                                    </p>
                                    <input
                                        className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                                        id="Password"
                                        type="Password"
                                        aria-label="Password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Agree Terms and Cond */}
                            <div className="flex justify-center">
                                <div className="max-w-full">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border-[#E89005] border-2 rounded-lg"
                                    />
                                    <label className="text-[15px] font-inter">
                                        I agree to the{" "}
                                        <a href="#" className="font-inter font-semibold">
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                            </div>

                            {/* <!-- Button Signup --> */}
                            <div className="flex justify-center">
                                <button
                                    className="bg-[#EC7505] hover:bg-orange-700 text-white text-[20px]
                                        px-9 py-2 rounded-lg font-bold"
                                >
                                    REGISTER
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- Signup --> */}
                <div className="flex justify-center mt-4">
                    <div className="max-w-full">
                        <p className="text-center text-sm font-inter">
                            Already have an account?{" "}
                            <a href="login_driver" className="font-inter font-semibold">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
                {/* Kurang Wave */}
                {/* Insert Wave here */}
                <button onClick={() => Feedback()}
                    className="bg-[#EC7505] hover:bg-orange-700 text-white text-[10px]
                                mt-4 px-4 py-2 rounded-lg font-bold"
                >
                    Any Feedback?
                </button>
            </div >
        </div >
    );
}
