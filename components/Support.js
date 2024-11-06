import CustomLink from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Support() {
  return (
    <footer>
      <div className="my-4 flex flex-col items-center">
        <div className="mb-3">
          <h3 className="font-semibold text-text">Support Me ❤️</h3>
        </div>
        <div className=" mb-2 flex flex-wrap content-center gap-x-2 gap-y-3 space-x-2 text-sm text-gray-500">
          <CustomLink
            href={siteMetadata.kofi}
            className="font-medium text-yellow hover:text-yellow"
          >
            Ko-Fi
          </CustomLink>
          <div>{` • `}</div>
          <CustomLink
            href={siteMetadata.saweria}
            className="font-medium text-yellow hover:text-yellow"
          >
            Saweria
          </CustomLink>
          <div>{` • `}</div>
          <CustomLink
            href={siteMetadata.buymecoffee}
            className="font-medium text-yellow  hover:text-yellow"
          >
            Buy me a coffee
          </CustomLink>

          <div>{` • `}</div>
          <CustomLink
            href={siteMetadata.githubSponsor}
            className="font-medium text-yellow hover:text-yellow"
          >
            GitHub Sponsor
          </CustomLink>
        </div>
      </div>
    </footer>
  )
}
