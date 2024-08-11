import React from 'react'
import Link from 'next/link'

export default function Header() {
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
              <Link href="/" data-rr-ui-event-key="/" class="nav-link">
                Home
              </Link>
              <Link
                href="/experience"
                data-rr-ui-event-key="/experience"
                class="nav-link"
              >
                Experience
              </Link>
              <Link
                href="/awards"
                data-rr-ui-event-key="/awards"
                class="nav-link"
              >
                Awards
              </Link>
              <Link
                href="/contact-us"
                data-rr-ui-event-key="/contact-us"
                class="nav-link"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
