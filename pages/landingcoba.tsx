import Header from 'components/Header'
import Navletseat from 'components/Navletseat'
import ContentLetsEat from 'components/ContentLetsEat'
import Navbar from 'components/Navbar'
import PostCard from '../components/PostCard'
import Nav from '../components/Nav';

export default function Home ({posts}) {
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
                {posts.length === 0 ? (
                    <h2>No added posts</h2>
                ) : (
                    <ul>
                        {posts.map((post, i) => (
                            <PostCard post={post} key={i} />
                        ))}
                    </ul>
                )}
                <ContentLetsEat />
                <ContentLetsEat />
                <ContentLetsEat />
                <ContentLetsEat />
                <ContentLetsEat />
            </div>
            {/* Navbar */}
            <div>
                <Navbar />
                <Nav />
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;
  
    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`);
    // extract the data
    let data = await response.json();
  
    return {
        props: {
            posts: data['message'],
        },
    };
  };