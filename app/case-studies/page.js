import Link from 'next/link'

export const metadata = {
  title: 'Case Studies | NYC Marketing Collective',
}

export default function CaseStudiesPage() {
  return (
    <main>
      <header className="page-header" style={{ background: 'radial-gradient(circle at top right, #1b1b22, #050507)' }}>
        <div className="container">
          <h1 className="fade-in">Data-Driven <span>Victories.</span></h1>
          <p className="fade-in">We let our client balance sheets do the talking.</p>
        </div>
      </header>

      {/* Section 2: Case Study 1 */}
      <section className="section-pad">
        <div className="container contact-grid align-items-center">
          <div>
            <h4 style={{ color: 'var(--primary-color)' }}>01 / Organic SEO</h4>
            <h2 className="mb-4 mt-2">500% Traffic Growth in 14 Months</h2>
            <p className="mb-4">How we restructured a mid-market legal tech company's content silos, driving a half-million organic visitors annually.</p>
            <div className="metrics-grid mb-6" style={{ textAlign: 'left', gridTemplateColumns: '1fr 1fr' }}>
              <div><h3 style={{ fontSize: '2rem' }}>+520%</h3><p style={{ fontSize: '0.8rem' }}>Traffic</p></div>
              <div><h3 style={{ fontSize: '2rem' }}>$1.2M</h3><p style={{ fontSize: '0.8rem' }}>Ad Offset</p></div>
            </div>
          </div>
          <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80') center/cover" }}></div>
        </div>
      </section>

      {/* Section 3: Case Study 2 */}
      <section className="section-pad section-darker">
        <div className="container contact-grid align-items-center" style={{ gridTemplateColumns: '1.5fr 1fr' }}>
          <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80') center/cover" }}></div>
          <div style={{ paddingLeft: '30px' }}>
            <h4 style={{ color: 'var(--secondary-color)' }}>02 / Creative Restructuring</h4>
            <h2 className="mb-4 mt-2">Enterprise Rebranding: OmniCorp</h2>
            <p className="mb-4">A complete UX overhaul of a 20-year-old financial institution, modernizing their aesthetic while protecting their legacy trust signals.</p>
            <div className="metrics-grid mb-6" style={{ textAlign: 'left', gridTemplateColumns: '1fr 1fr' }}>
              <div><h3 style={{ fontSize: '2rem' }}>-40%</h3><p style={{ fontSize: '0.8rem' }}>Bounce Rate</p></div>
              <div><h3 style={{ fontSize: '2rem' }}>3x</h3><p style={{ fontSize: '0.8rem' }}>Lead Gen</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Case Study 3 */}
      <section className="section-pad section-gradient">
        <div className="container contact-grid align-items-center">
          <div>
            <h4 style={{ color: '#fff' }}>03 / Performance Media</h4>
            <h2 className="mb-4 mt-2">Extreme Conversion Rate Optimization</h2>
            <p className="mb-4">By A/B testing 45 variants of a landing page checkout over 30 days, we dramatically slashed acquisition costs for this D2C brand.</p>
            <div className="metrics-grid mb-6" style={{ textAlign: 'left', gridTemplateColumns: '1fr 1fr' }}>
              <div><h3 style={{ fontSize: '2rem' }}>-65%</h3><p style={{ fontSize: '0.8rem' }}>CPA Reduction</p></div>
              <div><h3 style={{ fontSize: '2rem' }}>9.2x</h3><p style={{ fontSize: '0.8rem' }}>ROAS Hit</p></div>
            </div>
          </div>
          <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80') center/cover" }}></div>
        </div>
      </section>

      {/* Section 5: Industry Metrics Breakdown */}
      <section className="section-pad">
        <div className="container text-center">
          <h2 className="section-title">Agnostic Excellence</h2>
          <p className="mb-6" style={{ maxWidth: '600px', margin: '0 auto 40px auto', color: '#aaa' }}>We deploy our frameworks across multiple verticals, proving that mathematical growth principles are universal.</p>
          <div className="metrics-grid">
            <div className="metric-card glass">
              <h3 style={{ fontSize: '2.5rem' }}>B2B SaaS</h3>
              <p>Avg 200% ARR Boost</p>
            </div>
            <div className="metric-card glass">
              <h3 style={{ fontSize: '2.5rem' }}>Retail E-com</h3>
              <p>Avg 6x ROAS</p>
            </div>
            <div className="metric-card glass">
              <h3 style={{ fontSize: '2.5rem' }}>HealthTech</h3>
              <p>Avg $45 CPL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Before / After Data Visual */}
      <section className="section-pad section-darker">
        <div className="container">
          <h2 className="section-title">The Inflection Point</h2>
          <div className="before-after-grid">
            <div className="ba-card">
              <h4>Pre-Engagement Baseline</h4>
              <div style={{ height: 'auto', padding: '20px', background: '#111', color: '#777' }}>
                <ul style={{ listStyle: 'none' }}>
                  <li className="mb-2">Traffic: Flat</li>
                  <li className="mb-2">Leads: Sporadic (Referral reliant)</li>
                  <li className="mb-2">Design: Outdated template</li>
                  <li>Sales Cycle: 90 days</li>
                </ul>
              </div>
            </div>
            <div className="ba-card after">
              <h4>Post-Collective Action</h4>
              <div style={{ height: 'auto', padding: '20px', background: '#1a1a24', color: '#fff' }}>
                <ul style={{ listStyle: 'none' }}>
                  <li className="mb-2" style={{ color: 'var(--secondary-color)' }}>Traffic: Aggressive hockey stick growth</li>
                  <li className="mb-2" style={{ color: 'var(--secondary-color)' }}>Leads: Predictable daily inbound volume</li>
                  <li className="mb-2" style={{ color: 'var(--secondary-color)' }}>Design: Custom premium framework</li>
                  <li style={{ color: 'var(--secondary-color)' }}>Sales Cycle: Reduced to 45 days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Strategy Deconstruction */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">Anatomy of a Takeover</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>Phase 1: Leak Fixing</span>
                <p>We stop the bleeding in ad accounts immediately.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>Phase 2: Funnel Engineering</span>
                <p>Restructuring landing pages and UI/UX flows.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>Phase 3: Traffic Injection</span>
                <p>Opening the taps on SEO, Paid Search, and Social.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>Phase 4: Market Dominance</span>
                <p>Scaling budgets aggressively once ROAS hits KPIs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Video Testimonial */}
      <section className="section-pad section-gradient text-center">
        <div className="container">
          <h2 className="mb-6">Listen to Our Partners</h2>
          <div className="map-placeholder" style={{ maxWidth: '800px', margin: '0 auto', minHeight: '300px' }}>
            [Embedded Testimonial Video Interview]
          </div>
          <p className="mt-4" style={{ color: '#ccc' }}>A 5-minute deep dive with the CEO of FinTech Innovators.</p>
        </div>
      </section>

      {/* Section 9: Blueprints Download */}
      <section className="section-pad">
        <div className="container">
          <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '60px' }}>
            <h2 className="mb-4">Want the Exact Blueprints?</h2>
            <p className="mb-4" style={{ color: '#aaa' }}>We have compiled the raw data, exact ad scripts, and technical SEO architecture diagrams into comprehensive PDF teardowns.</p>
            <input type="email" placeholder="Enter corporate email" style={{ padding: '15px', borderRadius: '5px', border: '1px solid var(--glass-border)', background: '#111', color: '#fff', width: '60%', marginBottom: '20px' }} /><br />
            <button className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>Download Vault Access</button>
          </div>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="cta-global">
            <h2>Do These Results Sound Appealing?</h2>
            <p>We are currently accepting new clients for Q3.</p>
            <Link href="/contact" className="btn-primary">Apply Now</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
