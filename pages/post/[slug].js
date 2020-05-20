import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown/with-html'

import Layout from 'components/layout'
import SEO from 'components/seo'
import SuggestedPosts from 'components/suggested-posts'
import SignUp from 'components/signup'
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
  suggestions = []
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

      {suggestions.length && <SuggestedPosts posts={suggestions} />}

      <SignUp />
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
