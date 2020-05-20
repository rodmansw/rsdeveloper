import Link from 'next/link'

import Bio from './bio'
import BlogHeader from './blog-header'

export default function PostFooter({ prevPost, nextPost }) {
  return (
    <footer className="mt-2">
      <BlogHeader isRoot={false} className="mb-0" themeSwitcher={false} />
      <Bio />
      <p className="flex justify-between text-md mb-10">
        {prevPost ? (
          <Link href="/post/[slug]" as={`/post/${prevPost.slug}`}>
            <a className="text-blog-primary">← {prevPost.frontmatter.title}</a>
          </Link>
        ) : (
          <span />
        )}
        {nextPost && (
          <Link href="/post/[slug]" as={`/post/${nextPost.slug}`}>
            <a className="text-blog-primary">{nextPost.frontmatter.title} →</a>
          </Link>
        )}
      </p>
    </footer>
  )
}
