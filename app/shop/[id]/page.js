import Link from 'next/link'

const products = {
  1: { id: 1, name: 'Elegant Bob Wig', category: 'Wigs', price: '₦25,000', oldPrice: '₦35,000', description: 'Premium quality elegant bob wig, perfect for everyday wear. Crafted with fine materials for natural look and comfortable fit.', features: ['100% Premium Fiber', 'Natural Look', 'Comfortable Fit'], images: ['1', '2', '3'] },
  2: { id: 2, name: 'Silky Straight Wig', category: 'Wigs', price: '₦45,000', oldPrice: '₦60,000', description: 'Luxurious silky straight wig made from premium human hair blend. Perfect for special occasions and professional looks.', features: ['Human Hair Blend', 'Heat Resistant', 'Reusable'], images: ['1', '2', '3'] },
  3: { id: 3, name: 'Full Curly Wig', category: 'Wigs', price: '₦35,000', oldPrice: '₦45,000', description: 'Beautiful full curly wig with natural bounce. Low maintenance and versatile styling options.', features: ['Natural Bounce', 'Low Maintenance', 'Versatile'], images: ['1', '2', '3'] },
  4: { id: 4, name: 'Ocean Wave Wig', category: 'Wigs', price: '₦40,000', oldPrice: '₦55,000', description: 'Stunning ocean wave pattern that flows beautifully. Perfect for glamorous looks.', features: ['Wave Pattern', 'Flowing Style', 'Glamorous'], images: ['1', '2', '3'] },
  5: { id: 5, name: 'Classic Fedora Hat', category: 'Hats', price: '₦15,000', oldPrice: null, description: 'Handcrafted classic fedora hat. Perfect for any outfit, casual or formal.', features: ['Handcrafted', 'All Occasions', 'Premium Finish'], images: ['1', '2', '3'] },
  6: { id: 6, name: 'Wool Beret', category: 'Hats', price: '₦12,000', oldPrice: null, description: 'Stylish wool beret. French-inspired design for the fashion-forward.', features: ['100% Wool', 'French Style', 'One Size'], images: ['1', '2', '3'] },
  7: { id: 7, name: 'Straw Sun Hat', category: 'Hats', price: '₦18,000', oldPrice: '₦25,000', description: 'Lightweight straw sun hat. Perfect for summer protection with style.', features: ['Lightweight', 'UV Protection', 'Breathable'], images: ['1', '2', '3'] },
  8: { id: 8, name: 'Lace Fascinator', category: 'Fascinators', price: '₦20,000', oldPrice: null, description: 'Elegant lace fascinator. Perfect for weddings and special events.', features: ['Delicate Lace', 'Event Ready', 'Elegant'], images: ['1', '2', '3'] },
  9: { id: 9, name: 'Flower Fascinator', category: 'Fascinators', price: '₦15,000', oldPrice: null, description: 'Beautiful flower fascinator with delicate details. Adds charm to any outfit.', features: ['Handmade Flowers', 'Unique Design', 'Charming'], images: ['1', '2', '3'] },
  10: { id: 10, name: 'Lace Front Wig', category: 'Wigs', price: '₦55,000', oldPrice: '₦75,000', description: 'Premium lace front wig with natural hairline. Believable and seamless look.', features: ['Lace Front', 'Natural Hairline', 'Seamless'], images: ['1', '2', '3'] },
  11: { id: 11, name: '4x4 Closure Wig', category: 'Wigs', price: '₦30,000', oldPrice: '₦42,000', description: 'Affordable 4x4 closure wig. Great quality at great value.', features: ['4x4 Closure', 'Affordable', 'Quality'], images: ['1', '2', '3'] },
  12: { id: 12, name: 'Beanie Hat', category: 'Hats', price: '₦8,000', oldPrice: null, description: 'Cozy beanie hat for everyday wear. Warm and stylish.', features: ['Cozy Warm', 'Everyday Wear', 'Stretch Fit'], images: ['1', '2', '3'] },
}

export default function ProductDetail({ params }) {
  const product = products[params.id] || products[1]

  return (
    <main className="product-page">
      <section className="product-detail">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / {product.name}
          </div>
          
          <div className="product-grid">
            {/* Left - Image */}
            <div className="image-section">
              <div className="main-img">
                <div className="img-box">{product.category === 'Wigs' ? '💇‍♀️' : product.category === 'Hats' ? '🎩' : '👒'}</div>
              </div>
              <div className="thumb-row">
                {[1,2,3].map((i) => (
                  <div key={i} className="thumb">{product.category === 'Wigs' ? '💇‍♀️' : product.category === 'Hats' ? '🎩' : '👒'}</div>
                ))}
              </div>
            </div>

            {/* Right - Info */}
            <div className="info-section">
              <span className="cat-tag">{product.category}</span>
              <h1>{product.name}</h1>
              
              <div className="price-row">
                <span className="current-price">{product.price}</span>
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                {product.oldPrice && <span className="sale-tag">SALE</span>}
              </div>

              <p className="desc">{product.description}</p>

              <div className="features">
                <p className="features-title">Features:</p>
                <ul>
                  {product.features.map((f, i) => <li key={i}>• {f}</li>)}
                </ul>
              </div>

              <div className="qty-row">
                <span>Quantity:</span>
                <div className="qty-box">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>

              <div className="btn-row">
                <button className="btn-primary">Add to Cart</button>
                <a href="https://wa.me/2340000000000" className="btn-whatsapp">Chat on WhatsApp</a>
              </div>

              <div className="trust-badges">
                <span>✓ Handmade in Nigeria</span>
                <span>✓ Premium Quality</span>
                <span>✓ Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
