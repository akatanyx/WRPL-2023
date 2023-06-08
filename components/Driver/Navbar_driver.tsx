import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/router';

const Navbar_driver = () => {
    const router = useRouter();
    return (
        <nav className="fixed shadow-2xl rounded-t-lg inset-x-0 bottom-0 z-20 bg-white">
            <div className="flex justify-center items-center gap-x-[92px] h-[64px]">
                <ul>
                    <Link
                        href="/driver/pesanan_baru"
                        className= {router.pathname === '/driver/pesanan_baru' ? '' : 'grayscale hover:grayscale-0'} 
                    >
                        <img src="/d_navbar_home.svg"/>                    
                    </Link>
                </ul>
                
                <ul >
                    <Link
                        href="/driver/riwayat_driver"
                        className= {router.pathname === '/driver/riwayat_driver' ? '' : 'grayscale hover:grayscale-0'} 
                    >
                        <img src="/d_navbar_riwayat.svg"/> 
                    </Link>
                </ul>
                <ul >
                    <Link
                        href="/driver/profil"
                        className= {router.pathname === '/driver/profil' ? ' justify-center' : 'grayscale hover:grayscale-0'} 
                    >
                        <img src="/d_navbar_akun.svg"/>
                    </Link>
                </ul>
            </div>
        </nav>
    ); 
};

export default Navbar_driver;