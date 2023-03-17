import Link from 'next/link'

export default function Header_TambahMenu() {
    return (
    <>
        <div className='sticky top-0'>
        <div className="flex bg-[#EC7505] items-center px-[19px] w-full h-[59px] shadow-lg rounded-b-lg">
            <Link href='/merchant/list_menu'>
                <img src="/icon_head_arrow_tambahmenu.svg" alt="" />
            </Link>
            <h1 className="ml-3 text-white font-poppins font-bold text-[23px]">Tambah Menu</h1>
        </div>
        </div>
    </>
    )
}