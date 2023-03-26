import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/router';

const C_Navbar = () => {
    const router = useRouter();
    return (
        <>
            <div className="mt-20"></div>
            <nav className="block fixed inset-x-0 bottom-0 z-10 bg-white px-8 w-screen">
                <div className="flex justify-between transform origin-top">
                    <ul >
                        <Link
                            href="/customer"
                            className= {router.pathname === '/Customer' ? 'p-2 flex flex-col items-center justify-center' : 
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
                                <img className="h-[25px] w-[25px] " src="/icon_nav_c_search.svg"/>                    
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
                                <img className="h-[25px] w-[25px] " src="/icon_nav_c_riwayat.svg"/>                    
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