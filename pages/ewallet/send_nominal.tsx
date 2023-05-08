import Link from 'next/link';

export default function send () {
    return (
        <div className="font-poppins pl-[35px] md:mx-auto md:ml-0">
            
            <h1 className="mt-11 font-semibold text-[25px]">Kirim Dana</h1>
            <p className="text-[14px]">Masukkan jumlah yang ingin dikirim</p>

            <div className="flex mt-[25px] items-center">
                <img src="/e_send_wallet.svg" />
                <h1 className="text-[20px] text-[#263238] ml-2">Rp</h1>

                {/* Input Nominal */}
                <input 
                type="text"
                className='text-[20px] text-[#263238]'
                placeholder='250000' 
                />
            </div>

            {/* Border Pembatas */}
            <div className="border border-opacity-25 border-black w-[290px] mt-[7px] mb-[21px] md:mx-auto md:ml-0" />

            {/* Kontak yang dipilih */}
            <div className='w-[290px] h-[73px] bg-[#D9D9D9] flex items-center rounded-lg
                            md:mx-auto md:ml-0'>
                <img src="/e_send_akun.svg" className='pl-[13px]' />
                <div className='flex flex-col pl-[17px]'>
                    {/* Nama */}
                    <h1 className='font-semibold text-[#263238] text-[17px] translate-y-1'>
                        Daniel Ardi Chandra
                    </h1>
                    {/* Nomor Telepon */}
                    <p className='text-[#263238] text-[14px]'>
                        +62 812-2735-8490
                    </p>
                </div>
            </div>

            <button className="w-[290px] h-[53px] bg-[#118EEA] rounded-lg flex items-center justify-center mt-[50px]">
                <h1 className="text-white font-semibold text-[19px]">Konfirmasi</h1>
            </button>

            {/* Kembali */}
            <Link href='/ewallet/send'>
                <div className="w-[290px] h-[60px] mt-[14px] rounded-lg
                                    flex justify-center items-center border-[#118EEA] border">
                    <h1 className="font-semibold text-[19px] text-[#118EEA]">kembali</h1>
                </div>
            </Link>
        </div>
    )
}