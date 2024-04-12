import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Instagram from './instagram.svg'
import Upwork from './upwork.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  instagram: Instagram,
  upwork: Upwork,
}

const SocialIcon = ({ kind, href, size = 5 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-text transition hover:text-text"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-subtext0 hover:text-rosewater  h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
