import Link from 'next/link'

export const metadata = {
  title: 'SEO Strategy | NYC Marketing Collective',
}

export default function SeoStrategyPage() {
  return (
    <main>
      <header className="page-header" style={{ background: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80') center/cover", position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 10, 12, 0.9)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="fade-in">Search Engine <span>Domination.</span></h1>
          <p className="fade-in">Turn Google into your most reliable, compounding revenue stream.</p>
        </div>
      </header>

      {/* Section 2: The Value of Organic Traffic */}
      <section className="section-pad section-darker">
        <div className="container text-center">
          <p className="mission-statement">Ads turn off when your budget runs out. <span>SEO is a permanent asset</span> that appreciates in value over time.</p>
        </div>
      </section>

      {/* Section 3: Technical SEO */}
      <section className="section-pad">
        <div className="container contact-grid align-items-center">
          <div>
            <h2 className="mb-4">Technical Foundation</h2>
            <p className="mb-4">If the foundation is weak, the house will fall. We conduct exhaustive 100+ point technical audits to ensure search engines can effortlessly crawl and render your application.</p>
            <ul style={{ listStyle: 'none', color: '#aaa' }}>
              <li className="mb-2">✓ Core Web Vitals Optimization</li>
              <li className="mb-2">✓ Schema Markup Engineering</li>
              <li className="mb-2">✓ Crawl Budget Management</li>
            </ul>
          </div>
          <div className="gallery-item" style={{ background: '#111', border: '1px solid var(--glass-border)', padding: '40px', borderRadius: '10px' }}>
            <h3 style={{ color: 'var(--secondary-color)' }}>Audit Status: 100% HEALTHY</h3>
            <p className="mt-4">Speed Index: 0.8s<br />Cumulative Layout Shift: 0<br />LCP: 1.2s</p>
          </div>
        </div>
      </section>

      {/* Section 4: On-Page Optimization */}
      <section className="section-pad section-gradient">
        <div className="container">
          <h2 className="section-title">On-Page Content Architecture</h2>
          <div className="detailed-grid">
            <div className="service-card glass">
              <h3>Keyword Matrixing</h3>
              <p>We target not just high-volume terms, but high-intent transactional phrases that actually convert into pipeline.</p>
            </div>
            <div className="service-card glass">
              <h3>Semantic Silos</h3>
              <p>Structuring your site architecture to pass authority naturally and make topical relevance explicitly clear to Google.</p>
            </div>
            <div className="service-card glass">
              <h3>Content Upgrades</h3>
              <p>Transforming thin, low-value pages into authoritative, "10x" content pillars that rank and acquire backlinks effortlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Off-Page & Authority */}
      <section className="section-pad">
        <div className="container contact-grid align-items-center" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
          <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80') center/cover" }}></div>
          <div style={{ paddingLeft: '30px' }}>
            <h2 className="mb-4">Digital PR & Link Acquisition</h2>
            <p className="mb-4">We do not buy spammy links. We run high-end digital PR campaigns, securing placements on Forbes, Techcrunch, and tier-1 industry publications, driving immense domain authority directly to your digital properties.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Local SEO */}
      <section className="section-pad section-darker">
        <div className="container text-center">
          <h2 className="section-title">Conquering Local Markets</h2>
          <p className="mb-6" style={{ maxWidth: '600px', margin: '0 auto 40px auto', color: '#aaa' }}>For businesses tied to geography, local SEO is the holy grail. Whether you're targeting Midtown Manhattan or multiple global capitals, we optimize Google Business profiles to dominate the Map Pack.</p>
          <div className="map-placeholder" style={{ maxWidth: '800px', margin: '0 auto' }}>
            [Local Map Pack Interactivity Visualization]
          </div>
        </div>
      </section>

      {/* Section 7: E-commerce Strategies */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">E-commerce Optimization</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Shopify</h3>
              <p>Platform Architecture</p>
            </div>
            <div className="metric-card">
              <h3>Faceted</h3>
              <p>Navigation Control</p>
            </div>
            <div className="metric-card">
              <h3>Category</h3>
              <p>Page Dominance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: SEO Case Study Highlight */}
      <section className="section-pad section-gradient">
        <div className="container">
          <h2 className="section-title">Case Study highlight</h2>
          <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--secondary-color)', fontSize: '2rem' }}>LegalTech SaaS Platform</h3>
            <p className="mt-4 mb-4">Grew non-branded organic traffic from 5,000 to 125,000 monthly visitors in 14 months, entirely offsetting a $1M annual paid ad spend.</p>
            <Link href="/case-studies" className="text-link">Read the Full Breakdown &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Section 9: SEO Audit Tool Offer */}
      <section className="section-pad text-center">
        <div className="container">
          <h2>Get Your Preliminary SEO Health Score</h2>
          <p className="mb-4 mt-4 text-light">Enter your URL below for a complimentary high-level technical performance read-out.</p>
          <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '10px' }}>
            <input type="text" placeholder="https://yourwebsite.com" style={{ flex: 1, padding: '15px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: '#111', color: '#fff' }} />
            <button className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>Scan Now</button>
          </div>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="cta-global">
            <h2>Stop Losing Clicks to Competitors</h2>
            <p>Demand your unfair share of organic traffic.</p>
            <Link href="/contact" className="btn-primary">Speak to an SEO Expert</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
