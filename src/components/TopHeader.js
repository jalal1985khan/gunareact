import React from 'react'
import Link from 'next/link'

export default function Header() {
  const menu = [
    { id: '1', menu: 'Home', url: '/' },
    { id: '2', menu: 'Experience', url: '/experience' },
    { id: '3', menu: 'Awards', url: '/awards' },
    { id: '4', menu: 'Contact us', url: '/contact-us' },
  ]

  return (
    <div>
      <nav class="bg-body-tertiary navbar navbar-expand-lg navbar-light">
        <div class="container">
          <Link href="/" class="navbar-brand">
            LOGO
          </Link>
          <button
            aria-controls="basic-navbar-nav"
            type="button"
            aria-label="Toggle navigation"
            class="navbar-toggler collapsed"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="basic-navbar-nav">
            <div class="me-auto navbar-nav">
              {menu.map((item, index) => (
                <Link
                  href={item.url}
                  data-rr-ui-event-key="/"
                  class="nav-link"
                  key={index}
                >
                  {item.menu}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
