import Link from 'next/link'

export const metadata = {
  title: 'Insights & Intel | NYC Marketing Collective',
}

export default function BlogPage() {
  return (
    <main>
      <header className="page-header" style={{ background: 'radial-gradient(circle at bottom, #1b1b22, #050507)' }}>
        <div className="container">
          <h1 className="fade-in">Collective <span>Intel.</span></h1>
          <p className="fade-in">Raw data, unvarnished opinions, and growth architectures.</p>
        </div>
      </header>

      {/* Section 2: Featured Article */}
      <section className="section-pad">
        <div className="container">
          <div className="contact-grid align-items-center" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', overflow: 'hidden', padding: 0 }}>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80') center/cover", height: '100%', borderRadius: 0 }}></div>
            <div style={{ padding: '40px' }}>
              <h4 style={{ color: 'var(--primary-color)' }}>FEATURED REPORT</h4>
              <h2 className="mb-4 mt-2">The 2026 AI Search Algorithm Update: How to Survive</h2>
              <p className="mb-4">Google's latest rollout is destroying programmatic content farms. Here is our exact blueprint on how to protect your organic pipeline.</p>
              <a href="#" className="btn-secondary" style={{ marginLeft: 0 }}>Read Full Report</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Category: SEO & Growth */}
      <section className="section-pad section-darker">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'left' }}>SEO & Performance</h2>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="blog-card">
              <div className="gallery-item mb-2" style={{ height: '200px', background: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80') center/cover" }}></div>
              <small>TECHNICAL SEO</small>
              <h3>Fixing Core Web Vitals Before Q3</h3>
            </div>
            <div className="blog-card">
              <div className="gallery-item mb-2" style={{ height: '200px', background: "url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80') center/cover" }}></div>
              <small>LINK BUILDING</small>
              <h3>Digital PR Strategies that Actually Work</h3>
            </div>
            <div className="blog-card">
              <div className="gallery-item mb-2" style={{ height: '200px', background: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80') center/cover" }}></div>
              <small>ANALYTICS</small>
              <h3>Setting up GA4 for E-commerce</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Category: Design & UX */}
      <section className="section-pad section-gradient">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Design & Engineering</h2>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="blog-card">
              <div className="gallery-item mb-2" style={{ height: '200px', background: "url('https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80') center/cover" }}></div>
              <small>UI/UX</small>
              <h3>The Return of Dark Mode in 2026</h3>
            </div>
            <div className="blog-card">
              <div className="gallery-item mb-2" style={{ height: '200px', background: "url('https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80') center/cover" }}></div>
              <small>BRANDING</small>
              <h3>Why Minimalist Logos are Failing</h3>
            </div>
            <div className="blog-card">
              <div className="gallery-item mb-2" style={{ height: '200px', background: "url('https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80') center/cover" }}></div>
              <small>CONVERSION</small>
              <h3>Psychology of the Checkout Cart</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Category: Agency Life */}
      <section className="section-pad">
        <div className="container text-center">
          <h2 className="section-title">Culture & Operations</h2>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="blog-card">
              <div className="gallery-item mb-2" style={{ height: '300px', background: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80') center/cover" }}></div>
              <small>LEADERSHIP</small>
              <h3>Why We Eliminated Account Managers</h3>
            </div>
            <div className="blog-card">
              <div className="gallery-item mb-2" style={{ height: '300px', background: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80') center/cover" }}></div>
              <small>CULTURE</small>
              <h3>The Hybrid Office Debate is Over</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Video Podcast */}
      <section className="section-pad section-darker">
        <div className="container text-center">
          <h2 className="section-title">The Collective Podcast</h2>
          <div className="map-placeholder" style={{ maxWidth: '900px', margin: '0 auto', height: '500px' }}>
            [Embedded YouTube Video Interview Series]
          </div>
          <p className="mt-4" style={{ color: '#aaa' }}>Listen on Spotify, Apple Podcasts, or watch on YouTube.</p>
        </div>
      </section>

      {/* Section 7: Whitepapers */}
      <section className="section-pad section-gradient">
        <div className="container">
          <h2 className="section-title">Technical Whitepapers</h2>
          <div className="detailed-grid">
            <div className="service-card glass">
              <h3>B2B Lead Gen Playbook</h3>
              <p>80 pages of exact LinkedIn and Email outreach cadences.</p>
              <a href="#" className="text-link">Download PDF &rarr;</a>
            </div>
            <div className="service-card glass">
              <h3>E-Com Holiday Scaling</h3>
              <p>How to prep your Shopify store for Q4 traffic spikes.</p>
              <a href="#" className="text-link">Download PDF &rarr;</a>
            </div>
            <div className="service-card glass">
              <h3>Enterprise SEO Auditing</h3>
              <p>Our internal 150-point checklist for auditing global sites.</p>
              <a href="#" className="text-link">Download PDF &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Industry Trends Marquee */}
      <section className="marquee-wrapper">
        <div className="marquee-content">
          <span className="marquee-item">TRENDS: Zero-Click Searches Rising 30%</span>
          <span className="marquee-item">TRENDS: CPCs Up 15% YoY</span>
          <span className="marquee-item">TRENDS: Short-form Video ROI dominance</span>
          <span className="marquee-item">TRENDS: AI Content Penalties active</span>
        </div>
      </section>

      {/* Section 9: Newsletter Subscription Form */}
      <section className="section-pad section-darker text-center">
        <div className="container">
          <div className="glass" style={{ maxWidth: '700px', margin: '0 auto', padding: '60px' }}>
            <h2 className="mb-4">Subscribe to 'The Signal'</h2>
            <p className="mb-4" style={{ color: '#aaa' }}>Join 15,000+ CMOs and founders who receive our weekly, zero-fluff strategy analysis.</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="email" placeholder="Your Email Address" style={{ flex: 1, padding: '15px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: '#111', color: '#fff' }} />
              <button className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="section-pad-sm">
        <div className="container text-center">
          <div className="cta-global">
            <h2>Enough Reading. Time for Action.</h2>
            <p>Let's implement these strategies into your business.</p>
            <Link href="/contact" className="btn-primary">Talk to Strategy</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
