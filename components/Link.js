import Link from 'next/link'

const CustomLink = ({ href, className, target, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link key={href} href={href} target={target} className={className} passHref legacyBehavior>
        <span {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a key={href} target={target} href={href} className={className} {...rest} />
  }

  return <a key={href} target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
