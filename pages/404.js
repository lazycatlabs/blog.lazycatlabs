import CustomLink from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} description="" />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className=" px-4 py-8 text-8xl font-black  md:border-r-2">404</h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Sorry we couldn't find this page.
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <CustomLink href="/">
            <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent btn btn-secondary px-4 py-2  text-sm font-medium leading-5 shadow transition-colors duration-150  focus:outline-none">
              Back to homepage
            </button>
          </CustomLink>
        </div>
      </div>
    </>
  )
}
