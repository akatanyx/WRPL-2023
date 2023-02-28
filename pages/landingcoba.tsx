import Header from 'components/Header'
import Navletseat from 'components/Navletseat'
import Navbar from 'components/Navbar'

export default function Home () {
    return (
        <div>
            {/* Header1 */}
            <div>
                <Header />
            </div>
            {/* Header per bagian */}
            <div>
                <Navletseat />
            </div>
            {/* Content */}
            <div></div>
            {/* Navbar */}
            <div>
                <Navbar />
            </div>
        </div>
    )
}