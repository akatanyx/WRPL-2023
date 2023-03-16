import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/router';

const M_Navbar = () => {
    const router = useRouter();
    return (
        <nav className="block fixed inset-x-0 bottom-0 z-10 bg-white px-8">
            <div className="flex justify-between w-full transform origin-top">
                <ul >
                    <Link
                        href="/merchant"
                        className= {router.pathname === '/merchant' ? 'p-2 flex flex-col items-center justify-center' : 
                            'grayscale p-2 flex flex-col items-center justify-center hover:grayscale-0'} 
                    >
                        <div className= "flex flex-col items-center justify-center ">
                        <div>
                            <img className="h-[25px] w-[25px] "  src="/icon_nav_c_home.svg"/>                    
                        </div>
                        </div>
                    </Link>
                </ul>
                <ul >
                    <Link
                        href="#"
                        className= {router.pathname === '/BELOMCOY' ? 'p-2 flex flex-col items-center justify-center' : 
                            'grayscale p-2 flex flex-col items-center justify-center hover:grayscale-0'} 
                    >
                        <div className= "flex flex-col items-center justify-center ">
                        <div>
                            <img className="h-[25px] w-[25px] " src="/icon_nav_m_riwayat.svg"/>                    
                        </div>
                        </div>
                    </Link>
                </ul>
                <ul >
                    <Link
                        href="/merchant/list_menu"
                        className= {router.pathname === '/merchant/list_menu' ? 'p-2 flex flex-col items-center justify-center' : 
                            'grayscale p-2 flex flex-col items-center justify-center hover:grayscale-0'} 
                    >
                        <div className= "flex flex-col items-center justify-center ">
                        <div>
                            <img className="h-[25px] w-[25px] " src="/icon_nav_m_buku.svg"/>                    
                        </div>
                        </div>
                    </Link>
                </ul>
                <ul >
                    <Link
                        href="#"
                        className= {router.pathname === '/BELOMCOY' ? 'p-2 flex flex-col items-center justify-center' : 
                            'grayscale p-2 flex flex-col items-center justify-center hover:grayscale-0'} 
                    >
                        <div className= "flex flex-col items-center justify-center ">
                        <div>
                            <img className="h-[25px] w-[25px] " src="/icon_nav_c_promo.svg"/>                    
                        </div>
                        </div>
                    </Link>
                </ul>
                <ul >
                    <Link
                        href="#"
                        className= {router.pathname === '/BELOMCOY' ? 'p-2 flex flex-col items-center justify-center' : 
                            'grayscale p-2 flex flex-col items-center justify-center hover:grayscale-0'} 
                    >
                        <div className= "flex flex-col items-center justify-center ">
                        <div>
                            <img className="h-[25px] w-[25px] " src="/icon_nav_m_akun.svg"/>                    
                        </div>
                        </div>
                    </Link>
                </ul>
            </div>
        </nav>
    ); 
};

export default M_Navbar;