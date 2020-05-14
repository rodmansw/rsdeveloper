import { useRouter } from 'next/router'

import Bio from './bio'
import BlogHeader from './blog-header'

export default function Layout({ children }) {
  const { pathname } = useRouter()
  const isRoot = pathname === '/'

  return (
    <div className="max-w-screen-sm px-4 py-2 mx-auto text-blog-ternary">
      <header>
        <BlogHeader isRoot={isRoot} />
      </header>
      <main>{children}</main>
      {!isRoot && (
        <footer className="mt-6">
          <BlogHeader isRoot={isRoot} className="mb-2" themeSwitcher={false} />
          <Bio />
        </footer>
      )}
    </div>
  )
}
