import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import Script from 'next/script'

const CommonSEO = ({ title, description, ogType, ogImage, canonicalUrl }) => {
  const router = useRouter()

  const ignoredPaths = [
    'https://lazycatlabs.com/blog/',
    'https://lazycatlabs.com/blog/posts',
    'https://lazycatlabs.com/blog/tags',
  ]
  let ogImageUrl = null
  if (ignoredPaths.includes(`${siteMetadata.siteUrl}${router.asPath}`)) {
    ogImageUrl = new URL(
      '/blog/api/og',
      process.env.NEXT_PUBLIC_SITE_URL || 'https://lazycatlabs.com/blog'
    )
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {ogImageUrl !== null && (
        <>
          <meta property="og:image" content={ogImageUrl.toString()} />
          <meta name="twitter:image" content={ogImageUrl.toString()} />
        </>
      )}
      <meta property="og:image:alt" content="Lazycatlabs" />
      <meta property="og:image:type" content="image/png" key={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link
        rel="canonical"
        href={canonicalUrl ? canonicalUrl : `${siteMetadata.siteUrl}${router.asPath}`}
      />
    </Head>
  )
}

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = `${siteMetadata.siteUrl}/blog/api/og`
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={ogImageUrl}
    />
  )
}

export const TagSEO = ({ title, description }) => {
  const router = useRouter()
  return (
    <>
      <CommonSEO title={title} description={description} ogType="website" />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  )
}

export const BlogSEO = ({ authorDetails, title, summary, date, lastmod, url, canonicalUrl }) => {
  const publishedAt = new Date(date).toISOString()
  const modifiedAt = new Date(lastmod || date).toISOString()

  const ogImageUrl = `${siteMetadata.siteUrl}/blog/api/og?title=${encodeURIComponent(
    title
  )}&description=${encodeURIComponent(summary)}&date=${publishedAt}`

  let authorList
  if (authorDetails) {
    authorList = authorDetails.map((author) => {
      return {
        '@type': 'Person',
        name: author.name,
      }
    })
  } else {
    authorList = {
      '@type': 'Person',
      name: siteMetadata.author,
    }
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    image: ogImageUrl,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: summary,
  }

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType="article"
        ogImage={ogImageUrl}
        twImage={ogImageUrl}
        canonicalUrl={canonicalUrl}
      />
      {/* eslint-disable-next-line @next/next/no-script-component-in-head */}
      <Head>
        {date && <meta property="article:published_time" content={publishedAt} />}
        {lastmod && <meta property="article:modified_time" content={modifiedAt} />}
        <Script
          id="structured-data-blog"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  )
}
