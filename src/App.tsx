import React from 'react';
import { GripVertical } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* Glow background */}
      <div className="purple-glow" />

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <a href="#" className="logo">Troopod</a>
          <div className="header-nav">BUILD ASSIGNMENT</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="badge">WE'RE HIRING</div>
        
        <h1 className="hero-title">
          <span className="gradient-text">AI</span> Product<br />
          Engineer
        </h1>
        
        <p className="hero-description">
          You own client projects end to end: spec, build, QA, deploy. No team to<br />
          manage, no tickets to wait on. Our AI agents take the volume work, so you<br />
          run several projects at once.
        </p>

        <div className="tags-container">
          <div className="tag">SHOPIFY & WEB</div>
          <div className="tag">PORTFOLIO OVER YEARS</div>
          <div className="tag">MEANINGFUL ESOPS</div>
        </div>
      </main>

      <hr className="section-divider" />

      {/* Second Section */}
      <section className="secondary-content">
        <div className="badge">WHO WE ARE</div>
        <h2 className="section-title">An AI-native website growth partner</h2>
        <div className="section-description">
          <p>We are website growth partners for 100+ DTC brands across the globe: Durex, Tanishq, Bombay Shaving Company, Tata and Essor Group among them. We're scaling to 500 clients, which means building delivery infrastructure that holds up at that volume.</p>
          <p>This role is a big part of how that gets built.</p>
          <p>You'll also be working with Troopod's proprietary ecommerce-tuned AI agents, which take on a lot of the dev and QA volume work. That's what makes it possible for one person to own multiple projects in parallel, end to end.</p>
        </div>

        <div className="paired-list-grid">
          <div className="column-header">WHAT YOU'LL OWN</div>
          <div className="column-header">WHAT WE'RE LOOKING FOR</div>

          <div className="grid-list-item">
            <strong>Client projects end to end.</strong> Spec, build, QA, deploy, handoff. One person accountable from brief to live site.
          </div>
          <div className="grid-list-item">
            <strong>Portfolio over years.</strong> Show us live builds you shipped yourself.
          </div>

          <div className="grid-list-item">
            <strong>The spec before the code.</strong> Precise enough that an agent can build from it and you can verify against it.
          </div>
          <div className="grid-list-item">
            <strong>You write production frontend daily.</strong> HTML, CSS, JavaScript, Liquid. Not reviewing it. Writing it.
          </div>

          <div className="grid-list-item">
            <strong>Production Shopify and frontend code, daily.</strong>
          </div>
          <div className="grid-list-item">
            <strong>Deep Shopify knowledge.</strong> Sections, metafields, APIs, integrations, checkout logic.
          </div>

          <div className="grid-list-item">
            <strong>The AI workflow itself.</strong> What gets delegated, what context agents need, where they break. Every project should make the next one faster.
          </div>
          <div className="grid-list-item">
            <strong>You build with AI seriously.</strong> Agentic tools, not autocomplete. You know where they break and how you catch it.
          </div>

          <div className="grid-list-item">
            <strong>Your own QA and deployment.</strong> Nobody downstream is catching your misses.
          </div>
          <div className="grid-list-item">
            <strong>Rapid pace.</strong> Multi-client, tight turnarounds. It's a different job from product work.
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="cta-bar">
        <div className="cta-content">
          <p className="cta-text">
            So we start with a build,<br />
            <span className="text-purple">not a CV screen.</span>
          </p>
        </div>
      </section>

      {/* Assignment Section */}
      <section className="assignment-section">
        <div className="badge text-gray">THE ASSIGNMENT</div>
        <h2 className="section-title">Take a prototype homepage live on Shopify</h2>
        
        <div className="section-description">
          <p>
            The file below, <code className="inline-code">purelane-homepage.html</code>, is a complete homepage for a plant-based homecare brand, built fast as a design prototype. It is not clean code and it was never written with Shopify in mind.
          </p>
          <p>
            Turn it into production sections a merchant's marketing team can run without a developer.
          </p>
        </div>

        <div className="download-card">
          <div className="file-info">
            <div className="file-name">purelane-homepage.html</div>
            <div className="file-meta">148 KB &bull; single file, no dependencies</div>
          </div>
          <button className="download-button">Download the file</button>
        </div>
      </section>

      {/* Scope Section */}
      <section className="scope-section">
        <div className="badge text-gray">SCOPE</div>
        <h2 className="section-title">Build these five sections</h2>
        
        <div className="scope-card">
          <div className="scope-header">
            <span className="dot"></span>
            TEMPLATE SECTIONS
          </div>
          <div className="scope-list">
            {[
              { id: '01', title: 'Hero', tag: 'section.hero' },
              { id: '02', title: 'Shop / product grid', tag: '#shop' },
              { id: '03', title: 'Best-selling combos', tag: '#combos' },
              { id: '04', title: 'Bundles', tag: '#bundles' },
              { id: '05', title: 'Reviews rail', tag: '#reviews' },
            ].map((item) => (
              <div className="scope-row" key={item.id}>
                <div className="row-left">
                  <GripVertical size={18} className="grip-icon" />
                  <span className="row-id">{item.id}</span>
                  <span className="row-title">{item.title}</span>
                </div>
                <div className="row-right">
                  {item.tag}
                </div>
              </div>
            ))}
          </div>
          <div className="scope-footer">
            + Everything else in the file is bonus. Get these five right first.
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section className="setup-section">
        <div className="badge text-gray">SETUP</div>
        <h2 className="section-title">Your own store</h2>
        
        <div className="section-description">
          <p>
            A Shopify Partner account and a development store, both free, running a clean install of Dawn. Dawn is Shopify's free default theme, the one new stores start on. Build on stock Dawn rather than a premium theme, so we're looking at your work and not somebody else's section framework.
          </p>
          <p>
            Seed the store with at least eight products that suit the brand, including one sold out, one with no image, and one with a very long title.
          </p>
        </div>
      </section>

      {/* Bar Section */}
      <section className="bar-section">
        <div className="badge text-gray">THE BAR</div>
        <h2 className="section-title">What we're looking at</h2>

        <div className="criteria-grid">
          <div className="criteria-item">
            <h3>Pixel-accurate</h3>
            <p>Match the file exactly: layout, spacing, type, colour and behaviour, at every width from 375px up. This is a build, not a redesign.</p>
          </div>
          <div className="criteria-item">
            <h3>Merchant-editable</h3>
            <p>Nothing hardcoded that a marketing team would want to change.</p>
          </div>
          <div className="criteria-item">
            <h3>Real Shopify data</h3>
            <p>Products, prices, and content come from the platform, not your Liquid. Where a native field doesn't exist, solve it properly.</p>
          </div>
          <div className="criteria-item">
            <h3>Reusable</h3>
            <p>Several sections render similar cards. Build accordingly.</p>
          </div>
          <div className="criteria-item">
            <h3>Survives the theme editor</h3>
            <p>Adding, removing, reordering, and reconfiguring should never break anything, including the animations.</p>
          </div>
          <div className="criteria-item">
            <h3>Fast</h3>
            <p>Core Web Vitals are what we get paid to move. Treat performance as a requirement, not a cleanup task.</p>
          </div>
          <div className="criteria-item">
            <h3>Accessible</h3>
            <p>Keyboard, focus states, contrast, reduced motion.</p>
          </div>
          <div className="criteria-item">
            <h3>Clean and reviewable</h3>
            <p>Code and commit history both.</p>
          </div>
        </div>

        <div className="section-description mt-bar">
          <p>
            <strong>The design is the spec. The code is not.</strong> Reproduce the visual output exactly. But where the underlying HTML or CSS is wrong for production, semantics, accessibility, performance, breakpoint logic, fix it and tell us what you changed. Rebuilding it to look how you'd have designed it is an automatic no.
          </p>
          <p>
            Use AI however you normally would. We build with agents here.
          </p>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="deliverables-section">
        <div className="badge text-gray">DELIVERABLES</div>
        <h2 className="section-title">Send us</h2>

        <div className="deliverables-list">
          <div className="deliverable-item">
            <span className="deliverable-num">01</span>
            <span className="deliverable-text">
              <strong>Dev store URL and password</strong>
            </span>
          </div>
          <div className="deliverable-item">
            <span className="deliverable-num">02</span>
            <span className="deliverable-text">
              <strong>GitHub repo</strong>, commit history intact
            </span>
          </div>
          <div className="deliverable-item">
            <span className="deliverable-num">03</span>
            <span className="deliverable-text">
              <strong>Any metafield or metaobject definitions</strong> you created
            </span>
          </div>
          <div className="deliverable-item">
            <span className="deliverable-num">04</span>
            <span className="deliverable-text">
              <strong>Short notes on the build.</strong> What you'd flag about the original file, what you changed in the code and why, what you'd do with more time
            </span>
          </div>
          <div className="deliverable-item">
            <span className="deliverable-num">05</span>
            <span className="deliverable-text">
              <strong>Short notes on your AI workflow.</strong> What you delegated, where it failed you, what you'd systematise if you had to do twenty more of these
            </span>
          </div>
        </div>

        <div className="section-description mt-5">
          <p>
            Send everything to <a href="mailto:nj@troopod.io" className="text-purple underline">nj@troopod.io</a>, with the subject line <code className="inline-code">AI Product Engineer</code><br /><code className="inline-code">Assignment - Manan Gakkhar</code>.
          </p>
        </div>
      </section>

      {/* Deadline Section */}
      <section className="deadline-section">
        <div className="deadline-card">
          <div className="badge text-white-alpha">DEADLINE</div>
          <h2 className="deadline-title">2 days from the email that brought you here</h2>
          <p className="deadline-desc">
            We don't expect all five finished. We're reading what you chose to do properly and what you chose to cut. Send what you have and be straight with us about the gaps.
          </p>
        </div>
        <p className="submission-note">
          We review every submission. Shortlisted candidates go through to a technical<br />interview round.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">Troopod</div>
        <div className="footer-contact">
          For any questions, email <a href="mailto:nj@troopod.io" className="text-purple">nj@troopod.io</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
