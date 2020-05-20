import { useEffect } from 'react'
import Link from 'next/link'

import Layout from 'components/layout'
import Bio from 'components/bio'
import SEO from 'components/seo'

import { getSortedPosts } from 'utils/posts'
import { trackPage } from 'utils/analytics'

export default function Home({ posts }) {
  useEffect(() => {
    trackPage()
  }, [])

  return (
    <Layout>
      <SEO />
      <Bio />
      <div className="mb-16">
        {posts.map(({ frontmatter: { title, description, date }, slug }) => (
          <article key={slug}>
            <header>
              <h3 className="mb-2">
                <Link href="/post/[slug]" as={`/post/${slug}`}>
                  <a className="text-2xl text-blog-primary no-underline">
                    {title}
                  </a>
                </Link>
              </h3>
              <span className="mb-4 text-xs">{date}</span>
            </header>
            <section>
              <p className="mb-8">{description}</p>
            </section>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getSortedPosts()

  return {
    props: {
      posts
    }
  }
}
