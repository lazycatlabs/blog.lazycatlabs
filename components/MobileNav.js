import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          <path d="M2 0.5H9.5C9.89782 0.5 10.2794 0.658035 10.5607 0.93934C10.842 1.22064 11 1.60218 11 2C11 2.39782 10.842 2.77936 10.5607 3.06066C10.2794 3.34196 9.89782 3.5 9.5 3.5H2C1.60218 3.5 1.22064 3.34196 0.93934 3.06066C0.658035 2.77936 0.5 2.39782 0.5 2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5V0.5ZM12.5 12.5H20C20.3978 12.5 20.7794 12.658 21.0607 12.9393C21.342 13.2206 21.5 13.6022 21.5 14C21.5 14.3978 21.342 14.7794 21.0607 15.0607C20.7794 15.342 20.3978 15.5 20 15.5H12.5C12.1022 15.5 11.7206 15.342 11.4393 15.0607C11.158 14.7794 11 14.3978 11 14C11 13.6022 11.158 13.2206 11.4393 12.9393C11.7206 12.658 12.1022 12.5 12.5 12.5ZM2 6.5H20C20.3978 6.5 20.7794 6.65804 21.0607 6.93934C21.342 7.22064 21.5 7.60218 21.5 8C21.5 8.39782 21.342 8.77936 21.0607 9.06066C20.7794 9.34196 20.3978 9.5 20 9.5H2C1.60218 9.5 1.22064 9.34196 0.93934 9.06066C0.658035 8.77936 0.5 8.39782 0.5 8C0.5 7.60218 0.658035 7.22064 0.93934 6.93934C1.22064 6.65804 1.60218 6.5 2 6.5V6.5Z" />
        </svg>
      </button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-5 mt-11 h-8 w-8 rounded"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-8 h-full">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link
                href={link.href}
                className="mono-type text-5xl font-bold tracking-widest text-gray-900 dark:text-gray-100 "
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
