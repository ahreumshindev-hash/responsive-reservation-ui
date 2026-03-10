import bruschettaImg from  '../assets/bruchetta.svg'
import saladImg from  '../assets/greek salad.jpg'
import dessertImg from  '../assets/lemon dessert.jpg'

const specials = [
  {
    title: "Greek salad",
    price: "$12.99",
    image: saladImg,
    desc: "Fresh lettuce, peppers, olives and our Chicago style feta cheese.",
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    image: bruschettaImg,
    desc: "Grilled bread with garlic and seasoned with salt and olive oil.",
  },
  {
    title: "Lemon Dessert",
    price: "$4.99",
    image: dessertImg,
    desc: "Authentic recipe straight from grandma’s cookbook.",
  },
];


export default function Specials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>Specials</h2>
          <a className="btn btn-dark" href="/menu">Online Menu</a>
        </div>

        <div className="cards-grid">
          {specials.map((item) => (
            <article className="card" key={item.title}>
              <img className="card-img" src={item.image} alt={item.title} />
              <div className="card-body">
                <div className="card-row">
                  <h3>{item.title}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.desc}</p>
                <a className="card-link" href="/order">Order a delivery</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}