import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Support() {
  return (
    <footer>
      <div className="my-4 flex flex-col items-center">
        <div className="mb-3">
          <h3 className="font-medium text-lavender dark:text-lavender-dark">Support Me ❤️</h3>
        </div>
        <div className="mb-2 flex flex-wrap content-center gap-x-2 gap-y-3 space-x-2 text-sm text-gray-500 dark:text-text-dark">
          <Link
            href={siteMetadata.kofi}
            className="text-maroon hover:text-maroon-dark dark:text-maroon-dark dark:hover:text-maroon"
          >
            Ko-Fi
          </Link>
          <div>{` • `}</div>
          <Link
            href={siteMetadata.saweria}
            className="text-maroon hover:text-maroon-dark dark:text-maroon-dark dark:hover:text-maroon"
          >
            Saweria
          </Link>
          <div>{` • `}</div>
          <Link
            href={siteMetadata.buymecoffee}
            className="text-maroon hover:text-maroon-dark dark:text-maroon-dark dark:hover:text-maroon"
          >
            Buy me a coffee
          </Link>

          <div>{` • `}</div>
          <Link
            href={siteMetadata.githubSponsor}
            className="text-maroon hover:text-maroon-dark dark:text-maroon-dark dark:hover:text-maroon"
          >
            GitHub Sponsor
          </Link>
        </div>
      </div>
    </footer>
  )
}
