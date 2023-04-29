export default function Card_Diskon () {
    
    return (
        
        <div className="font-poppins">
            {/* Card Diskon */}
            <div className="w-[320px] bg-white p-4 rounded-lg shadow-lg flex flex-col justify-center  
            mx-auto"
            >
                {/* Nama diskon dann tombol remove */}
                <div className="flex justify-between">
                    {/* Nama Diskon */}
                    <h1 className="font-bold text-[22px]">Diskon 15%</h1>

                    {/* Tombol Remove */}
                    <button>                     
                            <p className="font-bold text-[14px]">X</p>
                    </button>
                </div>
                
                
                <ul className="text-gray-500 list-disc list-inside text-[14px]">
                    {/* Keterangan Diskon */}
                    <li>Diskon 50% GoFood! Maks Rp30.000</li>
                    <li>Maks Rp30.000</li>
                    <li>Min Rp20.000</li>
                </ul>
                

                {/* Tanggal Expired dan Tombol Apply */}
                <div className="flex justify-between pr-2">
                    {/* Tanggal Expired */}
                    <div className="flex flex-col text-gray-500 text-[14px] mt-4">
                        <p>Berlaku sampai </p>
                        <p>31 Desember 2021</p>
                    </div>
                    
                    {/* Tombol Apply */}
                    <button>
                        <div className="flex justify-center items-center bg-[#F9423A] rounded-lg mt-4 p-2">
                            <p className="text-white font-bold text-[14px]">Apply</p>
                        </div>
                    </button> 
                </div>
            </div>
        </div>
    )
}