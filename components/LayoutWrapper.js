import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import LogoLight from '@/data/logo_light.svg'
import LogoDark from '@/data/logo_dark.svg'
import CustomLink from '@/components/Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const LayoutWrapper = ({ children }) => {
  const [isMounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && theme) {
      document.body.classList = theme
    }
  }, [theme, isMounted])

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-6">
          <CustomLink href="/" aria-label={siteMetadata.headerTitle}>
            {!isMounted ? (
              <LogoDark />
            ) : (resolvedTheme || theme) === 'black' ? (
              <LogoLight />
            ) : (
              <LogoDark />
            )}
          </CustomLink>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <CustomLink
                  key={link.title}
                  href={link.href}
                  className="font-medium text-text hover:font-bold hover:text-secondary sm:p-4"
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
