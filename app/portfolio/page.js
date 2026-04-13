import Link from 'next/link'

export const metadata = {
  title: 'Our Work | NYC Marketing Collective',
}

export default function PortfolioPage() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="fade-in">Selected <span>Works.</span></h1>
          <p className="fade-in">We don't just participate in industries. We define them.</p>
        </div>
      </header>

      {/* Section 2: Featured B2B Tech Project */}
      <section className="section-pad">
        <div className="container">
          <div className="contact-grid align-items-center">
            <div>
              <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px' }}>B2B Enterprise SaaS</h4>
              <h2 className="mb-4 mt-2">DataSphere Platform</h2>
              <p className="mb-4">A complete ground-up redesign of their corporate site combined with a high-velocity SEO campaign. Tripled their inbound demo requests within 6 months.</p>
              <Link href="/case-studies" className="btn-secondary" style={{ marginLeft: 0 }}>Read Case Study</Link>
            </div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80') center/cover", height: '400px', borderRadius: '20px' }}></div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Lifestyle/Retail Project */}
      <section className="section-pad section-darker">
        <div className="container">
          <div className="contact-grid align-items-center" style={{ gridTemplateColumns: '1.5fr 1fr' }}>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80') center/cover", height: '400px', borderRadius: '20px' }}></div>
            <div style={{ paddingLeft: '30px' }}>
              <h4 style={{ color: 'var(--secondary-color)', textTransform: 'uppercase', letterSpacing: '2px' }}>D2C Retail Segment</h4>
              <h2 className="mb-4 mt-2">Lumina Apparel</h2>
              <p className="mb-4">Executed a multi-channel performance marketing strategy targeting Gen Z buyers, resulting in a record-breaking Black Friday sales weekend.</p>
              <Link href="/case-studies" className="btn-secondary" style={{ marginLeft: 0 }}>Read Case Study</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Finance & Legal Project */}
      <section className="section-pad">
        <div className="container">
          <div className="contact-grid align-items-center">
            <div>
              <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px' }}>FinTech / Legal</h4>
              <h2 className="mb-4 mt-2">Equitable Partners</h2>
              <p className="mb-4">Positioned a legacy financial firm for the digital age through comprehensive rebranding and aggressive LinkedIn thought leadership campaigns.</p>
              <Link href="/case-studies" className="btn-secondary" style={{ marginLeft: 0 }}>Read Case Study</Link>
            </div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80') center/cover", height: '400px', borderRadius: '20px' }}></div>
          </div>
        </div>
      </section>

      {/* Section 5: Project Grid - Other Works */}
      <section className="section-pad section-gradient">
        <div className="container">
          <h2 className="section-title">Additional Works</h2>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80') center/cover" }}></div>
          </div>
        </div>
      </section>

      {/* Section 6: Interactive Results Dashboard */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">Aggregated Portfolio Impact</h2>
          <div className="map-placeholder" style={{ maxWidth: '900px', margin: '0 auto' }}>
            [Interactive Real-Time Client Revenue Dashboard Simulation]
          </div>
        </div>
      </section>

      {/* Section 7: Client Praise */}
      <section className="section-pad section-darker">
        <div className="container">
          <h2 className="section-title">Client Praise</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"We fired our last three agencies within a month. NYC Collective is the first team that actually understands our complex sales cycle."</p>
              <div className="testimonial-author">
                <strong>Mark T.</strong>
                <span>VP Sales, SecureNet</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The ROI was almost suspicious. We had to double check our Google Analytics to make sure the traffic surge was real."</p>
              <div className="testimonial-author">
                <strong>Jessica R.</strong>
                <span>CMO, HealthPlus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Design Awards Ribbon */}
      <section className="marquee-wrapper section-gradient">
        <div className="marquee-content">
          <span className="marquee-item">🏆 2025 Best B2B Website</span>
          <span className="marquee-item">⭐ 2024 Top SEO Agency NYC</span>
          <span className="marquee-item">🏆 2026 Red Dot Design Award</span>
          <span className="marquee-item">⭐ Clutch.co #1 Ranking</span>
          <span className="marquee-item">🏆 2025 Best B2B Website</span>
          <span className="marquee-item">⭐ 2024 Top SEO Agency NYC</span>
        </div>
      </section>

      {/* Section 9: Our Stance on Work */}
      <section className="section-pad">
        <div className="container text-center">
          <h2 className="section-title">Our Stance on Work</h2>
          <p className="mission-statement" style={{ fontSize: '2rem' }}>"Do not build for awards. Build for <span>revenue flow</span>. An aesthetically beautiful site that doesn't convert is an expensive liability."</p>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="cta-global">
            <h2>Want to Be Our Next Success Story?</h2>
            <p>We only partner with brands that are culturally aligned and ready to dominate.</p>
            <Link href="/contact" className="btn-primary">Apply to Become a Client</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
