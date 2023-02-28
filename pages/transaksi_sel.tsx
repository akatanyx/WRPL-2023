import Head from 'next/head'
import Header_Toko from '../components/Header_Toko'
import Hari from '../components/Hari'
import Card_Transaksi from '../components/Card_Transaksi'
import Pendapatan from '../components/Pendapatan'

export default function Transaksi ()
{
    return (
        <div>
            <Head>
                <title>Transaksi</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header_Toko />

            <Hari />

            <Pendapatan />
            
            <Card_Transaksi />
        </div>
    )
}