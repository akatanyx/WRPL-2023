import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/router';

const Navbar_driver = () => {
    const router = useRouter();
    return (
        <nav className="block fixed inset-x-0 bottom-0 z-10 bg-white">
            <div className="flex justify-around  shadow-lg transform  origin-top">
                <ul >
                    <Link
                        href="/landing_driver"
                        className= {router.pathname === '/landing_driver' ? 'p-2 flex flex-col items-center justify-center' : 'grayscale p-2 flex flex-col items-center justify-center hover:grayscale-0'} 
                    >
                        <div className= "flex flex-col items-center justify-center ">
                        <div>
                            <img className="h-[37.5px] w-[37.5px] rounded-lg"  src="/logo.svg"/>                    
                        </div>
                        <div>
                            <p className="text-[9px] text-[#D84A05]">Dashboard</p>
                        </div>
                        </div>
                    </Link>
                </ul>
                <ul >
                    <Link
                        href="/riwayat_driver"
                        className= {router.pathname === '/riwayat_driver' ? 'p-2 flex flex-col items-center justify-center' : 'grayscale p-2 flex flex-col items-center justify-center hover:grayscale-0'} 
                    >
                        <div className= "flex flex-col items-center justify-center ">
                        <div>
                            <img className="h-[37.5px] w-[37.5px] rounded-lg" src="/logo.svg"/>                    
                        </div>
                        <div>
                            <p className="text-[9px] text-[#D84A05]">Riwayat</p>
                        </div>
                        </div>
                    </Link>
                </ul>
                <ul >
                    <Link
                        href="/profil_driver"
                        className= {router.pathname === '/profil_driver' ? 'p-2 flex flex-col items-center justify-center' : 'grayscale p-2 flex flex-col items-center justify-center hover:grayscale-0'} 
                    >
                        <div className= "flex flex-col items-center justify-center ">
                        <div>
                            <img className="h-[37.5px] w-[37.5px] rounded-lg" src="/logo.svg"/>                    
                        </div>
                        <div>
                            <p className="text-[9px] text-[#D84A05]">Profil</p>
                        </div>
                        </div>
                    </Link>
                </ul>
            </div>
        </nav>
    ); 
};

export default Navbar_driver;