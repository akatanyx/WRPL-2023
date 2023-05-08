import Transaksi_terakhir from '@/components/Ewallet/Hero/Transaksi_terakhir';

import Link from 'next/link';
import React, { useState } from 'react';

export default function hero () {
    const [showSaldo, setShowSaldo] = useState(true);

    const toggleSaldo = () => {
        setShowSaldo(!showSaldo);
    };

    return (
        <div className="font-poppins">

            {/* Akun */}
            <div className="flex items-center mt-[21px] md:justify-center">
                
                {/* Profile Picture */}
                <img src="/e_hero_ppakun.svg" className="ml-[27px]"/>

                <div className="flex-col justify-center ml-[17px]">
                    {/* Nama*/}
                    <div className='flex'>
                        <h1 className='font-medium text-[#263238] text-[17px]'>
                            Halo, Sagiri!
                        </h1>
                        <img src="/e_hero_centang.svg" className='translate-x-1'/>
                    </div>
                    
                    {/* Edit Profile */}
                    <Link href="#"
                    className='text-[#838080] text-[11px] '>
                        <h1 className='-translate-y-1'>Tap to edit profile</h1>
                    </Link>
                </div>

                {/* Option */}
                <Link href="#">
                    <img src="/e_hero_option.svg" className='ml-[98px] -translate-y-2'/>
                </Link>
            </div>

            {/* Saldo */}
            <div className='w-[307px] h-[82px] mt-[30px] bg-[#118EEA] rounded-lg text-white mx-auto'>
                
                <div className='flex items-center gap-x-[5px] pt-[10px] ml-[16px] text-[12px]'>
                    <h1 className='font-semibold'>
                        Saldo
                    </h1>
                    <p>-</p>
                    {/* Nomor Telepon */}
                    <h1>
                        0812 2735 8490
                    </h1>
                </div>

                {/* Border Pembatas */}
                <div className="border border-opacity-50 border-white w-[275px] mx-auto m-1"></div>

                <div className='flex items-center justify-between'>
                    {/* Isi Saldo */}
                    <div className='flex items-center gap-x-[3px] ml-[16px] font-semibold text-white'>
                        <h1 className='text-[21px]'>Rp</h1>
                        <h1 className={`text-[25px] ${showSaldo ? '' : 'hidden'}`}>50.000,<span className='text-[16px]'>00</span></h1>
                        <h1 className={`text-[25px] ${showSaldo ? 'hidden' : ''}`}>&bull;&bull;&bull;&bull;&bull;&bull;</h1>
                    </div>

                    {/* Lihat Tutup Saldo */}
                    <img src='/e_hero_mata.svg' className='mr-[17px] cursor-pointer' onClick={toggleSaldo} />
                </div>
            </div>

            {/* Fitur */}
            <div className='text-[10px] grid grid-cols-4 gap-x-5 gap-y-[13px] mt-5 w-[292px] mx-auto'>
                <Link href="/ewallet/topup">
                    <div className='flex-col text-center'>
                        <img src="/e_hero_fitur_topup.svg" alt="" />
                        <h1 className='mt-[6px]'>Top Up</h1>
                    </div>
                </Link>
                
                <Link href="/ewallet/send">
                    <div className='flex-col text-center'>
                        <img src="/e_hero_fitur_send.svg" alt="" />
                        <h1 className='mt-[6px]'>Send</h1>
                    </div>
                </Link>

                <Link href="#">
                    <div className='flex-col text-center'>
                        <img src="/e_hero_fitur_points.svg" alt="" />
                        <h1 className='mt-[6px]'>Points</h1>
                    </div>
                </Link>

                <Link href="#">
                    <div className='flex-col text-center'>
                        <img src="/e_hero_fitur_letsgift.svg" alt="" />
                        <h1 className='mt-[6px]'>Let's Gift</h1>
                    </div>
                </Link>
                
                <Link href="/ewallet/security">
                    <div className='flex-col text-center'>
                        <img src="/e_hero_fitur_security.svg" alt="" />
                        <h1 className='mt-[6px]'>Security</h1>
                    </div>
                </Link>

                <Link href="#">
                    <div className='flex-col text-center'>
                        <img src="/e_hero_fitur_promo.svg" alt="" />
                        <h1 className='mt-[6px]'>Promo</h1>
                    </div>
                </Link>

                <Link href="#">
                    <div className='flex-col text-center'>
                        <img src="/e_hero_fitur_merchant.svg" alt="" />
                        <h1 className='mt-[6px]'>Merchant</h1>
                    </div>
                </Link>
            </div>

            {/* Border Pembatas */}
            <div className="border border-opacity-25 border-black w-[307px] mx-auto mt-[22px] mb-[14px]"></div>

            {/* Transaksi Terakhir */}
            <div className='flex items-center md:justify-center md:-translate-x-[14px]'>
                <img src="/e_hero_transaksi.svg" className='ml-8' />
                <h1 className='text-[13px] ml-[10px]'>Transaksi Terakhir</h1>
                
                {/* Button Refresh */}
                <button>
                    <img src="/e_hero_refresh.svg" className='ml-[145px]' />
                </button>
            </div>

            {/* Bulan  Mei 2023*/}
            <div className='mt-[13px]'>
                <Transaksi_terakhir>
                    Mei 2023
                </Transaksi_terakhir>
            </div>

            {/* Bulan  April 2023*/}
            <div className='mt-[13px]'>
                <Transaksi_terakhir>
                    April 2023
                </Transaksi_terakhir>
            </div>
        </div>
    )
}