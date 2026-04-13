import Link from 'next/link'

export const metadata = {
  title: 'Content & Creative | NYC Marketing Collective',
}

export default function ContentCreativePage() {
  return (
    <main>
      <header className="page-header" style={{ background: "url('https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80') center/cover", position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 10, 12, 0.85)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="fade-in">Visual <span>Storytelling.</span></h1>
          <p className="fade-in">Design that doesn't just look pretty. Design that drives commerce.</p>
        </div>
      </header>

      {/* Section 2: Brand Identity & Strategy */}
      <section className="section-pad">
        <div className="container text-center">
          <h2 className="section-title">Brand Identity Architecture</h2>
          <p className="mb-6" style={{ maxWidth: '800px', margin: '0 auto 40px auto', color: '#aaa' }}>Your brand is the gut feeling a person has when they interact with your company. We meticulously engineer that feeling through typography, color theory, and voice guidelines to ensure absolute market positioning.</p>
          <div className="gallery-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1626785775438-e6b8c4c3b5bb?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80') center/cover" }}></div>
          </div>
        </div>
      </section>

      {/* Section 3: Web & UI/UX Design */}
      <section className="section-pad section-darker">
        <div className="container contact-grid align-items-center">
          <div>
            <h2 className="mb-4">UI/UX & Digital Platforms</h2>
            <p className="mb-4">We design high-converting, accessible, and stunning digital experiences. Our UI/UX architects blend behavioral psychology with modern aesthetics—utilizing glassmorphism, fluid typography, and micro-interactions.</p>
          </div>
          <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80') center/cover" }}></div>
        </div>
      </section>

      {/* Section 4: Video Production Highlights */}
      <section className="section-pad section-gradient">
        <div className="container text-center">
          <h2 className="section-title">Cinematic Production</h2>
          <div className="map-placeholder">
            [High-End Cinematic Video Showreel Embedded Here]
          </div>
          <p className="mt-4" style={{ color: '#aaa' }}>In-house RED cameras. World-class editors. Unforgettable narratives.</p>
        </div>
      </section>

      {/* Section 5: Copywriting & Voice */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">Persuasive Copywriting</h2>
          <div className="detailed-grid">
            <div className="service-card glass">
              <h3>Conversion Copy</h3>
              <p>Landing page scripts and sales sequences optimized to trigger emotional buying decisions.</p>
            </div>
            <div className="service-card glass">
              <h3>Brand Voice</h3>
              <p>Developing a standardized, unmistakable tone of voice across all your corporate communications.</p>
            </div>
            <div className="service-card glass">
              <h3>Thought Leadership</h3>
              <p>Ghostwriting for executives to establish authority in top-tier industry publications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Social Media Assets Showcase */}
      <section className="marquee-wrapper section-darker">
        <div className="marquee-content">
          <span className="marquee-item">Instagram Reels</span>
          <span className="marquee-item">TikTok Campaigns</span>
          <span className="marquee-item">LinkedIn Carousels</span>
          <span className="marquee-item">YouTube Shorts</span>
          <span className="marquee-item">Display Banners</span>
          <span className="marquee-item">Email Templates</span>
        </div>
      </section>

      {/* Section 7: Before/After Visual */}
      <section className="section-pad">
        <div className="container text-center">
          <h2 className="section-title">The Power of Rebranding</h2>
          <div className="before-after-grid">
            <div className="ba-card">
              <h4>Before the Collective</h4>
              <div style={{ height: '200px', background: '#222', marginTop: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>[Generic Template Site]</div>
            </div>
            <div className="ba-card after">
              <h4>After the Collective</h4>
              <div style={{ height: '200px', background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', marginTop: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>[Premium Glassmorphism Experience]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Creative Process Steps */}
      <section className="section-pad section-darker">
        <div className="container">
          <h2 className="section-title">Our Creative Pipeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <span>Phase 1</span>
                <h3>Immersion</h3>
                <p>We interview your stakeholders and study your perfect customers.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <span>Phase 2</span>
                <h3>Wireframing</h3>
                <p>Mapping the structural flow before any colors are applied.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <span>Phase 3</span>
                <h3>High-Fidelity Design</h3>
                <p>Applying the visual polish, animations, and aesthetic direction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Featured Creative Campaign Showcase */}
      <section className="section-pad">
        <div className="container contact-grid align-items-center" style={{ gridTemplateColumns: '1.5fr 1fr' }}>
          <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80') center/cover" }}></div>
          <div style={{ paddingLeft: '30px' }}>
            <h2 className="mb-4">Spotlight: Apex Fitness App</h2>
            <p className="mb-4">We handled the entire end-to-end UI design and launch animation sequences, helping the app reach #4 in the App Store Health & Fitness category during launch week.</p>
            <Link href="/portfolio" className="text-link">View Project Details &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="cta-global">
            <h2>Upgrade Your Aesthetic</h2>
            <p>Because first impressions in the digital world are often the only impressions.</p>
            <Link href="/contact" className="btn-primary">Start a Design Project</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
