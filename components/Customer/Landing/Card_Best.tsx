import Link from 'next/link'

export default function Card_Best () {
    return (
        <>   
            <Link href='#'>
                <div className="flex-col shadow-xl rounded-lg w-[156px] relative">
                        <img src="icon_best.svg" alt="" />
                        <h1 className="absolute bottom-0 left-0 right-0 rounded-b-lg 
                            bg-white font-poppins font-medium text-lg text-center"
                        >
                            Babi Asap
                        </h1>
                </div>
            </Link>
        </>
    )
}