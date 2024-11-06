import Link from 'next/link'

const CustomLink = ({ href, className, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link key={href} href={href} className={className}>
        <span {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <Link href={href} {...rest} />
  }

  return <Link target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
