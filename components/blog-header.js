import dynamic from 'next/dynamic'
import Link from 'next/link'

const ThemeSwitcher = dynamic(() => import('./theme-switcher'), { ssr: false })

export default function BlogHeader({
  isRoot,
  className,
  themeSwitcher = true
}) {
  return (
    <div
      className={
        className
          ? `flex justify-between items-center ${className}`
          : `mb-6 flex justify-between items-center`
      }
    >
      <h1>
        <Link href="/">
          <a
            className={`${
              isRoot ? 'text-blog-ternary' : 'text-blog-primary'
            } text-2xl font-black no-underline`}
          >
            RSDeveloper
          </a>
        </Link>
      </h1>
      {themeSwitcher && <ThemeSwitcher />}
    </div>
  )
}
