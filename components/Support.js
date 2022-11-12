import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Support() {
  return (
    <footer>
      <div className="my-4 flex flex-col items-center">
        <div className="mb-3">
          <h3 className="font-medium">Support Me</h3>
        </div>
        <div className="mb-2 flex flex-wrap gap-x-2  gap-y-3 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link
            href={siteMetadata.githubSponsor}
            className=" hover:text-primary-600 dark:hover:text-primary-400"
          >
            GitHub Sponsor
          </Link>
          <div>{` • `}</div>
          <Link
            href={siteMetadata.kofi}
            className="hover:text-primary-600 dark:hover:text-primary-400"
          >
            Ko-Fi
          </Link>
          <div>{` • `}</div>
          <Link
            href={siteMetadata.buymecoffee}
            className=" hover:text-primary-600 dark:hover:text-primary-400"
          >
            Buy me a coffee
          </Link>
          <div>{` • `}</div>
          <Link
            href={siteMetadata.saweria}
            className="hover:text-primary-600 dark:hover:text-primary-400"
          >
            Saweria
          </Link>
        </div>
      </div>
    </footer>
  )
}
