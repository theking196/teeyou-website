import Link from 'next/link'

const products = [
  { id: 1, name: 'Elegant Bob Wig', category: 'wigs', price: '₦25,000', badge: 'Bestseller' },
  { id: 2, name: 'Silky Straight Wig', category: 'wigs', price: '₦45,000', badge: 'Premium' },
  { id: 3, name: 'Full Curly Wig', category: 'wigs', price: '₦35,000', badge: null },
  { id: 4, name: 'Ocean Wave Wig', category: 'wigs', price: '₦40,000', badge: 'New' },
  { id: 5, name: 'Classic Fedora Hat', category: 'hats', price: '₦15,000', badge: null },
  { id: 6, name: 'Wool Beret', category: 'hats', price: '₦12,000', badge: null },
  { id: 7, name: 'Straw Sun Hat', category: 'hats', price: '₦18,000', badge: 'Sale' },
  { id: 8, name: 'Lace Fascinator', category: 'fascinators', price: '₦20,000', badge: null },
  { id: 9, name: 'Flower Fascinator', category: 'fascinators', price: '₦15,000', badge: 'New' },
  { id: 10, name: 'Lace Front Wig', category: 'wigs', price: '₦55,000', badge: null },
  { id: 11, name: '4x4 Closure Wig', category: 'wigs', price: '₦30,000', badge: 'Sale' },
  { id: 12, name: 'Beanie Hat', category: 'hats', price: '₦8,000', badge: null },
]

export default function Shop() {
  return (
    <main className="shop-page">
      <section className="shop-header">
        <div className="container">
          <h1>Our Shop</h1>
          <p>Premium wigs and handcrafted hats</p>
        </div>
      </section>

      <section className="shop-content">
        <div className="container">
          {/* Filters */}
          <div className="filters">
            {['All', 'Wigs', 'Hats', 'Fascinators'].map((filter) => (
              <button key={filter} className="filter-btn">
                {filter}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  {product.badge && <span className="badge">{product.badge}</span>}
                  <div className="placeholder">📦</div>
                </div>
                <div className="product-info">
                  <span className="category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <button className="view-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
