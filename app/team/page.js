import Link from 'next/link'

export const metadata = {
  title: 'Our Team | NYC Marketing Collective',
}

export default function TeamPage() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="fade-in">The Strategy <span>Syndicate.</span></h1>
          <p className="fade-in">Poached from the world's most aggressive startups and legacy agencies.</p>
        </div>
      </header>

      {/* Section 2: Executive Leadership */}
      <section className="section-pad">
        <div className="container text-center">
          <h2 className="section-title">Executive Board</h2>
          <div className="detailed-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="team-profile">
              <div className="team-img" style={{ background: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h3>Michael Ross</h3>
              <p style={{ color: 'var(--primary-color)' }}>Managing Director</p>
              <div className="team-socials">
                <a href="#">LinkedIn</a> | <a href="#">X</a>
              </div>
            </div>
            <div className="team-profile">
              <div className="team-img" style={{ background: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h3>Elena Rostova</h3>
              <p style={{ color: 'var(--primary-color)' }}>Chief Strategy Officer</p>
              <div className="team-socials">
                <a href="#">LinkedIn</a> | <a href="#">X</a>
              </div>
            </div>
            <div className="team-profile">
              <div className="team-img" style={{ background: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h3>David Klein</h3>
              <p style={{ color: 'var(--primary-color)' }}>Head of Digital Experience</p>
              <div className="team-socials">
                <a href="#">LinkedIn</a> | <a href="#">X</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Strategy Team */}
      <section className="section-pad section-darker">
        <div className="container text-center">
          <h2 className="section-title">Growth & Strategy Divison</h2>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="team-profile">
              <div className="team-img" style={{ width: '150px', height: '150px', background: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h4 className="mt-2 text-light">James R.</h4>
              <p style={{ fontSize: '0.8rem', color: '#aaa' }}>VP Media Buying</p>
            </div>
            <div className="team-profile">
              <div className="team-img" style={{ width: '150px', height: '150px', background: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h4 className="mt-2 text-light">Anita M.</h4>
              <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Data Scientist</p>
            </div>
            <div className="team-profile">
              <div className="team-img" style={{ width: '150px', height: '150px', background: "url('https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h4 className="mt-2 text-light">Greg P.</h4>
              <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Conversion Specialist</p>
            </div>
            <div className="team-profile">
              <div className="team-img" style={{ width: '150px', height: '150px', background: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h4 className="mt-2 text-light">Sarah K.</h4>
              <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Account Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Creative Team */}
      <section className="section-pad section-gradient">
        <div className="container text-center">
          <h2 className="section-title">Studios & Arts Divison</h2>
          <p className="mb-6" style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto 40px auto' }}>Award-winning designers, copywriters, and video producers.</p>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="team-profile">
              <div className="team-img" style={{ background: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h4>Lisa O.</h4>
              <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Art Director</p>
            </div>
            <div className="team-profile">
              <div className="team-img" style={{ background: "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h4>Tom V.</h4>
              <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Lead UI Architect</p>
            </div>
            <div className="team-profile">
              <div className="team-img" style={{ background: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h4>Sam C.</h4>
              <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Copy Chief</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Tech & SEO */}
      <section className="section-pad">
        <div className="container text-center">
          <h2 className="section-title">Technology & Infrastructure</h2>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="team-profile">
              <div className="team-img" style={{ background: "url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h4>Omar T.</h4>
              <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Technical SEO Lead</p>
            </div>
            <div className="team-profile">
              <div className="team-img" style={{ background: "url('https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h4>Kenji W.</h4>
              <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Lead JS Developer</p>
            </div>
            <div className="team-profile">
              <div className="team-img" style={{ background: "url('https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?auto=format&fit=crop&q=80') top/cover" }}></div>
              <h4>Rachel F.</h4>
              <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Infra Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Mentors Marquee */}
      <section className="marquee-wrapper section-darker">
        <div className="marquee-content">
          <span className="marquee-item">Advised by Ex-Google VPs</span>
          <span className="marquee-item">Mentorship from YC Alumni</span>
          <span className="marquee-item">Backed by Venture Partners</span>
          <span className="marquee-item">Advised by Ex-Google VPs</span>
        </div>
      </section>

      {/* Section 7: The Code */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">The Operator's Code</h2>
          <div className="detailed-grid">
            <div className="service-card glass">
              <h3>1. Speed is a Feature</h3>
              <p>We move faster than internal teams ever could.</p>
            </div>
            <div className="service-card glass">
              <h3>2. Data Wins Arguments</h3>
              <p>Opinions are irrelevant. We test, and we let the math decide.</p>
            </div>
            <div className="service-card glass">
              <h3>3. Extreme Ownership</h3>
              <p>No excuses. If a campaign fails, we own it and fix it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Life at HQ */}
      <section className="section-pad section-gradient">
        <div className="container text-center">
          <h2 className="section-title">Life at HQ</h2>
          <div className="gallery-grid">
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80') center/cover" }}></div>
            <div className="gallery-item" style={{ background: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80') center/cover" }}></div>
          </div>
        </div>
      </section>

      {/* Section 9: Commitment */}
      <section className="section-pad section-darker">
        <div className="container text-center">
          <h2 className="mb-4">Our Commitment</h2>
          <p className="mission-statement" style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>Great ideas don't care about background, geography, or pedigree. We hire strictly based on extreme competence and a hunger to win.</p>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="cta-global">
            <h2>Want to Build With Us?</h2>
            <p>We are always hiring 10x talent.</p>
            <a href="#" className="btn-primary">View Open Positions</a>
          </div>
        </div>
      </section>
    </main>
  )
}
