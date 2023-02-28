import Header from 'components/Header'
import Navletseat from 'components/Navletseat'
import ContentLetsEat from 'components/ContentLetsEat'
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
            <div>
                <ContentLetsEat />
                <ContentLetsEat />
                <ContentLetsEat />
                <ContentLetsEat />
                <ContentLetsEat />
            </div>
            {/* Navbar */}
            <div>
                <Navbar />
            </div>
        </div>
    )
}