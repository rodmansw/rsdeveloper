import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import Link from 'next/link'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Image from 'components/image'
import PostFooter from 'components/post-footer'
import {
  InlineCode,
  CodeBlock,
  MarkdownImage
} from 'components/makdown-features'

import { getPostBySlug, getPostsSlugs } from 'utils/posts'
import { trackPage } from 'utils/analytics'
import { getSiteMetaData } from 'utils/helpers'

const siteMetadata = getSiteMetaData()

export default function Post({
  post,
  frontmatter,
  slug,
  prevPost,
  nextPost,
  suggestions
}) {
  const postUrl = `post/${slug}`
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}${postUrl}`
  )}`

  useEffect(() => {
    trackPage()
  }, [])

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        canonicalUrl={postUrl}
        description={frontmatter.description || post.excerpt}
        image={
          frontmatter.image
            ? require(`../../content/assets/${frontmatter.image}`)
            : ''
        }
      />
      <article>
        <header>
          <h1 className="mt-0 mb-2">{frontmatter.title}</h1>
          <p className="text-sm">{frontmatter.date}</p>
        </header>
        <ReactMarkdown
          escapeHtml={false}
          source={post.content}
          renderers={{
            code: CodeBlock,
            inlineCode: InlineCode,
            image: MarkdownImage
          }}
        />
      </article>
      <a
        className="text-blog-secondary"
        href={discussUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Discuss on Twitter
      </a>

      <h3 className="text-2xl text-blog-ternary font-black my-8">
        Suggested posts:
      </h3>
      <div className="flex flex-wrap justify-between md:space-x-4">
        {suggestions.map(({ frontmatter, slug: sSlug }, i) => (
          <article
            key={sSlug}
            className={`w-full md:w-48 p-4 mb-4 rounded-md bg-blog-bg-secondary flex-none md:flex-auto`}
          >
            <header>
              <h3 className="mb-2">
                <Link href="/post/[slug]" as={`/post/${sSlug}`}>
                  <a className="text-2xl text-blog-primary no-underline">
                    {frontmatter.title}
                  </a>
                </Link>
              </h3>
              <span className="mb-4 text-xs">{frontmatter.date}</span>
            </header>
            <section>
              <p>{frontmatter.description}</p>
            </section>
          </article>
        ))}
      </div>

      <div className="p-4 mt-8 rounded-md bg-blog-bg-secondary">
        <h2 className="text-2xl text-blog-ternary font-black">
          Subscribe to the Newsletter
        </h2>
        <p className="mt-2 max-w-2xl">
          Subscribe to get my latest content by email.
        </p>
        <form className="mt-6" method="POST">
          <div className="flex flex-wrap justify-between md:px-6 px-0">
            <input
              type="name"
              required
              placeholder="Your first name"
              className="w-full md:w-auto px-4 py-3 mb-4 md:mb-0 leading-6 appearance-none border border-blog-ternary shadow-none bg-white rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blog-primary"
            />
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full md:w-auto px-4 py-3 leading-6 appearance-none border border-blog-ternary shadow-none bg-white rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blog-primary"
            />
            <button className="mt-4 h-auto w-full border border-transparent px-6 py-3 leading-6 font-semibold leading-snug bg-indigo-700 text-white rounded-md shadow-md focus:bg-indigo-700 focus:outline-none focus:border-blog-secondary transition ease-in-out duration-150 hover:bg-indigo-600">
              Subscribe
            </button>
          </div>
        </form>
        <p className="mt-2 max-w-2xl">
          I won’t send you spam. <br />
          Unsubscribe at any time.
        </p>
      </div>

      <PostFooter prevPost={prevPost} nextPost={nextPost} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getPostsSlugs()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug)

  return { props: postData }
}
