const products = {
  1: { id: 1, name: 'Elegant Bob Wig', category: 'wigs', price: '₦25,000', oldPrice: '₦35,000', description: 'Premium quality elegant bob wig, perfect for everyday wear. Crafted with fine materials for natural look and comfortable fit.', images: ['📦', '📦', '📦'] },
  2: { id: 2, name: 'Silky Straight Wig', category: 'wigs', price: '₦45,000', oldPrice: '₦60,000', description: 'Luxurious silky straight wig made from premium human hair blend. Perfect for special occasions and professional looks.', images: ['📦', '📦', '📦'] },
  3: { id: 3, name: 'Full Curly Wig', category: 'wigs', price: '₦35,000', oldPrice: '₦45,000', description: 'Beautiful full curly wig with natural bounce. Low maintenance and versatile styling options.', images: ['📦', '📦', '📦'] },
  4: { id: 4, name: 'Ocean Wave Wig', category: 'wigs', price: '₦40,000', oldPrice: '₦55,000', description: 'Stunning ocean wave pattern that flows beautifully. Perfect for glamorous looks.', images: ['📦', '📦', '📦'] },
  5: { id: 5, name: 'Classic Fedora Hat', category: 'hats', price: '₦15,000', oldPrice: null, description: 'Handcrafted classic fedora hat. Perfect for any outfit, casual or formal.', images: ['🎩', '🎩', '🎩'] },
  6: { id: 6, name: 'Wool Beret', category: 'hats', price: '₦12,000', oldPrice: null, description: 'Stylish wool beret. French-inspired design for the fashion-forward.', images: ['🎩', '🎩', '🎩'] },
  7: { id: 7, name: 'Straw Sun Hat', category: 'hats', price: '₦18,000', oldPrice: '₦25,000', description: 'Lightweight straw sun hat. Perfect for summer protection with style.', images: ['🎩', '🎩', '🎩'] },
  8: { id: 8, name: 'Lace Fascinator', category: 'fascinators', price: '₦20,000', oldPrice: null, description: 'Elegant lace fascinator. Perfect for weddings and special events.', images: ['👒', '👒', '👒'] },
  9: { id: 9, name: 'Flower Fascinator', category: 'fascinators', price: '₦15,000', oldPrice: null, description: 'Beautiful flower fascinator with delicate details. Adds charm to any outfit.', images: ['👒', '👒', '👒'] },
  10: { id: 10, name: 'Lace Front Wig', category: 'wigs', price: '₦55,000', oldPrice: '₦75,000', description: 'Premium lace front wig with natural hairline. Believable and seamless look.', images: ['📦', '📦', '📦'] },
  11: { id: 11, name: '4x4 Closure Wig', category: 'wigs', price: '₦30,000', oldPrice: '₦42,000', description: 'Affordable 4x4 closure wig. Great quality at great value.', images: ['📦', '📦', '📦'] },
  12: { id: 12, name: 'Beanie Hat', category: 'hats', price: '₦8,000', oldPrice: null, description: 'Cozy beanie hat for everyday wear. Warm and stylish.', images: ['🎩', '🎩', '🎩'] },
}

export default function ProductDetail({ params }) {
  const product = products[params.id] || products[1]

  return (
    <main className="product-page">
      <section className="product-detail">
        <div className="container">
          <div className="product-layout">
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="main-image">
                <div className="image-placeholder">{product.images[0]}</div>
              </div>
              <div className="thumbnails">
                {product.images.map((img, i) => (
                  <div key={i} className="thumb">{img}</div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <span className="category">{product.category}</span>
              <h1>{product.name}</h1>
              
              <div className="price-section">
                <span className="price">{product.price}</span>
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
              </div>

              <p className="description">{product.description}</p>

              <div className="quantity-section">
                <label>Quantity</label>
                <div className="quantity-controls">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>

              <div className="action-buttons">
                <button className="btn-cart">Add to Cart</button>
                <a href="https://wa.me/2340000000000" className="btn-whatsapp">
                  💬 Chat on WhatsApp
                </a>
              </div>

              <div className="product-meta">
                <div className="meta-item">
                  <span>✓</span> Premium Quality
                </div>
                <div className="meta-item">
                  <span>✓</span> Handmade in Nigeria
                </div>
                <div className="meta-item">
                  <span>✓</span> Fast Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
