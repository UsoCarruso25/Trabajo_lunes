import React, { useState } from "react";
import "../styles/IPhonePage.css";

const iPhoneData = {
  hero: {
    title: "IPHONE 16 Pro",
    subtitle: "El poder de la IA. En tus manos.",
    description: "Cámara de 48 MP con zoom óptico 5x. Chip A18 Pro. Titanio.",
    bgColor: "#1d1d1f",
    textColor: "#f5f5f7",
    priceFrom: "Desde $5.999.000",
  },
  models: [
    { id: 1, name: "iPhone 16 Pro", price: "Desde $5.999.000", tag: "Nuevo" },
    { id: 2, name: "iPhone 16",     price: "Desde $4.299.000", tag: "Nuevo" },
    { id: 3, name: "iPhone 15",     price: "Desde $3.299.000", tag: ""      },
  ],
  features: [
    { id: 1, icon: "📷", title: "Cámara Pro de 48 MP",   desc: "Zoom óptico 5x. Fotos en condiciones de poca luz increíbles." },
    { id: 2, icon: "⚡", title: "Chip A18 Pro",           desc: "El chip más potente en un iPhone. Diseñado para Apple Intelligence." },
    { id: 3, icon: "🎬", title: "Video 4K a 120 fps",    desc: "Graba en Dolby Vision con calidad cinematográfica." },
    { id: 4, icon: "🔋", title: "Batería todo el día",   desc: "Hasta 27 horas de reproducción de video." },
  ],
};

function IPhonePage() {
  const [selectedModel, setSelectedModel] = useState(iPhoneData.models[0]);

  return (
    <div className="iphone-page">

      {/* Hero */}
      <section className="iphone-hero" style={{ backgroundColor: iPhoneData.hero.bgColor }}>
        <h1 style={{ color: iPhoneData.hero.textColor }}>{iPhoneData.hero.title}</h1>
        <h2 style={{ color: "#a1a1a6" }}>{iPhoneData.hero.subtitle}</h2>
        <p style={{ color: "#86868b" }}>{iPhoneData.hero.description}</p>
        <div className="hero-actions">
          <button className="btn-primary">Comprar</button>
          <button className="btn-link">Más información ›</button>
        </div>
        <div className="hero-emoji">📱</div>
      </section>

      {/* Modelos */}
      <section className="iphone-models">
        <h2 className="section-title">Elige tu iPhone</h2>
        <div className="models-grid">
          {iPhoneData.models.map((model) => (
            <div
              key={model.id}
              className={`model-card ${selectedModel.id === model.id ? "selected" : ""}`}
              onClick={() => setSelectedModel(model)}
            >
              {model.tag && <span className="model-tag">{model.tag}</span>}
              <div className="model-emoji">📱</div>
              <h3>{model.name}</h3>
              <p className="model-price">{model.price}</p>
              <button className="btn-primary small">Comprar</button>
            </div>
          ))}
        </div>
      </section>

      {/* Características */}
      <section className="iphone-features">
        <h2 className="section-title">Por qué iPhone</h2>
        <div className="features-grid">
          {iPhoneData.features.map((feat) => (
            <div key={feat.id} className="feature-card">
              <span className="feature-icon">{feat.icon}</span>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default IPhonePage;