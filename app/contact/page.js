'use client'

import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Left - Contact Options */}
            <div className="contact-options">
              <div className="option-card whatsapp">
                <span className="option-icon">💬</span>
                <h3>WhatsApp</h3>
                <p>Chat with us directly</p>
                <a href="https://wa.me/2340000000000" className="option-btn">Open WhatsApp</a>
              </div>

              <div className="option-card email">
                <span className="option-icon">✉️</span>
                <h3>Email</h3>
                <p>Send us a message</p>
                <a href="mailto:info@teeyouhair.com" className="option-btn">info@teeyouhair.com</a>
              </div>

              <div className="option-card social">
                <span className="option-icon">📱</span>
                <h3>Follow Us</h3>
                <p>Stay updated</p>
                <div className="social-icons">
                  <a href="#" className="social-btn">📷</a>
                  <a href="#" className="social-btn">📘</a>
                  <a href="#" className="social-btn">🐦</a>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              
              {sent ? (
                <div className="success-message">
                  <span>✓</span>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                  <button onClick={() => setSent(false)} className="btn-resend">Send Another</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
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
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}