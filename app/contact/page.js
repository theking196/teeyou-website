export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We would love to hear from you</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-options">
              <div className="option-card">
                <span className="option-icon">💬</span>
                <h3>WhatsApp</h3>
                <p>Chat with us directly</p>
                <a href="https://wa.me/2340000000000" className="option-btn">Open WhatsApp</a>
              </div>

              <div className="option-card">
                <span className="option-icon">✉</span>
                <h3>Email</h3>
                <p>Send us a message</p>
                <a href="mailto:info@teeyouhair.com" className="option-btn">info@teeyouhair.com</a>
              </div>

              <div className="option-card">
                <span className="option-icon">📱</span>
                <h3>Follow Us</h3>
                <p>Stay updated</p>
                <div className="social-icons">
                  <span>📷</span>
                  <span>📘</span>
                  <span>🐦</span>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}