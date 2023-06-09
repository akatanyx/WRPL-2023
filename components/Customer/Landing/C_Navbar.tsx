import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/router';

const C_Navbar = () => {
    const router = useRouter();
    return (
        <>
            <div className="mt-20"></div>
            <nav className="block fixed inset-x-0 bottom-0 shadow-lg z-10 bg-white px-[35px] py-[18px] w-screen">
                <div className="flex justify-center gap-x-[41px] transform origin-top">
                    <ul >
                        <Link
                            href="/customer/hero"
                            className= {router.pathname === '/customer/hero' ? ' flex flex-col items-center justify-center' : 
                                'grayscale  flex flex-col items-center justify-center hover:grayscale-0'} 
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
                            className= {router.pathname === '/BELOMCOY' ? ' flex flex-col items-center justify-center' : 
                                'grayscale  flex flex-col items-center justify-center hover:grayscale-0'} 
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
                            className= {router.pathname === '/BELOMCOY' ? ' flex flex-col items-center justify-center' : 
                                'grayscale  flex flex-col items-center justify-center hover:grayscale-0'} 
                        >
                            <div className= "flex flex-col items-center justify-center ">
                            <div>
                                <img className="h-[25px] w-[25px] " src="/icon_nav_c_search.svg"/>                    
                            </div>
                            </div>
                        </Link>
                    </ul>
                    <ul >
                        <Link
                            href="#"
                            className= {router.pathname === '/BELOMCOY' ? ' flex flex-col items-center justify-center' : 
                                'grayscale  flex flex-col items-center justify-center hover:grayscale-0'} 
                        >
                            <div className= "flex flex-col items-center justify-center ">
                            <div>
                                <img className="h-[25px] w-[25px] " src="/icon_nav_c_riwayat.svg"/>                    
                            </div>
                            </div>
                        </Link>
                    </ul>
                    <ul >
                        <Link
                            href="/customer/profil"
                            className= {router.pathname === '/customer/profil' ? ' flex flex-col items-center justify-center' : 
                                'grayscale  flex flex-col items-center justify-center hover:grayscale-0'} 
                        >
                            <div className= "flex flex-col items-center justify-center ">
                            <div>
                                <img className="h-[25px] w-[25px] " src="/icon_nav_c_favorit.svg"/>                    
                            </div>
                            </div>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    ); 
};

export default C_Navbar;