export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Teeyou Hair</h1>
          <p>Where beauty meets craftsmanship</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="about-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Our Story</span>
              <h2>Crafted with Love in Nigeria</h2>
              <p>
                Teeyou Hair was born from a simple vision — to help every woman feel confident, beautiful, and empowered. 
                What started as a small workshop in Lagos has grown into a trusted name in premium wigs and handcrafted hats.
              </p>
              <p>
                We believe that every strand of hair tells a story. Our skilled artisans pour their heart into each piece, 
                ensuring that you don't just wear a wig — you wear confidence.
              </p>
              <p>
                Made in Nigeria, worn worldwide. That's not just our tagline — it's our promise.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <span className="section-label">Our Mission</span>
            <h2>To Empower Every Woman</h2>
            <p>
              We're on a mission to make premium quality wigs accessible to every woman in Nigeria and beyond. 
              We believe beauty shouldn't be complicated — it should be effortless, elegant, and affordable.
            </p>
            <div className="mission-values">
              <div className="value-item">
                <span className="value-icon">💎</span>
                <h4>Quality</h4>
                <p>Uncompromising excellence in every piece</p>
              </div>
              <div className="value-item">
                <span className="value-icon">❤️</span>
                <h4>Care</h4>
                <p>Treat every customer like family</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🎯</span>
                <h4>Trust</h4>
                <p>Build lasting relationships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faith Section */}
      <section className="faith-section">
        <div className="container">
          <div className="faith-content">
            <div className="faith-icon">✝️</div>
            <h2>Inspired by Faith</h2>
            <p className="verse">"For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life."</p>
            <p className="reference">— John 3:16</p>
            <p className="faith-message">
              This verse is the foundation of everything we do. Just as God's love is unconditional, 
              we strive to serve every customer with genuine care and compassion. We believe in the power of 
              spreading beauty — both inside and out.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Experience Teeyou?</h2>
          <p>Join thousands of satisfied customers who've found their confidence with us.</p>
          <div className="cta-buttons">
            <a href="/shop" className="btn-primary">Browse Products</a>
            <a href="/contact" className="btn-outline">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  )
}