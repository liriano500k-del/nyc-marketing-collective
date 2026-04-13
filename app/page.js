import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="fade-in">Marketing the <span>NYC Way.</span></h1>
          <p className="fade-in">Precision-driven growth for the world's most ambitious brands. Based in the heart of Silicon Alley.</p>
          <div className="hero-btns fade-in">
            <Link href="/portfolio" className="btn-primary">View our Work</Link>
            <Link href="/services" className="btn-secondary">Our Capabilities</Link>
          </div>
        </div>
      </header>

      {/* Section 2: Logo Marquee */}
      <section className="marquee-wrapper">
        <div className="marquee-content">
          <span className="marquee-item">TechCrunch</span>
          <span className="marquee-item">Forbes</span>
          <span className="marquee-item">Bloomberg</span>
          <span className="marquee-item">Wired</span>
          <span className="marquee-item">Vogue</span>
          <span className="marquee-item">GQ</span>
          <span className="marquee-item">TechCrunch</span>
          <span className="marquee-item">Forbes</span>
          <span className="marquee-item">Bloomberg</span>
        </div>
      </section>

      {/* Section 3: The Collective Intro */}
      <section className="section-pad section-darker">
        <div className="container text-center">
          <p className="mission-statement fade-in">We are a syndicate of digital architects, building <span>unfair growth advantages</span> for brands ready to scale beyond their limits.</p>
        </div>
      </section>

      {/* Section 4: Value Prop (Glass Cards) */}
      <section className="section-pad services-teaser">
        <div className="container">
          <h2 className="section-title">The Collective Advantage</h2>
          <div className="service-grid">
            <div className="service-card glass">
              <div className="icon">⚡</div>
              <h3>Velocity</h3>
              <p>Rapid execution of go-to-market strategies that outpace the competition.</p>
            </div>
            <div className="service-card glass">
              <div className="icon">🔬</div>
              <h3>Precision</h3>
              <p>Data-backed audience targeting that guarantees maximum ROI per dollar.</p>
            </div>
            <div className="service-card glass">
              <div className="icon">💎</div>
              <h3>Prestige</h3>
              <p>Elevated brand aesthetics that command premium market positioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Impact Numbers */}
      <section className="section-pad section-gradient">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>$2.4B</h3>
              <p>Revenue Generated</p>
            </div>
            <div className="metric-card">
              <h3>500+</h3>
              <p>Brands Scaled</p>
            </div>
            <div className="metric-card">
              <h3>150M</h3>
              <p>Engagements Driven</p>
            </div>
            <div className="metric-card">
              <h3>12yrs</h3>
              <p>Industry Dominance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Service Pillars Overview */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">Core Disciplines</h2>
          <div className="detailed-grid">
            <div className="service-item glass">
              <h2>Growth Strategy</h2>
              <p>End-to-end digital roadmaps designed for market dominance and acquisition.</p>
              <Link href="/services" className="text-link">Explore Strategy &rarr;</Link>
            </div>
            <div className="service-item glass">
              <h2>Organic SEO</h2>
              <p>Dominating search results with technical audits and data-backed content.</p>
              <Link href="/seo-strategy" className="text-link">Explore SEO &rarr;</Link>
            </div>
            <div className="service-item glass">
              <h2>Creative Design</h2>
              <p>Visual storytelling that stops the scroll and starts the conversation.</p>
              <Link href="/content-creative" className="text-link">Explore Creative &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Featured Work */}
      <section className="section-pad section-darker">
        <div className="container">
          <h2 className="section-title">Selected Works</h2>
          <div className="gallery-grid">
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80') center/cover" }}></div>
          </div>
          <div className="text-center mt-4">
            <Link href="/portfolio" className="btn-secondary">View Complete Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">Client Perspectives</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"NYC Collective transformed our digital presence in under 6 months. Our organic traffic 10x'd."</p>
              <div className="testimonial-author">
                <strong>Sarah Jenkins</strong>
                <span>CMO, FinTech Innovators</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The creative output is unmatched. They don't just design, they engineer emotional connections."</p>
              <div className="testimonial-author">
                <strong>David Chen</strong>
                <span>Founder, NeoRetail</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: NYC Presence Map Visual */}
      <section className="section-pad section-gradient">
        <div className="container">
          <h2 className="section-title">Anchored in NYC. Operating Globally.</h2>
          <div className="map-placeholder">
            [Interactive 3D Globe / NYC Map Integration Placeholder]
          </div>
        </div>
      </section>

      {/* Section 10: Global CTA */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="cta-global">
            <h2>Ready to Dominate Your Market?</h2>
            <p>Schedule a confidential strategy and discovery session with our senior partners.</p>
            <Link href="/contact" className="btn-primary">Initiate Project</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
