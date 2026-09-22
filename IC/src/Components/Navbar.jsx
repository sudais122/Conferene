
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Conference Areas', href: '#conference-areas' },
    { name: 'Important Dates', href: '#important-dates' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="w-full border-b border-[#DCE8E8] bg-[#FDFEFE]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-10">

        {/* Conference Title */}
        <h1 className="max-w-[240px] text-sm font-bold leading-tight text-[#003B68] sm:max-w-sm sm:text-base md:text-lg">
          1st International Conference on Health & Sports Sciences
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-5 lg:flex">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm font-semibold text-[#4D616C] transition-colors hover:text-[#003B68]"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md border border-[#DCE8E8] p-2 text-[#003B68] transition-colors hover:bg-[#EFF9F8] lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            // X icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[#DCE8E8] bg-[#FDFEFE] lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block border-b border-[#EFF3F3] py-3 text-sm font-semibold text-[#4D616C] transition-colors last:border-b-0 hover:text-[#003B68]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
