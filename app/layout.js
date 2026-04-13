import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'NYC Marketing Collective | Premium Digital Growth',
  description: 'A high-end marketing agency based in NYC, specializing in digital strategy, SEO, and creative growth.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <Link href="/" className="logo">NYC<span>COLL</span></Link>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Work</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact" className="btn-primary">Get Started</Link></li>
            </ul>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <div className="container footer-content">
            <p>&copy; 2026 NYC Marketing Collective. All rights reserved.</p>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">X (Twitter)</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
