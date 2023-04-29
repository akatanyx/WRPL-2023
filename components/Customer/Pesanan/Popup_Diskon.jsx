import C_Header from "@/components/Customer/C_Header"
import Card_Diskon from "@/components/Customer/Pesanan/Card_Diskon"

export default function diskon ({closeModal}) {
    return (
        <div className="font-poppins">

            {/* Header */}
            <div>
                <div className='flex justify-between items-center h-[62px] w-screen shadow-lg'>
                    <div className='flex items-center'>
                        <button onClick={closeModal}>
                            <img src="../icon_arrow_back.svg" alt=""/>
                        </button>

                        <h1 className='font-bold font-poppins text-[20px]'>
                            Diskon yang tersedia
                        </h1>
                    </div>
                </div>
            </div>
            
            <div className="mb-4"></div>
            
            {/* Diskon */}
            <div className="flex flex-col gap-y-4">
                <Card_Diskon />
                <Card_Diskon />
                <Card_Diskon />
                <Card_Diskon />
                <Card_Diskon />
            </div>
            

        </div>
    )
}