export default function Gallery() {
  const items = [
    { id: 1, type: 'image', placeholder: '💇‍♀️', title: 'Silky Straight Wig' },
    { id: 2, type: 'image', placeholder: '💇‍♀️', title: 'Bob Cut Style' },
    { id: 3, type: 'image', placeholder: '👒', title: 'Straw Hat Collection' },
    { id: 4, type: 'image', placeholder: '💇‍♀️', title: 'Full Curly Look' },
    { id: 5, type: 'video', placeholder: '▶', title: 'Wig Styling Tutorial' },
    { id: 6, type: 'image', placeholder: '💇‍♀️', title: 'Lace Front Detail' },
    { id: 7, type: 'image', placeholder: '👒', title: 'Fedora Hat' },
    { id: 8, type: 'image', placeholder: '💇‍♀️', title: 'Ocean Wave' },
    { id: 9, type: 'video', placeholder: '▶', title: 'Behind the Scenes' },
    { id: 10, type: 'image', placeholder: '💇‍♀️', title: 'Closure Wig' },
    { id: 11, type: 'image', placeholder: '👒', title: 'Beret Collection' },
    { id: 12, type: 'image', placeholder: '💇‍♀️', title: 'Custom Order Sample' },
  ]

  return (
    <main className="gallery-page">
      <section className="gallery-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Our collection of wigs and hats in action</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-grid">
            {items.map((item) => (
              <div key={item.id} className={`gallery-item ${item.type}`}>
                <div className="item-overlay">
                  <span className="play-icon">{item.placeholder}</span>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}