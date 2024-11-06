'use client'

import Link from 'next/link'

const CustomLink = ({ href, children, ...props }) => {
  if (!href) return null

  // Handle internal links
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }

  // Handle anchor links
  if (href.startsWith('#')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  // Handle external links
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

export default CustomLink
