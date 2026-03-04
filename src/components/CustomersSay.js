const testimonials = [
  { name: "Sarah", role: "Local Guide", rating: "★★★★★", quote: "Great food and friendly staff." , color:"#495E57", text:"#fff"},
  { name: "James", role: "Customer", rating: "★★★★★", quote: "Quick service and amazing bruschetta.", color:"#F4CE14", text:"#000"},
  { name: "Mina", role: "Foodie", rating: "★★★★☆", quote: "Fresh ingredients and great specials.", color:"#EE9972", text:"#fff"},
  { name: "Alex", role: "Visitor", rating: "★★★★★", quote: "Easy to reserve a table on mobile.", color:"#333333", text:"#fff"},
];

function CustomersSay() {
  return (
      <section className="testimonials">
            <h2 className="section-title">Testimonials</h2>

            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <article className="testimonial-card" key={t.name}>
                  <p className="rating">{t.rating}</p>

                  <div className="reviewer">
                    <div
                      className="avatar"
                      style={{ background: t.color, color: t.text }}
                      aria-label={`${t.name} avatar`}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="name">{t.name}</p>
                      <p className="role">{t.role}</p>
                    </div>
                  </div>

                  <p className="comment">“{t.quote}”</p>
                </article>
              ))}
            </div>
        </section>
  );
}

export default CustomersSay;