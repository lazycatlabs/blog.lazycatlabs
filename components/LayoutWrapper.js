import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import CustomLink from '@/components/Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const LayoutWrapper = ({ children }) => {
  const [isMounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    if (theme) {
      document.body.classList = theme
    }
    setMounted(true)
  }, [theme])

  /// Need to fix this issue because this code make OG not working
  if (!isMounted) {
    return null
  }

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-6">
          <CustomLink href="/" aria-label={siteMetadata.headerTitle}></CustomLink>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <CustomLink
                  key={link.title}
                  href={link.href}
                  className=" font-medium text-text hover:font-bold hover:text-secondary sm:p-4"
                >
                  {link.title}
                </CustomLink>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
