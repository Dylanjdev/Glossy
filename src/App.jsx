import { useState } from 'react'
import transparentLogo from './assets/TransparentLogoOptimized.webp'
import './App.css'

const Icon = ({ name, size = 22 }) => {
  const paths = {
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
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
    title: 'Complete repaint',
    text: 'For a vehicle that needs a full reset. We’ll talk through the current finish, the color you want, and the prep the job will take.',
  },
  {
    title: 'Color change',
    text: 'Ready for something different? A color change has a few more details to consider, and we’ll walk through them with you before the work starts.',
  },
  {
    title: 'Finish refresh',
    text: 'If the paint looks faded, tired, or uneven, tell us what you’re seeing. We’ll help you figure out the right next step for the car.',
  },
]

const estimateDetails = [
  'Your vehicle’s year, make, and model',
  'What the paint looks like right now',
  'The color or finish you have in mind',
  'A few clear photos if you email us',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formMessage, setFormMessage] = useState('')

  const closeMenu = () => setMenuOpen(false)

  const handleApplication = (event) => {
    const form = event.currentTarget
    if (form.action.includes('YOUR_FORM_ID')) {
      event.preventDefault()
      setFormMessage('Thanks for your interest. Online applications are still being connected, so please email your details to glossyfinishlee@gmail.com for now.')
    }
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <div className="notice-bar">
        <p>Paint jobs start at twelve hundred. Booking by appointment only.</p>
      </div>

      <header className="header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Glossy Finish Auto Painting home">
          <img src={transparentLogo} alt="Glossy Finish Auto Painting" width="800" height="533" fetchPriority="high" />
        </a>

        <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="primary-nav" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>

        <nav id="primary-nav" className={menuOpen ? 'nav nav--open' : 'nav'} aria-label="Primary navigation">
          <a href="#services" onClick={closeMenu}>What we do</a>
          <a href="#estimate" onClick={closeMenu}>Getting an estimate</a>
          <a href="#careers" onClick={closeMenu}>Work with us</a>
          <a className="nav__call" href="tel:+12766393130" onClick={closeMenu}><Icon name="phone" size={17} /> (276) 639-3130</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="top">
          <div className="hero__copy">
            <p className="kicker">Auto painting, without the runaround</p>
            <h1>Let’s make your car look like <em>yours</em> again.</h1>
            <p className="hero__intro">Tell us what you’re driving, what the paint looks like now, and what you want to change. We’ll have a real conversation about the job and what it will take.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="tel:+12766393130">Call for an estimate <Icon name="arrow" size={18} /></a>
              <a className="plain-link" href="mailto:glossyfinishlee@gmail.com?subject=Auto%20Paint%20Estimate">Or send us an email</a>
            </div>
          </div>

          <aside className="shop-card" aria-label="Glossy Finish booking information">
            <div className="shop-card__logo"><img src={transparentLogo} alt="" width="800" height="533" fetchPriority="high" /></div>
            <div className="shop-card__details">
              <p>Paint jobs from</p>
              <strong>$1,200</strong>
              <span>Final pricing depends on the vehicle, condition, prep, and finish.</span>
            </div>
            <p className="shop-card__note">Our permanent location is coming soon. Until then, give us a call and we’ll set up a time to talk.</p>
          </aside>
        </section>

        <section className="straight-talk">
          <div className="section-wrap straight-talk__inner">
            <p className="section-number">01</p>
            <div>
              <p className="kicker">A little straight talk</p>
              <h2>A good finish starts long before the first coat.</h2>
            </div>
            <div className="straight-talk__mission">
              <p>Tell us what you want from the car, and we’ll tell you what it takes to get there.</p>
              <p>With 26 years in restoration, collision, and automotive refinishing, the owner is a DuPont Certified Painter since the 1990s.</p>
            </div>
          </div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-intro">
            <p className="section-number">02</p>
            <div>
              <p className="kicker">What we do</p>
              <h2>Paint work with a clear plan.</h2>
            </div>
          </div>

          <div className="service-list">
            {services.map((service, index) => (
              <article className="service-row" key={service.title}>
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="tel:+12766393130" aria-label={`Call to ask about ${service.title}`}><Icon name="arrow" /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="estimate" id="estimate">
          <div className="section-wrap estimate__grid">
            <div className="estimate__copy">
              <p className="kicker">Before you call</p>
              <h2>Four details make the first conversation easier.</h2>
              <p>You don’t need to know paint terminology. Just share what you know about the car and what you want it to look like.</p>
              <a className="button button--dark" href="mailto:glossyfinishlee@gmail.com?subject=Auto%20Paint%20Estimate">Email the shop <Icon name="mail" size={18} /></a>
            </div>

            <ol className="detail-list">
              {estimateDetails.map((detail, index) => (
                <li key={detail}><span>{index + 1}</span><p>{detail}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="careers" id="careers">
          <div className="section-wrap careers__grid">
            <div className="careers__intro">
              <p className="section-number">03</p>
              <p className="kicker">Work with us</p>
              <h2>Care about the details?</h2>
              <p>We’re building a team of people who take pride in the work and treat the people around them well. If that sounds like you, introduce yourself.</p>
              <p className="careers__aside">Painters, prep technicians, body technicians, and shop support are welcome to apply.</p>
            </div>

            <form className="application" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onSubmit={handleApplication}>
              <div className="application__heading">
                <p>Employment application</p>
                <h3>Tell us a little about yourself.</h3>
              </div>

              <div className="form-grid">
                <label>Full name<input type="text" name="name" autoComplete="name" required /></label>
                <label>Email address<input type="email" name="email" autoComplete="email" required /></label>
                <label>Phone number<input type="tel" name="phone" autoComplete="tel" required /></label>
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
                <label>Years of experience<input type="number" name="experience" min="0" max="60" /></label>
                <label>Availability
                  <select name="availability" defaultValue="">
                    <option value="" disabled>Select availability</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Flexible</option>
                  </select>
                </label>
                <label className="form-grid__full">Portfolio or work link <span>(optional)</span><input type="url" name="portfolio" placeholder="https://" /></label>
                <label className="form-grid__full">Your experience<textarea name="message" rows="5" required placeholder="Tell us about the work you’ve done and what you’re best at."></textarea></label>
              </div>

              <input type="hidden" name="_subject" value="New Glossy Finish job application" />
              <button className="button button--primary application__submit" type="submit">Send application <Icon name="arrow" size={18} /></button>
              {formMessage && <p className="form-message" role="status">{formMessage}</p>}
            </form>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact__lead">
            <p className="kicker">Let’s talk about your car</p>
            <h2>Start with a call.</h2>
            <p>We’ll take it from there.</p>
          </div>
          <div className="contact__links">
            <a href="tel:+12766393130"><Icon name="phone" /><span><small>Phone</small><strong>(276) 639-3130</strong></span><Icon name="arrow" /></a>
            <a href="mailto:glossyfinishlee@gmail.com"><Icon name="mail" /><span><small>Email</small><strong>glossyfinishlee@gmail.com</strong></span><Icon name="arrow" /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer__inner">
          <img src={transparentLogo} alt="Glossy Finish Auto Painting" width="800" height="533" loading="lazy" decoding="async" />
          <p>Auto painting by appointment.<br />Permanent location coming soon.</p>
          <p className="footer__copyright">© {new Date().getFullYear()} Glossy Finish Auto Painting</p>
        </div>
      </footer>
    </div>
  )
}

export default App
