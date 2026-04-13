import Link from 'next/link'

export const metadata = {
  title: 'Contact Us | NYC Marketing Collective',
}

export default function ContactPage() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="fade-in">Start the <span>Conversation.</span></h1>
          <p className="fade-in">We only take on projects where we can mathematically guarantee ROI.</p>
        </div>
      </header>

      {/* Section 2: Primary Intake Form */}
      <section className="section-pad text-center">
        <div className="container">
          <h2 className="mb-6">Project Application</h2>
          <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '50px', textAlign: 'left' }}>
            <form action="#">
              <div className="contact-grid" style={{ padding: 0, gap: '20px' }}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" placeholder="Acme Corp" />
                </div>
              </div>
              <div className="form-group mt-2">
                <label>Corporate Email</label>
                <input type="email" placeholder="john@acmecorp.com" />
              </div>
              <div className="form-group mt-2">
                <label>Estimated Monthly Budget</label>
                <select>
                  <option>$5k - $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k+</option>
                </select>
              </div>
              <div className="form-group mt-2">
                <label>Project Details / Growth Goals</label>
                <textarea rows="5" placeholder="Tell us about your current bottlenecks..."></textarea>
              </div>
              <button type="submit" className="btn-primary mt-2" style={{ width: '100%', border: 'none', cursor: 'pointer', padding: '15px', fontSize: '1.1rem' }}>Submit Application</button>
            </form>
          </div>
        </div>
      </section>

      {/* Section 3: NYC Office Details */}
      <section className="section-pad section-darker">
        <div className="container contact-grid align-items-center">
          <div className="map-placeholder">
            [Google Maps NYC Office Location API]
          </div>
          <div style={{ paddingLeft: '30px' }}>
            <h2 className="mb-4">Global HQ</h2>
            <div className="info-card">
              <h3 style={{ color: 'var(--secondary-color)' }}>New York City</h3>
              <p className="mt-2 text-light" style={{ fontSize: '1.1rem' }}>One World Trade Center<br />Suite 4500<br />New York, NY 10007</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Direct Contact Specs */}
      <section className="section-pad section-gradient">
        <div className="container text-center">
          <h2 className="section-title">Direct Escalation</h2>
          <div className="metrics-grid">
            <div className="metric-card glass">
              <h3 style={{ fontSize: '1.5rem' }}>New Business</h3>
              <p style={{ textTransform: 'none', color: '#fff' }} className="mt-2">strategy@nyccollective.com</p>
            </div>
            <div className="metric-card glass">
              <h3 style={{ fontSize: '1.5rem' }}>General Switchboard</h3>
              <p style={{ textTransform: 'none', color: '#fff' }} className="mt-2">+1 (212) 555-0198</p>
            </div>
            <div className="metric-card glass">
              <h3 style={{ fontSize: '1.5rem' }}>Careers</h3>
              <p style={{ textTransform: 'none', color: '#fff' }} className="mt-2">talent@nyccollective.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Social Media Marquee */}
      <section className="marquee-wrapper">
        <div className="marquee-content">
          <span className="marquee-item">FOLLOW US ON LINKEDIN</span>
          <span className="marquee-item">FOLLOW US ON X</span>
          <span className="marquee-item">FOLLOW US ON INSTAGRAM</span>
          <span className="marquee-item">FOLLOW US ON LINKEDIN</span>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">Pre-Application FAQ</h2>
          <div className="accordion">
            <div className="accordion-item active">
              <div className="accordion-header">What is your minimum engagement?</div>
              <div className="accordion-body" style={{ display: 'block' }}>Our minimum retainer for strategy and media execution is $5,000/month.</div>
            </div>
            <div className="accordion-item active">
              <div className="accordion-header">Do you guarantee results?</div>
              <div className="accordion-body" style={{ display: 'block' }}>We guarantee the execution of a math-backed strategy. While we cannot control external market variables, our track record speaks for itself.</div>
            </div>
            <div className="accordion-item active">
              <div className="accordion-header">Will I have a dedicated account manager?</div>
              <div className="accordion-body" style={{ display: 'block' }}>No. You will communicate directly with the Strategists and Directors executing your work. We removed middlemen to increase velocity.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Discovery Flow Timeline */}
      <section className="section-pad section-darker">
        <div className="container">
          <h2 className="section-title">The Discovery Flow</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>Day 1</span>
                <h3>Application Review</h3>
                <p>Our directors assess your submission.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>Day 3</span>
                <h3>Chemistry Call</h3>
                <p>A quick 15-minute chat to ensure mutual fit.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>Day 7</span>
                <h3>Strategic Audit Pitch</h3>
                <p>We present our findings and a proposed action plan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Onboarding */}
      <section className="section-pad">
        <div className="container text-center">
          <h2 className="mb-4">Seamless Onboarding</h2>
          <p className="mission-statement" style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>Once contracts are signed, our technical team immediately integrates with your asset libraries, ad accounts, and analytics platforms via secure SOC2-compliant protocols.</p>
        </div>
      </section>

      {/* Section 9: Press */}
      <section className="section-pad section-gradient">
        <div className="container text-center">
          <h2 className="mb-4">Media Inquiries</h2>
          <p className="mb-4" style={{ color: '#aaa' }}>For press kits, logos, and executive headshots, please download our media packet.</p>
          <a href="#" className="btn-secondary">Download Press Kit (ZIP)</a>
        </div>
      </section>

      {/* Section 10: Footer Content (Manual inside page to match layout or just use layout) */}
      {/* Note: layout.js already has a footer, so we skip section 10's manual footer but keep the content if unique. */}
      {/* The original text had a specific footer container with unique links. We'll stick to layout's footer for consistency. */}
    </main>
  )
}
