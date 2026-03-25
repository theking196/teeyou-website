'use client'

import { useState } from 'react'

export default function CustomOrder() {
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // TODO: Send to backend API
    // const formData = new FormData(e.target)
    // const data = Object.fromEntries(formData.entries())
    // await fetch('/api/custom-order', { method: 'POST', body: JSON.stringify(data) })
  }

  if (submitted) {
    return (
      <main className="custom-order-page">
        <section className="success-section">
          <div className="container">
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h1>Order Submitted!</h1>
              <p>Thank you for your custom order request. We'll contact you within 24 hours to confirm details.</p>
              <button onClick={() => setSubmitted(false)} className="btn-another">Place Another Order</button>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="custom-order-page">
      <section className="form-section">
        <div className="container">
          <div className="page-header">
            <h1>Custom Order</h1>
            <p>Get a personalized wig made just for you</p>
          </div>

          <form className="order-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Personal Info */}
              <div className="form-section-title">Personal Information</div>
              
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input type="text" id="fullName" name="fullName" required placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required placeholder="+234 XXX XXX XXXX" />
              </div>

              {/* Order Details */}
              <div className="form-section-title">Order Details</div>

              <div className="form-group full-width">
                <label htmlFor="image">Reference Image</label>
                <div className="file-upload">
                  <input type="file" id="image" name="image" accept="image/*" />
                  <div className="file-hint">Click to upload or drag and drop (PNG, JPG)</div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="style">Style *</label>
                <select id="style" name="style" required>
                  <option value="">Select style</option>
                  <option value="bob">Bob Cut</option>
                  <option value="straight">Straight</option>
                  <option value="curly">Curly</option>
                  <option value="wave">Wave</option>
                  <option value="lace-front">Lace Front</option>
                  <option value="closure">Closure</option>
                  <option value="weave">Weave</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="length">Length *</label>
                <select id="length" name="length" required>
                  <option value="">Select length</option>
                  <option value="short">Short (10-12 inches)</option>
                  <option value="medium">Medium (14-16 inches)</option>
                  <option value="long">Long (18-20 inches)</option>
                  <option value="extra-long">Extra Long (22+ inches)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="color">Color *</label>
                <select id="color" name="color" required>
                  <option value="">Select color</option>
                  <option value="black">Natural Black</option>
                  <option value="brown">Dark Brown</option>
                  <option value="chocolate">Chocolate Brown</option>
                  <option value="honey">Honey Blonde</option>
                  <option value="blonde">Platinum Blonde</option>
                  <option value="red">Red</option>
                  <option value="custom">Custom (specify in notes)</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="notes">Additional Notes</label>
                <textarea id="notes" name="notes" rows="4" placeholder="Any specific requirements, preferences, or questions..."></textarea>
              </div>
            </div>

            <div className="form-footer">
              <button type="submit" className="submit-btn">Submit Order</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}