import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mb-4 mt-16 flex flex-col items-center">
        <div className="mb-3 flex  space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
          <SocialIcon kind="upwork" href={siteMetadata.upwork} />

          <div>{` • `}</div>
          <SocialIcon kind="github" href={siteMetadata.github} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-text-dark">
          <Link
            href="https://lazycatlabs.com"
            className="hover:text-primary-600 dark:hover:text-primary-400"
          >
            {siteMetadata.author}
          </Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>

          <div>{siteMetadata.title}</div>
        </div>
      </div>
    </footer>
  )
}
