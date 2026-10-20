import { useState } from 'react'
import logo from './assets/Logo.webp'
import transparentLogo from './assets/TransparentLogoOptimized.png'
import './App.css'

const Icon = ({ name, size = 22 }) => {
  const paths = {
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    paint: <><path d="m14.6 3.2 6.2 6.2-9.9 9.9a3 3 0 0 1-4.2 0l-2-2a3 3 0 0 1 0-4.2z" /><path d="m12 5.8 6.2 6.2" /><path d="M4.5 19.5 3 21" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    shield: <><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3z" /><path d="m9 12 2 2 4-4" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const services = [
  {
    icon: 'paint',
    number: '01',
    title: 'Complete Paint Jobs',
    text: 'A full exterior transformation with careful prep, even coverage, and a finish made to turn heads.',
  },
  {
    icon: 'layers',
    number: '02',
    title: 'Color Changes',
    text: 'Go bolder, cleaner, or completely different with a color change tailored to your vision.',
  },
  {
    icon: 'shield',
    number: '03',
    title: 'Finish Restoration',
    text: 'Bring tired, faded paint back to life and give your vehicle the sharp presence it deserves.',
  },
]

const steps = [
  ['Talk it through', 'Call or email us with your vehicle details and the finish you have in mind.'],
  ['Plan the finish', 'We’ll review the scope, color direction, prep needs, and pricing with you.'],
  ['Make it glossy', 'Your vehicle gets the focused attention needed for a clean, standout result.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formMessage, setFormMessage] = useState('')

  const closeMenu = () => setMenuOpen(false)

  const handleApplication = (event) => {
    const form = event.currentTarget
    if (form.action.includes('YOUR_FORM_ID')) {
      event.preventDefault()
      setFormMessage('Thanks for your interest! Online applications are being connected now. Please email your details to glossyfinishlee@gmail.com in the meantime.')
    }
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <div className="offer-bar">
        <p><strong>All paint jobs starting at $1,200</strong><span>Limited booking availability</span></p>
        <a href="tel:+12766393130">Get your estimate <Icon name="arrow" size={17} /></a>
      </div>

      <header className="header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Glossy Finish Auto Painting home">
          <img src={transparentLogo} alt="Glossy Finish Auto Painting" />
        </a>

        <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="primary-nav" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>

        <nav id="primary-nav" className={menuOpen ? 'nav nav--open' : 'nav'} aria-label="Primary navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>Our process</a>
          <a href="#careers" onClick={closeMenu}>Careers</a>
          <a className="nav__call" href="tel:+12766393130" onClick={closeMenu}><Icon name="phone" size={18} /> (276) 639-3130</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero__image" aria-hidden="true">
            <img src={logo} alt="" />
            <div className="hero__sheen" />
          </div>
          <div className="hero__content">
            <div className="eyebrow"><span /> Premium auto painting</div>
            <h1>The finish your car <em>deserves.</em></h1>
            <p>Standout color. Glossy results. Straightforward service. We’re here to make your vehicle look its absolute best.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="tel:+12766393130">Call for an estimate <Icon name="arrow" size={19} /></a>
              <a className="button button--ghost" href="#services">Explore our work</a>
            </div>
            <div className="hero__note">
              <span className="pulse" />
              <p><strong>Booking by appointment</strong>Our physical location is coming soon.</p>
            </div>
          </div>
          <div className="hero__price" aria-label="Paint jobs from twelve hundred dollars">
            <span>Paint jobs</span>
            <strong>From $1,200</strong>
          </div>
        </section>

        <section className="intro section-wrap">
          <div className="intro__label"><span>Built for the bold</span></div>
          <div className="intro__copy">
            <h2>The best paint shop around—without the runaround.</h2>
            <p>Glossy Finish Auto Painting is built around one thing: giving your vehicle a finish you’ll be proud to drive. From fresh color to full transformations, we bring focused care and a sharp eye to every project.</p>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span /> What we do</div>
                <h2>Fresh paint.<br /><em>Serious presence.</em></h2>
              </div>
              <p>Every great finish starts with a clear plan and careful preparation. Tell us what you’re driving and where you want to take it.</p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card__top">
                    <span className="service-card__icon"><Icon name={service.icon} size={28} /></span>
                    <span className="service-card__number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="tel:+12766393130">Ask about this service <Icon name="arrow" size={17} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process section-wrap" id="process">
          <div className="process__visual">
            <img src={transparentLogo} alt="Glossy Finish Auto Painting logo" />
            <div className="process__stamp"><span>Glossy</span><strong>Finish</strong><small>Auto Painting</small></div>
          </div>
          <div className="process__content">
            <div className="eyebrow"><span /> How it works</div>
            <h2>Your next finish starts with a conversation.</h2>
            <div className="step-list">
              {steps.map(([title, text], index) => (
                <div className="step" key={title}>
                  <span className="step__number">0{index + 1}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
            <a className="text-link" href="mailto:glossyfinishlee@gmail.com?subject=Auto%20Paint%20Estimate">Start your estimate by email <Icon name="arrow" size={18} /></a>
          </div>
        </section>

        <section className="careers" id="careers">
          <div className="section-wrap careers__grid">
            <div className="careers__intro">
              <div className="eyebrow eyebrow--light"><span /> Join the shop</div>
              <h2>Good work.<br /><em>Great finish.</em></h2>
              <p>We’re building a team that cares about the details. If you take pride in your craft, work well with others, and want to help build something special, we want to hear from you.</p>
              <div className="careers__points">
                <span><Icon name="shield" size={19} /> Craft-first culture</span>
                <span><Icon name="paint" size={19} /> Hands-on work</span>
                <span><Icon name="calendar" size={19} /> Growing team</span>
              </div>
            </div>

            <form className="application" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onSubmit={handleApplication}>
              <div className="application__heading">
                <div><span>Employment application</span><h3>Tell us about yourself.</h3></div>
                <span className="application__mark">GF</span>
              </div>

              <div className="form-grid">
                <label>Full name<input type="text" name="name" autoComplete="name" required placeholder="Your full name" /></label>
                <label>Email address<input type="email" name="email" autoComplete="email" required placeholder="you@email.com" /></label>
                <label>Phone number<input type="tel" name="phone" autoComplete="tel" required placeholder="(000) 000-0000" /></label>
                <label>Position of interest
                  <select name="position" defaultValue="" required>
                    <option value="" disabled>Select a role</option>
                    <option>Auto painter</option>
                    <option>Paint prep technician</option>
                    <option>Body technician</option>
                    <option>Shop support</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>Years of experience<input type="number" name="experience" min="0" max="60" placeholder="0" /></label>
                <label>Availability
                  <select name="availability" defaultValue="">
                    <option value="" disabled>Select availability</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Flexible</option>
                  </select>
                </label>
                <label className="form-grid__full">Portfolio or work link <span>(optional)</span><input type="url" name="portfolio" placeholder="https://" /></label>
                <label className="form-grid__full">Tell us about your experience<textarea name="message" rows="5" required placeholder="Share your background, specialties, and why you’d be a good fit..."></textarea></label>
              </div>

              <input type="hidden" name="_subject" value="New Glossy Finish job application" />
              <button className="button button--primary application__submit" type="submit">Submit application <Icon name="arrow" size={19} /></button>
              <p className="application__privacy">By submitting, you agree that Glossy Finish may contact you about employment opportunities.</p>
              {formMessage && <p className="form-message" role="status">{formMessage}</p>}
            </form>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact__copy">
            <div className="eyebrow"><span /> Let’s talk paint</div>
            <h2>Ready for a better finish?</h2>
            <p>Call or email us to discuss your vehicle, your vision, and next available appointment.</p>
          </div>
          <div className="contact__links">
            <a href="tel:+12766393130"><span><Icon name="phone" /></span><div><small>Call us</small><strong>(276) 639-3130</strong></div><Icon name="arrow" /></a>
            <a href="mailto:glossyfinishlee@gmail.com"><span><Icon name="mail" /></span><div><small>Email us</small><strong>glossyfinishlee@gmail.com</strong></div><Icon name="arrow" /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__brand"><img src={transparentLogo} alt="Glossy Finish Auto Painting" /><p>Premium auto painting. Appointments and estimates available by phone or email.</p></div>
        <div className="footer__nav"><strong>Navigate</strong><a href="#services">Services</a><a href="#process">Our process</a><a href="#careers">Careers</a></div>
        <div className="footer__contact"><strong>Contact</strong><a href="tel:+12766393130">(276) 639-3130</a><a href="mailto:glossyfinishlee@gmail.com">glossyfinishlee@gmail.com</a><span>Physical location coming soon</span></div>
        <div className="footer__bottom"><span>© {new Date().getFullYear()} Glossy Finish Auto Painting</span><span>Built to shine.</span></div>
      </footer>
    </div>
  )
}

export default App
