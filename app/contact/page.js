export default function Contact() {
  return (
    <main className="contact-page">
      <section className="hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with Teeyou Hair</p>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="grid">
            <div className="card">
              <h3>WhatsApp</h3>
              <p>Chat with us</p>
              <a href="https://wa.me/2340000000000">Open WhatsApp</a>
            </div>
            <div className="card">
              <h3>Email</h3>
              <p>Send us a message</p>
              <a href="mailto:info@teeyouhair.com">info@teeyouhair.com</a>
            </div>
            <div className="card">
              <h3>Location</h3>
              <p>Nigeria</p>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}