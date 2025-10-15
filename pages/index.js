import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPosts }) {
  return (
    <div className="container">
      <header>
        <h1>My Next.js Blog</h1>
        <p>Simple markdown-powered blog</p>
      </header>

      <main>
        <ul>
          {allPosts.map(post => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
              <br />
              <small>{post.date}</small>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getSortedPostsData()
  return {
    props: {
      allPosts
    }
  }
}
