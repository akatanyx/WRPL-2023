import Link from 'next/link'
import { useState } from 'react';

export default function Pembayaran() {

    const [selectedMethod, setSelectedMethod] = useState('');

    const handleButtonClick = (method: string) => {
      setSelectedMethod(method);
    };
    
    return (
        <div className="font-poppins bg-[#118EEA] w-screen h-screen">

            <div className="pt-[50px]"></div>
            
            <div className="w-[294px] h-[142px] rounded-lg drop-shadow-lg bg-white 
                            flex-col left-1/2 -translate-x-1/2 text-[14px]
                            mx-auto absolute z-10
                            ">
                {/* Jumlah Topup */}
                <div className="flex justify-between pl-[29px] pt-6 w-[235px]">
                    <h1 className="text-[#263238]">Topup</h1> 
                    <p className="text-[#838080]">Rp50.000,00</p>
                </div>

                {/* Biaya Admin */}
                <div className="flex justify-between pl-[29px] pt-[5px] w-[235px]">
                    <h1 className="text-[#263238]">Biaya Admin</h1> 
                    <p className="text-[#838080]">Rp1.000,00</p>
                </div>

                {/* Border Pembatas */}
                <div className="border border-opacity-25 border-black w-[234px] mx-auto mt-[18px] mb-[11px]"></div>

                {/* Total */}
                <div className="flex justify-between pl-[29px] w-[235px]">
                    <h1 className="text-[#263238]">Total</h1> 
                    <p className="text-[#838080]">Rp51.000,00</p>
                </div>
            </div>

            <div className="w-screen bg-white rounded-t-lg translate-y-[94px] h-full">
                
                <h1 className="text-[17px] text-[#263238] pl-[32px] pt-[71px] pb-[18px]
                                md:text-center md:pl-0">
                    Metode Pembayaran
                    </h1>

                {/* Metode Pembayaran */}
                <div>
                <button
                    className={`w-[294px] h-[52px] rounded-lg text-[14px] mx-auto flex items-center ${
                    selectedMethod === 'bank' ? 'bg-[#118EEA] text-white' : 'bg-white'
                    }`}
                    onClick={() => handleButtonClick('bank')}
                >
                    <img 
                        src="/e_pembayaran_debit.svg" 
                        alt="" 
                        className={`pl-[15px] ${selectedMethod === 'bank' ? 'fill-white' : ''}`}
                    />
                    <div className="flex items-center justify-between w-[235px]">
                        <h1 className="ml-[14px]">Kredit atau Debit</h1>
                        <img src="/e_pembayaran_circle.svg" />
                    </div>
                </button>


                    <button
                        className={`w-[294px] h-[52px] rounded-lg text-[14px] mx-auto flex items-center mt-2 ${
                        selectedMethod === 'alfamart' ? 'bg-[#118EEA] text-white' : 'bg-white'
                        }`}
                        onClick={() => handleButtonClick('alfamart')}
                    >
                        <img 
                            src="/e_pembayaran_alfa.svg" 
                            alt="" 
                            className={`pl-[15px] ${selectedMethod === 'alfamart' && 'fill-white'}`}
                        />
                        <div className="flex items-center justify-between w-[235px]">
                        <h1 className="ml-[14px]">Alfamart</h1>
                        <img src="/e_pembayaran_circle.svg" />
                        </div>
                    </button>

                    <button
                        disabled={true}
                        className={`w-[294px] h-[52px] rounded-lg text-[14px] mx-auto flex items-center mt-2 ${
                        selectedMethod === 'gopay' ? 'bg-[#118EEA] text-white' : 'bg-[#EFEFEF]'
                        }`}
                        onClick={() => handleButtonClick('gopay')}
                    >
                        <img src="/e_pembayaran_gopay.svg" alt="" className="pl-[15px]" />
                        <div className="flex items-center justify-between w-[235px]">
                        <div className="flex-col flex items-start">
                            <h1 className="ml-[14px]">Gopay</h1>
                            <h1 className="ml-[14px] text-[10px] text-[#E8505B]">Belum Tersedia</h1>
                        </div>
                        <img src="/e_pembayaran_circle.svg" className="hidden" />
                        </div>
                    </button>
                    </div>

                {/* Button Bayar */}
                <button className="w-[290px] h-[53px] bg-[#118EEA] rounded-lg mx-auto
                                    flex items-center justify-center mt-[50px]">
                    <h1 className="text-white font-semibold text-[19px]">Bayar</h1>
                </button>

                {/* Button Kembali */}
                <Link href="/ewallet/topup">
                    <button className="w-[290px] h-[53px] border-[#118EEA] border rounded-lg mx-auto
                                        flex items-center justify-center mt-[14px]">
                        <h1 className="text-[#118EEA] font-semibold text-[19px]">Kembali</h1>
                    </button>
                </Link>
            </div>
        </div>
    )
}