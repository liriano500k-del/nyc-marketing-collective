import Link from 'next/link'

export const metadata = {
  title: 'Our Services | NYC Marketing Collective',
}

export default function ServicesPage() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="fade-in">Precision <span>Capabilities.</span></h1>
          <p className="fade-in">Our multidisciplinary approach to dominating the modern digital landscape.</p>
        </div>
      </header>

      {/* Section 2: Service 1 Growth Strategy */}
      <section className="section-pad">
        <div className="container contact-grid align-items-center">
          <div>
            <h2 className="mb-4">Growth Strategy Architecture</h2>
            <p className="mb-4">Before a single dollar is spent on advertising, we architect the growth model. We analyze your customer acquisition cost (CAC), lifetime value (LTV), and market positioning to build a machine designed to print revenue.</p>
            <Link href="/contact" className="text-link">Book a Strategy Audit &rarr;</Link>
          </div>
          <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80') center/cover" }}></div>
        </div>
      </section>

      {/* Section 3: Service 2 Organic SEO */}
      <section className="section-pad section-darker">
        <div className="container contact-grid align-items-center" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
          <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80') center/cover" }}></div>
          <div style={{ paddingLeft: '30px' }}>
            <h2 className="mb-4">Organic SEO Domination</h2>
            <p className="mb-4">We treat Google not as a search engine, but as the world's most lucrative real estate market. We build technical foundations and authoritative content to secure the best property for your brand.</p>
            <Link href="/seo-strategy" className="text-link">Explore SEO Capabilities &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Section 4: Service 3 Content & Creative */}
      <section className="section-pad">
        <div className="container contact-grid align-items-center">
          <div>
            <h2 className="mb-4">Content & Creative</h2>
            <p className="mb-4">Aesthetics matter. In a world of infinite scrolling, only the truly remarkable make people stop. Our design studio builds emotional resonance through premium UI/UX, video production, and brand identity.</p>
            <Link href="/content-creative" className="text-link">Explore Creative Studio &rarr;</Link>
          </div>
          <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80') center/cover" }}></div>
        </div>
      </section>

      {/* Section 5: Service 4 Paid Media / Performance */}
      <section className="section-pad section-gradient">
        <div className="container text-center">
          <h2 className="mb-4">Performance Marketing</h2>
          <p className="mb-6" style={{ maxWidth: '700px', margin: '0 auto 40px auto', color: '#aaa' }}>We deploy capital with surgical precision across Meta, Google, and LinkedIn properties. Our media buyers are data scientists constantly optimizing for the lowest possible acquisition costs.</p>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>22%</h3>
              <p>Avg. CPA Reduction</p>
            </div>
            <div className="metric-card">
              <h3>4.5x</h3>
              <p>Avg. ROAS Increase</p>
            </div>
            <div className="metric-card">
              <h3>$100M+</h3>
              <p>Ad Spend Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Methodology */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">The 4-Step Methodology</h2>
          <div className="detailed-grid">
            <div className="service-card glass">
              <div className="icon">01</div>
              <h3 className="mt-4 mb-2">Audit & Discovery</h3>
              <p>We tear down your existing data, assets, and funnels to find the hidden leaks.</p>
            </div>
            <div className="service-card glass">
              <div className="icon">02</div>
              <h3 className="mt-4 mb-2">Strategic Assembly</h3>
              <p>Drafting the blueprint. We select the specific channels required to scale.</p>
            </div>
            <div className="service-card glass">
              <div className="icon">03</div>
              <h3 className="mt-4 mb-2">Aggressive Execution</h3>
              <p>Deployment phase. Our teams launch campaigns across all relevant verticals.</p>
            </div>
            <div className="service-card glass">
              <div className="icon">04</div>
              <h3 className="mt-4 mb-2">Relentless Optimization</h3>
              <p>Daily micro-adjustments to the campaigns to squeeze out maximum efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Tech Stack */}
      <section className="marquee-wrapper section-darker">
        <div className="marquee-content">
          <span className="marquee-item">Google Analytics 4</span>
          <span className="marquee-item">Ahrefs</span>
          <span className="marquee-item">Semrush</span>
          <span className="marquee-item">Figma</span>
          <span className="marquee-item">HubSpot</span>
          <span className="marquee-item">Salesforce</span>
          <span className="marquee-item">Looker Studio</span>
        </div>
      </section>

      {/* Section 8: Client ROI Stats Grid */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">Verified Results</h2>
          <div className="before-after-grid">
            <div className="ba-card">
              <h4>E-Commerce Brand (Home Goods)</h4>
              <p><strong>Before:</strong> $500k ARR, struggling with high FB ad costs.</p>
            </div>
            <div className="ba-card after">
              <h4>After (12 Months)</h4>
              <p><strong>Result:</strong> $4.2M ARR, organic traffic up 300%, blended CAC down 40%.</p>
            </div>
            <div className="ba-card">
              <h4>B2B SaaS (FinTech)</h4>
              <p><strong>Before:</strong> Relying purely on expensive outbound sales.</p>
            </div>
            <div className="ba-card after">
              <h4>After (6 Months)</h4>
              <p><strong>Result:</strong> Inbound pipeline saturated via SEO, $1.5M in closed-won deals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Services FAQ */}
      <section className="section-pad section-darker">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="accordion">
            <div className="accordion-item active">
              <div className="accordion-header">Do you offer a la carte services?</div>
              <div className="accordion-body" style={{ display: 'block' }}>While we primarily work in holistic retainers to guarantee results, we do offer standalone audits and strategic road mapping sessions.</div>
            </div>
            <div className="accordion-item active">
              <div className="accordion-header">What is your typical onboarding timeline?</div>
              <div className="accordion-body" style={{ display: 'block' }}>From contract signatures to campaign launch is typically 14 to 30 days depending on the structural complexities of your tech stack.</div>
            </div>
            <div className="accordion-item active">
              <div className="accordion-header">Do you work with startups?</div>
              <div className="accordion-body" style={{ display: 'block' }}>We work with established startups that have proven product-market fit and have either raised a Series A or are cash-flow positive.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="cta-global">
            <h2>Ready to Scale With Confidence?</h2>
            <p>Speak to our growth architects today and discover your true potential.</p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
