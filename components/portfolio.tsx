'use client'

import { useState, type FormEvent } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Code2, GraduationCap, Menu, Sparkles, X } from 'lucide-react'

const navItems = [
  ['Home', '#home'], ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact'],
]

const skills = ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design', 'GitHub', 'Basic MS Office']

const projects = [
  { number: '01', title: 'Dental Clinic Website', category: 'WEB DESIGN · RESPONSIVE', description: 'A welcoming online presence for a dental practice, designed to make essential information easy to find.', visual: 'dental' },
  { number: '02', title: 'Personal Portfolio', category: 'PORTFOLIO · FRONTEND', description: 'A thoughtful portfolio concept that brings personal work, skills, and story together in one place.', visual: 'portfolio' },
  { number: '03', title: 'Business Website', category: 'BUSINESS · WEB DESIGN', description: 'A clear, modern website concept that helps a growing business share what it does with confidence.', visual: 'business' },
]

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'ready'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormState('ready')
    event.currentTarget.reset()
  }

  return (
    <main>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" aria-label="Prince Kalla, home"><span className="brand-mark">P<span>.</span></span><span className="brand-name">PRINCE KALLA</span></a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={14} /></a>
          </nav>
        </div>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-content">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE TO LEARN & COLLABORATE</div>
          <h1>Hi, I&apos;m<br /><span>Prince Kalla.</span></h1>
          <p className="hero-tagline">Building my future, one website at a time.</p>
          <p className="hero-role">Aspiring Web Developer <span className="role-rule" /></p>
          <p className="hero-description">I enjoy building modern, responsive and user-friendly websites.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View My Projects <ArrowRight size={16} /></a><a className="button button-quiet" href="#contact">Contact Me <ArrowUpRight size={16} /></a></div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </div>
        <div className="hero-art" aria-label="Abstract purple geometric portrait illustration" role="img">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-grid" />
          <div className="art-frame"><div className="art-monogram">P<span>.</span></div><div className="art-caption"><span>DESIGNING WITH</span><strong>curiosity<span>.</span></strong></div></div>
          <div className="art-stamp"><Sparkles size={15} /><span>BUILD<br />& LEARN</span></div>
          <span className="art-coordinate">26° 12&apos; N — 91° 44&apos; E</span>
        </div>
        <div className="hero-index"><span>01</span><span className="index-line" /><span>05</span></div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-heading"><span className="section-kicker">A LITTLE ABOUT ME</span><span className="section-number">01 / 04</span></div>
        <div className="about-grid">
          <h2>Curious by nature.<br /><span>Building for the web.</span></h2>
          <div className="about-copy"><p>I&apos;m a Bachelor of Computer Applications student with a growing interest in web development and technology. I enjoy turning ideas into clean, useful digital experiences.</p><p>Every project is a chance to learn something new, solve a small problem, and make the web a little easier to use.</p><a className="text-link" href="#skills">A few things I&apos;m learning <ArrowDownRight size={15} /></a></div>
        </div>
        <div className="about-note"><span className="note-icon"><Code2 size={17} /></span><span>Curious mind, code in progress.</span><span className="note-line" /><span className="note-index">EST. 2026</span></div>
      </section>

      <section className="skills section-shell" id="skills">
        <div className="section-heading"><span className="section-kicker">TOOLS IN MY TOOLKIT</span><span className="section-number">02 / 04</span></div>
        <div className="skills-layout"><div><h2>Learning the<br /><span>building blocks.</span></h2><p className="section-intro">The foundations I&apos;m working with as I grow as a developer.</p></div><div className="skill-list">{skills.map((skill, index) => <div className="skill-row" key={skill}><span className="skill-number">0{index + 1}</span><span>{skill}</span><ArrowUpRight size={15} /></div>)}</div></div>
      </section>

      <section className="projects section-shell" id="projects">
        <div className="section-heading"><span className="section-kicker">SELECTED CONCEPTS</span><span className="section-number">03 / 04</span></div>
        <div className="projects-heading"><h2>Made to be <span>useful.</span></h2><p>A few project concepts exploring thoughtful, accessible web experiences.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}>
          <div className={`project-visual ${project.visual}`} aria-hidden="true"><div className="mock-browser"><div className="browser-bar"><span /><span /><span /><i>✳</i></div>{project.visual === 'dental' && <div className="dental-screen"><div className="mock-nav"><b>smile<span>.</span></b><span>ABOUT　 SERVICES　 CONTACT</span></div><div className="dental-copy"><small>YOUR SMILE, OUR CARE</small><strong>Feel good<br />about your smile.</strong><i>✳</i></div><div className="dental-bottom"><span>Gentle care for every smile.</span><b>BOOK A VISIT ↗</b></div></div>}{project.visual === 'portfolio' && <div className="portfolio-screen"><div className="portfolio-sidebar"><b>PK.</b><span>—</span><span>01</span><span>02</span></div><div className="portfolio-copy"><small>HELLO, I&apos;M A CREATIVE</small><strong>Ideas into<br /><em>experience.</em></strong><span>DESIGNER & DEVELOPER</span></div><div className="portfolio-orb" /></div>}{project.visual === 'business' && <div className="business-screen"><div className="business-nav"><b>FORM<span>&</span>FIELD</b><span>STUDIO　 ABOUT　 CONTACT</span></div><div className="business-copy"><small>INDEPENDENT CREATIVE STUDIO</small><strong>Good work<br />starts here<span>.</span></strong><i>↗</i></div><div className="business-footer"><span>STRATEGY · DESIGN · DIGITAL</span><span>EST. 2024</span></div></div>}</div><span className="visual-index">{project.number} — SELECTED WORK</span></div>
          <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div><h3>{project.title}</h3><p>{project.description}</p><a className="project-link" href="#contact" aria-label={`Discuss a project like ${project.title}`}>View Project <ArrowUpRight size={15} /></a>
        </article>)}</div>
      </section>

      <section className="education section-shell" id="education"><div className="education-inner"><div className="education-icon"><GraduationCap size={22} /></div><div><span className="section-kicker">CURRENTLY STUDYING</span><h2>Bachelor of Computer Applications</h2><p>Currently pursuing BCA</p></div><span className="education-tag">EDUCATION</span></div></section>

      <section className="contact section-shell" id="contact">
        <div className="section-heading"><span className="section-kicker">HAVE A PROJECT IN MIND?</span><span className="section-number">04 / 04</span></div>
        <div className="contact-grid"><div className="contact-copy"><h2>Let&apos;s make<br />something <span>good.</span></h2><p>I&apos;m always happy to connect, learn, and talk about ideas for the web.</p><a className="email-link" href="mailto:">Say hello <ArrowUpRight size={16} /></a><div className="social-links"><a href="https://github.com/" target="_blank" rel="noreferrer"><span className="social-glyph">GH</span> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span className="social-glyph">in</span> LinkedIn <ArrowUpRight size={13} /></a></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="Name" required autoComplete="name" /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" /><label htmlFor="message">Your message</label><textarea id="message" name="message" placeholder="Tell me a little about it..." rows={3} required /><button type="submit" className="button button-primary form-submit">Send a message <ArrowRight size={16} /></button>{formState === 'ready' && <p className="form-notice" role="status">Thanks for reaching out. The contact form is a visual demo and isn&apos;t connected to message delivery yet.</p>}</form>
        </div>
      </section>
      <footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark">P<span>.</span></span><span className="brand-name">PRINCE KALLA</span></a><span>DESIGNED WITH CURIOSITY · 2026</span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={13} /></a></footer>
    </main>
  )
}
