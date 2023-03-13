import Head from 'next/head'
import Link from 'next/link'
import Card_Resto from '../../components/Customer/Resto_Near_You/Card_Resto'
import SlideRestoNearYou from '../../components/Customer/Resto_Near_You/SlideRestoNearYou'
export default function resto_near_you () {
    return (
        <>
            <Head>
                <title>Restaurant Near You</title>
            </Head>

            <div className='flex items-center'>
                <Link href='/Customer' >
                    <img src="../icon_arrow_back.svg" alt="" />
                </Link>
                <h1 className='font-poppins font-bold text-[21px] -translate-x-1'>Restaurant Near You</h1>
            </div>

            <div className='bg-[#E89005] p-[14px] flex flex-col gap-y-4 rounded-lg'>
                {/* <SlideRestoNearYou /> */}
                <Card_Resto />
                <Card_Resto />
                <Card_Resto />
                <Card_Resto />
                <Card_Resto />
                
            </div>
            
            <div className="mb-96"></div>
        </>
    )
}