import Link from 'next/link'

export const metadata = {
  title: 'About Us | NYC Marketing Collective',
}

export default function AboutPage() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="fade-in">Our <span>Origin Story.</span></h1>
          <p className="fade-in">Born in New York. Built for the modern digital era.</p>
        </div>
      </header>

      {/* Section 2: Mission Statement */}
      <section className="section-pad section-darker">
        <div className="container text-center">
          <p className="mission-statement">Our mission is to redefine what an agency can be. We don't just run campaigns; we build <span>enduring market authority</span> for our partners.</p>
        </div>
      </section>

      {/* Section 3: Our Philosophy & Core Values */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <div className="service-grid">
            <div className="service-card glass">
              <h3>Transparent Excellence</h3>
              <p>No black boxes. Just clear data, direct communication, and relentless optimization.</p>
            </div>
            <div className="service-card glass">
              <h3>Creative Courage</h3>
              <p>Safe marketing is invisible marketing. We push boundaries to ensure you stand out.</p>
            </div>
            <div className="service-card glass">
              <h3>Owner Mentality</h3>
              <p>We treat your budgets and your business as securely as our own.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Albany Strategy Approach */}
      <section className="section-pad section-gradient">
        <div className="container">
          <div className="contact-grid align-items-center">
            <div>
              <h2>The "Albany Strategy"</h2>
              <p className="mb-4">Our proprietary approach involves hyper-optimized structural routing—minimizing unnecessary expenditures while maximizing operational speed. Much like our founding corporate structuring, we apply brutal efficiency to every marketing dollar you spend.</p>
              <ul style={{ listStyle: 'none', color: '#aaa' }}>
                <li className="mb-2">✓ Cost Optimization Algorithms</li>
                <li className="mb-2">✓ High-velocity Testing</li>
                <li className="mb-2">✓ Aggressive Market Penetration</li>
              </ul>
            </div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80') center/cover" }}></div>
          </div>
        </div>
      </section>

      {/* Section 5: Team Culture & Office Gallery */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">Inside the Collective</h2>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80') center/cover" }}></div>
          </div>
        </div>
      </section>

      {/* Section 6: Key Milestones Timeline */}
      <section className="section-pad section-darker">
        <div className="container">
          <h2 className="section-title">Our History</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <span>2020</span>
                <h3>Agency Inception</h3>
                <p>Founded by three ex-tech executives looking to disrupt the traditional legacy agency model.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <span>2022</span>
                <h3>The $10M Milestone</h3>
                <p>Crossed $10M in managed client spend, proving the effectiveness of our proprietary growth systems.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <span>2024</span>
                <h3>Global Expansion</h3>
                <p>Opened satellite operations across London and Singapore while keeping our HQ anchored in NYC.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <span>Present</span>
                <h3>Industry Leaders</h3>
                <p>Recognized as one of the fastest-growing independent digital agencies in the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Leadership Spotlight */}
      <section className="section-pad">
        <div className="container text-center">
          <h2 className="section-title">Executive Board</h2>
          <div className="detailed-grid">
            <div className="team-profile">
              <div className="team-img" style={{ background: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h3>Michael Ross</h3>
              <p>Managing Director</p>
            </div>
            <div className="team-profile">
              <div className="team-img" style={{ background: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h3>Elena Rostova</h3>
              <p>Chief Strategy Officer</p>
            </div>
            <div className="team-profile">
              <div className="team-img" style={{ background: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h3>David Klein</h3>
              <p>Head of Digital Experience</p>
            </div>
          </div>
          <Link href="/team" className="btn-secondary mt-4">Meet the Full Team</Link>
        </div>
      </section>

      {/* Section 8: Awards */}
      <section className="marquee-wrapper section-darker">
        <div className="marquee-content" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <span className="marquee-item">🏆 Awwwards SOTD</span>
          <span className="marquee-item">⭐ AdAge Small Agency of the Year</span>
          <span className="marquee-item">🏆 CSS Design Awards</span>
          <span className="marquee-item">⭐ Webby Nominee</span>
          <span className="marquee-item">🏆 Awwwards SOTD</span>
          <span className="marquee-item">⭐ AdAge Small Agency of the Year</span>
        </div>
      </section>

      {/* Section 9: Careers */}
      <section className="section-pad">
        <div className="container text-center">
          <h2 className="mb-4">Join The Collective</h2>
          <p className="mb-6" style={{ maxWidth: '600px', margin: '0 auto 40px auto', color: '#aaa' }}>We are always looking for hungry, brilliant minds to join our ranks. View our open positions and build the future of marketing.</p>
          <a href="#" className="btn-secondary">View Open Positions</a>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="cta-global">
            <h2>Looking for an Agency Partner?</h2>
            <p>Let's build something extraordinary together.</p>
            <Link href="/contact" className="btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
