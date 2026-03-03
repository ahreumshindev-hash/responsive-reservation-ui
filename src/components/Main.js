import Restaurant from '../assets/restaurant.jpg'
import bruchettaImg from  '../assets/bruchetta.svg'
import saladImg from  '../assets/greek salad.jpg'
import lemonDessertImg from  '../assets/lemon dessert.jpg'

function Main() {
  return (
    <main>
    <div className='container'>
        <section className="section hero">
        <div className="hero-grid">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <a className="btn" href="/reservations">Reserve a Table</a>
          </div>

          <div className="hero-image" aria-hidden="true">
            <img src={Restaurant} alt="Little Lemon restaurant interior" />
          </div>
        </div>
      </section>

      <section className="section">
          <div className="section-title">
            <h2>Specials</h2>
            <a className="btn btn--dark" href="/menu">Online Menu</a>
          </div>

          <div className="cards-grid">
            <article className="card">
              <img src={saladImg} alt="Greek salad" className="card-img" />
              <div className='card-text'>

              <h3>Greek salad</h3>
              <p>Fresh lettuce, peppers, olives and our Chicago style feta cheese.</p>
              </div>
            </article>

            <article className="card">
              <img src={bruchettaImg} alt="Bruchetta" className="card-img" />
               <div className='card-text'>
              <h3>Bruschetta</h3>
              <p>Grilled bread with garlic and seasoned with salt and olive oil.</p>
              </div>
            </article>

            <article className="card">
               <img src={lemonDessertImg} alt="Lemon Dessert" className="card-img" />
               <div className='card-text'>
              <h3>Lemon Dessert</h3>
              <p>Authentic recipe straight from grandma’s cookbook.</p>
              </div>
            </article>
          </div>
      </section>

      <section className="testimonials">
            <h2 className="section-title">Testimonials</h2>

            <div className="testimonials-grid">
            <article className="testimonial-card">
                <p className="rating">★★★★★</p>
                <div className="reviewer">
                <div className="avatar" aria-hidden="true" />
                <div>
                    <p className="name">Sarah</p>
                    <p className="role">Local Guide</p>
                </div>
                </div>
                <p className="comment">“Great food and friendly staff. Loved the atmosphere.”</p>
            </article>

            <article className="testimonial-card">
                <p className="rating">★★★★★</p>
                <div className="reviewer">
                <div className="avatar" aria-hidden="true" />
                <div>
                    <p className="name">James</p>
                    <p className="role">Customer</p>
                </div>
                </div>
                <p className="comment">“Quick service and amazing bruschetta. Will come again!”</p>
            </article>

            <article className="testimonial-card">
                <p className="rating">★★★★☆</p>
                <div className="reviewer">
                <div className="avatar" aria-hidden="true" />
                <div>
                    <p className="name">Mina</p>
                    <p className="role">Foodie</p>
                </div>
                </div>
                <p className="comment">“Fresh ingredients and great specials. Nice portion sizes.”</p>
            </article>

            <article className="testimonial-card">
                <p className="rating">★★★★★</p>
                <div className="reviewer">
                <div className="avatar" aria-hidden="true" />
                <div>
                    <p className="name">Alex</p>
                    <p className="role">Visitor</p>
                </div>
                </div>
                <p className="comment">“Easy to reserve a table. Smooth experience on mobile.”</p>
            </article>
            </div>
        </section>
      </div>
    </main>
  );
}

export default Main;