import { useRouter } from 'next/router'

import BlogHeader from './blog-header'

export default function Layout({ children }) {
  const { pathname } = useRouter()
  const isRoot = pathname === '/'

  return (
    <div className="max-w-screen-md px-4 py-2 mx-auto text-blog-ternary">
      <header>
        <BlogHeader isRoot={isRoot} />
      </header>
      <main>{children}</main>
    </div>
  )
}
