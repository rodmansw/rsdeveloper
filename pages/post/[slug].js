import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import codeStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import Link from 'next/link'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Image from 'components/image'
import Bio from 'components/bio'
import BlogHeader from 'components/blog-header'

import { getPostBySlug, getPostsSlugs } from 'utils/posts'
import { trackPage } from 'utils/analytics'

function InlineCode({ value }) {
  return <code className="inline-code">{value}</code>
}

function CodeBlock({ language, value }) {
  return (
    <div className="mb-10">
      <SyntaxHighlighter language={language} style={codeStyle}>
        {value}
      </SyntaxHighlighter>
    </div>
  )
}

function MarkdownImage({ alt, src }) {
  return (
    <Image
      key={src}
      alt={alt}
      src={require(`../../content/assets/${src}`)}
      previewSrc={require(`../../content/assets/${src}?lqip`)}
      className="w-full"
    />
  )
}

export default function Post({ post, frontmatter, slug, prevPost, nextPost }) {
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://rsdeveloper.now.sh/post/${slug}`
  )}`

  useEffect(() => {
    trackPage()
  }, [])

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
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
      <footer className="mt-6">
        <BlogHeader isRoot={false} className="mb-0" themeSwitcher={false} />
        <Bio />
        <p className="flex justify-between text-md mb-10">
          {prevPost ? (
            <Link href="/post/[slug]" as={`/post/${prevPost.slug}`}>
              <a className="text-blog-primary">
                ← {prevPost.frontmatter.title}
              </a>
            </Link>
          ) : (
            <span />
          )}
          {nextPost && (
            <Link href="/post/[slug]" as={`/post/${nextPost.slug}`}>
              <a className="text-blog-primary">
                {nextPost.frontmatter.title} →
              </a>
            </Link>
          )}
        </p>
      </footer>
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
