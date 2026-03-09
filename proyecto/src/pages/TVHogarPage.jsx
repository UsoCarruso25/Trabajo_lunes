import React, { useState } from "react";
import "../styles/TVHogarPage.css";

const tvHogarData = {
  hero: {
    title: "TV y Hogar",
    subtitle: "Entretenimiento. Automatización. Magia.",
    bgColor: "#1d1d1f",
    textColor: "#f5f5f7",
  },
  products: [
    {
      id: 1,
      category: "Entretenimiento",
      name: "Apple TV 4K",
      desc: "El mejor acceso a Apple TV+, Disney+, Netflix y más. Con Siri Remote.",
      price: "$699.000",
      tag: "Nuevo",
      emoji: "📺",
      features: ["Chip A15 Bionic", "Video 4K HDR", "Audio espacial", "Siri integrado"],
    },
    {
      id: 2,
      category: "Hogar Inteligente",
      name: "HomePod",
      desc: "Sonido envolvente de alta fidelidad. Inteligencia Siri. El altavoz inteligente definitivo.",
      price: "$1.299.000",
      tag: "Nuevo",
      emoji: "🔊",
      features: ["Chip S9", "Cancelación de ruido", "Sensor de temperatura y humedad", "Matter compatible"],
    },
    {
      id: 3,
      category: "Hogar Inteligente",
      name: "HomePod mini",
      desc: "Gran sonido. Tamaño compacto. Siri siempre disponible.",
      price: "$499.000",
      tag: "",
      emoji: "🔊",
      features: ["Chip S5", "360° de audio", "Intercom entre habitaciones", "Matter compatible"],
    },
  ],
  appletvPlus: [
    { id: 1, title: "Severance",         genre: "Drama / Thriller", emoji: "🏢" },
    { id: 2, title: "The Morning Show",  genre: "Drama",            emoji: "📺" },
    { id: 3, title: "Ted Lasso",         genre: "Comedia",          emoji: "⚽" },
    { id: 4, title: "Foundation",        genre: "Sci-Fi",           emoji: "🚀" },
  ],
};

function TVHogarPage() {
  const [activeProduct, setActiveProduct] = useState(tvHogarData.products[0]);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", "Entretenimiento", "Hogar Inteligente"];

  const filtered = activeCategory === "Todos"
    ? tvHogarData.products
    : tvHogarData.products.filter((p) => p.category === activeCategory);

  return (
    <div className="tv-page">

      {/* Hero */}
      <section className="tv-hero" style={{ backgroundColor: tvHogarData.hero.bgColor }}>
        <h1 style={{ color: tvHogarData.hero.textColor }}>{tvHogarData.hero.title}</h1>
        <h2 style={{ color: "#86868b" }}>{tvHogarData.hero.subtitle}</h2>
      </section>

      {/* Filtro por categoría */}
      <section className="tv-products">
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tarjetas de productos */}
        <div className="tv-grid">
          {filtered.map((product) => (
            <div
              key={product.id}
              className={`tv-card ${activeProduct.id === product.id ? "selected" : ""}`}
              onClick={() => setActiveProduct(product)}
            >
              {product.tag && <span className="tv-tag">{product.tag}</span>}
              <span className="tv-category-badge">{product.category}</span>
              <div className="tv-emoji">{product.emoji}</div>
              <h3>{product.name}</h3>
              <p className="tv-price">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Detalle del producto seleccionado */}
        <div className="tv-detail">
          <h3>{activeProduct.name}</h3>
          <p>{activeProduct.desc}</p>
          <ul className="tv-features">
            {activeProduct.features.map((f, i) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>
          <p className="detail-price">{activeProduct.price}</p>
          <button className="btn-primary">Comprar</button>
        </div>
      </section>

      {/* Sección Apple TV+ */}
      <section className="appletv-plus">
        <h2 className="section-title">Lo más visto en Apple TV+</h2>
        <div className="shows-grid">
          {tvHogarData.appletvPlus.map((show) => (
            <div key={show.id} className="show-card">
              <span className="show-emoji">{show.emoji}</span>
              <h4>{show.title}</h4>
              <p>{show.genre}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default TVHogarPage;