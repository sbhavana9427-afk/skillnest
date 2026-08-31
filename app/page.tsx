'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Menu, MoveRight, Play, X } from 'lucide-react'

const categories = [
  ['01', 'Web development', 'Build the web from first principles.', 'HTML, CSS, JavaScript, React'],
  ['02', 'AI & machine learning', 'Make intelligent systems useful.', 'Python, models, data, prompts'],
  ['03', 'Data science', 'Turn messy data into clear decisions.', 'Analysis, visualization, statistics'],
  ['04', 'Product design', 'Shape digital experiences people remember.', 'Research, systems, prototyping'],
  ['05', 'Cloud & infrastructure', 'Ship with confidence at any scale.', 'Cloud, DevOps, architecture'],
  ['06', 'Cybersecurity', 'Build a safer digital world.', 'Networks, defense, risk, privacy'],
]

const resources = [
  ['HTML & CSS basics', 'A practical path from your first tag to a responsive, accessible site.', 'WEB / 4 HOURS'],
  ['Intro to machine learning', 'Understand the ideas behind models, training, and useful predictions.', 'AI / 6 HOURS'],
  ['Python for data science', 'Use Python to ask better questions of the data in front of you.', 'DATA / 5 HOURS'],
]

const steps = [
  ['Choose a direction', 'Start with a field that feels useful, exciting, or just a little intimidating.'],
  ['Follow the signal', 'Learn through a focused mix of clear explanations, hands-on practice, and trusted links.'],
  ['Make something real', 'Put your new skill to work. Small projects become proof that you can keep going.'],
]

function Constellation() {
  const dots = Array.from({ length: 42 }, (_, i) => ({
    x: 8 + ((i * 47) % 88),
    y: 8 + ((i * 71) % 84),
    r: i % 9 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  }))
  return (
    <div className="constellation" aria-hidden="true">
      <svg viewBox="0 0 800 520" preserveAspectRatio="none">
        <g className="constellation-lines">
          {dots.slice(0, 25).map((dot, i) => {
            const next = dots[(i + 4) % dots.length]
            return <line key={i} x1={`${dot.x}%`} y1={`${dot.y}%`} x2={`${next.x}%`} y2={`${next.y}%`} />
          })}
        </g>
        <g className="constellation-dots">
          {dots.map((dot, i) => <circle key={i} cx={`${dot.x}%`} cy={`${dot.y}%`} r={dot.r} />)}
        </g>
        <circle className="signal-ring" cx="76%" cy="32%" r="42" />
        <circle className="signal-core" cx="76%" cy="32%" r="5" />
      </svg>
      <span className="signal-label">YOUR NEXT SKILL</span>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function closeMenu() { setMenuOpen(false) }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}>Skill<span>Nest</span></a>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
          <a href="#categories" onClick={closeMenu}>Explore</a>
          <a href="#resources" onClick={closeMenu}>Resources</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Get started <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <Constellation />
        <div className="hero-content reveal">
          <p className="eyebrow">A learning system for curious people</p>
          <h1>Build skills<br /><em>that move you.</em></h1>
          <p className="hero-copy">SkillNest is a focused starting point for learning the tools, ideas, and disciplines shaping what comes next.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#categories">Find your direction <MoveRight size={17} /></a>
            <a className="text-link" href="#about"><span className="play-icon"><Play size={11} fill="currentColor" /></span> How it works</a>
          </div>
        </div>
        <div className="hero-meta"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
      </section>

      <section id="categories" className="section categories-section">
        <div className="section-heading reveal"><p className="eyebrow">01 / Start here</p><h2>Find the thread<br /><em>worth pulling.</em></h2><p className="section-intro">You don&apos;t need another endless list. You need a clear next step.</p></div>
        <div className="category-grid">
          {categories.map(([number, title, copy, tags]) => <a className="category-card reveal" href="#resources" key={title}><span className="card-number">{number}</span><h3>{title}</h3><p>{copy}</p><span className="card-tags">{tags}</span><ArrowUpRight className="card-arrow" size={20} /></a>)}
        </div>
      </section>

      <section id="resources" className="section resources-section">
        <div className="split-heading reveal"><div><p className="eyebrow">02 / Curated signal</p><h2>Less noise.<br /><em>More momentum.</em></h2></div><a className="text-link" href="#contact">View all resources <MoveRight size={17} /></a></div>
        <div className="resource-list">{resources.map(([title, copy, meta], i) => <a className="resource-row reveal" href="#contact" key={title}><span className="resource-index">0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="resource-meta">{meta}</span><ArrowUpRight size={20} /></a>)}</div>
      </section>

      <section id="about" className="section about-section"><div className="about-label eyebrow reveal">03 / The method</div><div className="about-content"><h2 className="reveal">Learning should feel<br /><em>like opening a door.</em></h2><p className="large-copy reveal">We built SkillNest around a simple belief: the best learning experiences create just enough structure to help you move, then get out of your way.</p><div className="step-list">{steps.map(([title, copy], i) => <div className="step reveal" key={title}><span>{`0${i + 1}`}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>

      <section id="contact" className="contact-section"><div className="contact-inner"><p className="eyebrow">04 / Keep in touch</p><h2 className="reveal">Your next idea<br /><em>starts here.</em></h2><p>Get occasional notes on useful resources, new paths, and the practice of getting better.</p>{sent ? <div className="success-message"><Check size={20} /> You&apos;re on the list. See you soon.</div> : <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" required placeholder="Your email address" /><button className="button button-lime" type="submit">Sign me up <ArrowUpRight size={16} /></button></form>}<small>No noise. Just a thoughtful note when there&apos;s something worth sharing.</small></div></section>

      <footer className="site-footer"><a className="wordmark" href="#home">Skill<span>Nest</span></a><p>Learn deliberately. Make it useful.</p><p>© 2026 SkillNest</p></footer>
    </main>
  )
}
