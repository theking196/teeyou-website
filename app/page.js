import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Luxury Wigs & Handcrafted Hats</h1>
          <p>Made in Nigeria, Worn Worldwide</p>
          <div className="hero-buttons">
            <Link href="/shop" className="btn btn-primary">Shop Now</Link>
            <Link href="/custom-order" className="btn btn-outline">Order Custom</Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Featured Products */}
      <section className="section featured-products">
        <div className="container">
          <h2 className="section-title">Featured <span>Products</span></h2>
          <div className="products-grid">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="product-card">
                <div className="product-image">
                  <div className="product-placeholder">📦</div>
                </div>
                <div className="product-info">
                  <h3>Product {item}</h3>
                  <p className="price">₦0,000</p>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-container">
            <Link href="/shop" className="view-all">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* Why Teeyou */}
      <section className="section why-teeyou">
        <div className="container">
          <h2 className="section-title">Why <span>Teeyou</span></h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✋</div>
              <h3>Handmade Quality</h3>
              <p>Each piece is carefully crafted by skilled artisans with attention to every detail.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Premium Materials</h3>
              <p>We source only the finest materials to ensure durability and elegance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Unique Designs</h3>
              <p>Stand out with exclusive styles you won't find anywhere else.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section video-section">
        <div className="container">
          <div className="video-placeholder">
            <div className="video-content">
              <div className="play-button">▶</div>
              <p>Watch Our Story</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">Customer <span>Reviews</span></h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote">"The quality is amazing! I've never seen such beautiful wigs. Highly recommended!"</div>
              <div className="author">
                <div className="avatar">A</div>
                <div>
                  <h4>Amara O.</h4>
                  <span>Lagos</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote">"Fast delivery and excellent customer service. My wig looks exactly as pictured!"</div>
              <div className="author">
                <div className="avatar">C</div>
                <div>
                  <h4>Chioma M.</h4>
                  <span>Abuja</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote">"Finally found a reliable vendor. The quality is top-notch and prices are fair."</div>
              <div className="author">
                <div className="avatar">F</div>
                <div>
                  <h4>Fatima A.</h4>
                  <span>Port Harcourt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
