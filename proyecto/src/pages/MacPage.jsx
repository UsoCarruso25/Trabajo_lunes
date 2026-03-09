import React, { useState } from "react";
import "../styles/MacPage.css";

const macData = {
  hero: {
    title: "Mac",
    subtitle: "Potencia que redefine lo posible.",
    bgColor: "#1d1d1f",
  },
  products: [
    { id: 1, name: "MacBook Air",    chip: "Chip M3",          price: "Desde $5.299.000", tag: "Nuevo", emoji: "💻", desc: "Increíblemente delgado. Sorprendentemente poderoso." },
    { id: 2, name: "MacBook Pro 14\"",chip: "Chip M3 Pro/Max",  price: "Desde $8.999.000", tag: "Nuevo", emoji: "💻", desc: "La portátil profesional más avanzada." },
    { id: 3, name: "iMac",           chip: "Chip M3",          price: "Desde $6.999.000", tag: "Nuevo", emoji: "🖥️", desc: "Todo el poder. Ningún compromiso." },
    { id: 4, name: "Mac mini",       chip: "Chip M2 o M2 Pro", price: "Desde $2.999.000", tag: "",      emoji: "🖥️", desc: "Pequeño de tamaño. Enorme en rendimiento." },
  ],
  chips: [
    { name: "M3",     desc: "Hasta 2× más rápido que el chip Intel más reciente.",        color: "#6e6e73" },
    { name: "M3 Pro", desc: "Para flujos de trabajo exigentes y multitarea avanzada.",    color: "#1d1d1f" },
    { name: "M3 Max", desc: "El chip más poderoso de Apple para portátiles.",             color: "#0071e3" },
  ],
};

function MacPage() {
  const [activeChip, setActiveChip] = useState(macData.chips[0]);

  return (
    <div className="mac-page">

      {/* Hero */}
      <section className="mac-hero" style={{ backgroundColor: macData.hero.bgColor }}>
        <h1>{macData.hero.title}</h1>
        <h2>{macData.hero.subtitle}</h2>
        <div className="mac-hero-emoji">💻</div>
      </section>

      {/* Selector de chip */}
      <section className="chip-section">
        <h2 className="section-title">Familia de chips M3</h2>
        <div className="chip-tabs">
          {macData.chips.map((chip) => (
            <button
              key={chip.name}
              className={`chip-tab ${activeChip.name === chip.name ? "active" : ""}`}
              onClick={() => setActiveChip(chip)}
            >
              {chip.name}
            </button>
          ))}
        </div>
        <div className="chip-info" style={{ borderColor: activeChip.color }}>
          <h3 style={{ color: activeChip.color }}>Chip {activeChip.name}</h3>
          <p>{activeChip.desc}</p>
        </div>
      </section>

      {/* Grid de productos */}
      <section className="mac-products">
        <h2 className="section-title">Explora la línea Mac</h2>
        <div className="mac-grid">
          {macData.products.map((product) => (
            <div key={product.id} className="mac-card">
              {product.tag && <span className="mac-tag">{product.tag}</span>}
              <div className="mac-emoji">{product.emoji}</div>
              <div className="mac-card-info">
                <h3>{product.name}</h3>
                <p className="mac-chip">{product.chip}</p>
                <p className="mac-desc">{product.desc}</p>
                <p className="mac-price">{product.price}</p>
                <div className="mac-actions">
                  <button className="btn-primary small">Comprar</button>
                  <button className="btn-link small">Más info ›</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default MacPage;