import Link from "next/link"

type imgURLProps = {
    imgURL: string;
}

export default function Landing_Header ({imgURL}:imgURLProps) {
    return (
        <div>
            <div className='flex justify-between items-center h-[62px] w-screen shadow-lg'>
                <div className='flex items-center'>
                    <img src="/b_hero_logo.svg" className="pl-[20px]"/>
                    <h1 className='pl-[10px] font-bold font-poppins text-[21px] text-[#EC7505]'>
                    Let&apos;s Eat
                    </h1>
                </div>
                        
                        
                <div className='-translate-x-[14px]
                        md:-translate-x-[30px]
                '>
                <Link href='/customer/profil'>
                    <img src={imgURL? imgURL:"/icon_profil.svg"} alt="" className='w-[43px] h-[43px] rounded-full'/>
                </Link>  
                </div>
            </div>
        </div>
    )
}