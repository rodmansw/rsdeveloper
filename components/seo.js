import Head from 'next/head'

import iconUrl from 'public/icon.png'

import { getSiteMetaData } from 'utils/helpers'

const siteMetadata = getSiteMetaData()

export default function Seo({
  title,
  image,
  description,
  canonicalUrl,
  keywords = 'rodman swanston, rodman, swanston, rod swanston, rodman_sw, roman-sw, rodman sw, rodman blog, personal blog, rs, rs developer, rsdeveloper, developer blog, rs blog'
}) {
  const metaDescription = description || siteMetadata.description

  return (
    <Head>
      <title>
        {title ? `${title} | ${siteMetadata.title}` : siteMetadata.title}
      </title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="theme-color" content="#282c35" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="monetization"
        content={process.env.NEXT_PUBLIC_MONETIZATION}
      />
      {canonicalUrl && (
        <link rel="canonical" href={`${siteMetadata.siteUrl}${canonicalUrl}`} />
      )}
      <meta name="keywords" content={keywords} />

      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="object" />
      <meta property="og:site_name" content="RSDeveloper" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta property="og:image" content={image || iconUrl} />
      <meta property="og:image:width" content="64" />
      <meta property="og:image:height" content="64" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <meta name="twitter:image" content={image || iconUrl} />
      <meta name="twitter:image:alt" content="RSDeveloper" />

      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      <link rel="icon" type="image/png" href={iconUrl} />
      <link rel="apple-touch-icon" href={iconUrl} />
    </Head>
  )
}
