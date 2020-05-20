import Link from 'next/link'

export default function SuggestedPosts({ posts = [] }) {
  return (
    <>
      <h3 className="text-2xl text-blog-ternary font-black my-8">
        Suggested posts:
      </h3>
      <div className="flex flex-wrap justify-between md:space-x-4">
        {posts.map(({ frontmatter, slug: sSlug }) => (
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
    </>
  )
}
