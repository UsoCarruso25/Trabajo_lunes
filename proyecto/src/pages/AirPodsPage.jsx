import React, { useState } from "react";
import "../styles/AirPodsPage.css";

const airPodsData = {
  hero: {
    title: "AirPods",
    subtitle: "Magia en tus oídos.",
    bgColor: "#f5f5f7",
  },
  products: [
    {
      id: 1,
      name: "AirPods PRO (2.ª generación)",
      tag: "Nuevo",
      price: "$1.599.000",
      desc: "Cancelación activa de ruido. Audio adaptable. Chip H2.",
      features: ["Cancelación activa de ruido", "Audio adaptable", "Chip H2", "Hasta 30h con estuche"],
    },
    {
      id: 2,
      name: "AirPods (4.ª generación)",
      tag: "Nuevo",
      price: "$999.000",
      desc: "Diseño rediseñado. Sonido extraordinario. Comodidad excepcional.",
      features: ["Diseño completamente nuevo", "Chip H2", "Hasta 30h con estuche", "Resistencia al agua IPX4"],
    },
    {
      id: 3,
      name: "AirPods Max",
      tag: "",
      price: "$2.799.000",
      desc: "Audio de alta fidelidad. Cancelación activa de ruido. Diseño premium.",
      features: ["Cancelación activa de ruido líder del sector", "Transparencia adaptable", "Audio espacial personalizado", "Batería de hasta 20h"],
    },
  ],
  comparison: [
    { feature: "Cancelación de ruido", pro: "✅", gen4: "✅ (modelo ANC)", max: "✅" },
    { feature: "Audio espacial",       pro: "✅", gen4: "✅",              max: "✅" },
    { feature: "Chip",                 pro: "H2", gen4: "H2",              max: "H1" },
    { feature: "Resistencia al agua",  pro: "IPX4", gen4: "IPX4",         max: "—"  },
    { feature: "Precio desde",         pro: "$1.599.000", gen4: "$799.000", max: "$2.799.000" },
  ],
};

function AirPodsPage() {
  const [selected, setSelected] = useState(airPodsData.products[0]);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="airpods-page">

      {/* Hero */}
      <section className="airpods-hero" style={{ backgroundColor: airPodsData.hero.bgColor }}>
        <h1>{airPodsData.hero.title}</h1>
        <h2>{airPodsData.hero.subtitle}</h2>
      </section>

      {/* Tarjetas de productos */}
      <section className="airpods-products">
        <div className="airpods-grid">
          {airPodsData.products.map((p) => (
            <div
              key={p.id}
              className={`airpods-card ${selected.id === p.id ? "selected" : ""}`}
              onClick={() => setSelected(p)}
            >
              {p.tag && <span className="airpods-tag">{p.tag}</span>}
              <div className="airpods-emoji">🎧</div>
              <h3>{p.name}</h3>
              <p className="airpods-price">{p.price}</p>
              <p className="airpods-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Características del producto seleccionado */}
        <div className="selected-features">
          <h3>Características de {selected.name}</h3>
          <ul>
            {selected.features.map((f, i) => (
              <li key={i}>✓ {f}</li>
            ))}
          </ul>
          <button className="btn-primary">Comprar {selected.name}</button>
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="comparison-section">
        <button className="btn-link large" onClick={() => setShowComparison(!showComparison)}>
          {showComparison ? "▲ Ocultar comparación" : "▼ Comparar modelos"}
        </button>
        {showComparison && (
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>AirPods Pro</th>
                <th>AirPods 4</th>
                <th>AirPods Max</th>
              </tr>
            </thead>
            <tbody>
              {airPodsData.comparison.map((row, i) => (
                <tr key={i}>
                  <td>{row.feature}</td>
                  <td>{row.pro}</td>
                  <td>{row.gen4}</td>
                  <td>{row.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

    </div>
  );
}

export default AirPodsPage;