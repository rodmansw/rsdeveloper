import ReactMarkdown from 'react-markdown/with-html'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Image from 'components/image'
import { getPostBySlug, getPostsSlugs } from 'utils/posts'

const CodeBlock = ({ language, value }) => {
  return (
    <div className="mb-10">
      <SyntaxHighlighter language={language} style={style}>
        {value}
      </SyntaxHighlighter>
    </div>
  )
}

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)}
    previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full"
  />
)

export default function Post({ post, frontmatter }) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article>
        <header>
          <h1 className="mt-0 mb-2">{frontmatter.title}</h1>
          <p className="text-sm">{frontmatter.date}</p>
        </header>
        <ReactMarkdown
          escapeHtml={false}
          source={post.content}
          renderers={{ code: CodeBlock, image: MarkdownImage }}
        />
      </article>
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
