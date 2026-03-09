import React, { useState } from "react";
import "../styles/WatchPage.css";

const watchData = {
  hero: {
    title: "Apple Watch",
    subtitle: "El futuro de la salud en tu muñeca.",
    bgColor: "#000000",
    textColor: "#f5f5f7",
  },
  series: [
    {
      id: 1,
      name: "Apple Watch Series 10",
      desc: "El Apple Watch más delgado y ligero hasta el momento. Con pantalla más grande y Always-On.",
      price: "Desde $2.499.000",
      tag: "Nuevo",
      color: "#e8e8ed",
    },
    {
      id: 2,
      name: "Apple Watch Ultra 2",
      desc: "Diseñado para la aventura extrema. Titanio. GPS de doble frecuencia. Hasta 60 horas de batería.",
      price: "Desde $4.999.000",
      tag: "Nuevo",
      color: "#3d3d3d",
    },
    {
      id: 3,
      name: "Apple Watch SE",
      desc: "El Apple Watch esencial. Todo lo que necesitas a un precio que te encantará.",
      price: "Desde $1.299.000",
      tag: "",
      color: "#a2a2a7",
    },
  ],
  healthFeatures: [
    { id: 1, icon: "❤️", title: "Frecuencia cardíaca",      desc: "Monitoreo continuo del ritmo cardíaco." },
    { id: 2, icon: "🩸", title: "Oxígeno en sangre",         desc: "Mide el nivel de SpO2 en cualquier momento." },
    { id: 3, icon: "😴", title: "Seguimiento del sueño",     desc: "Análisis detallado de tus fases de sueño." },
    { id: 4, icon: "⚡", title: "Detección de caídas",       desc: "Llama al 112 si detecta una caída grave." },
    { id: 5, icon: "🏃", title: "Más de 80 modos deportivos",desc: "Seguimiento preciso de cualquier actividad." },
    { id: 6, icon: "🌡️", title: "Sensor de temperatura",    desc: "Seguimiento de la temperatura corporal en reposo." },
  ],
};

function WatchPage() {
  const [activeSeries, setActiveSeries] = useState(watchData.series[0]);

  return (
    <div className="watch-page">

      {/* Hero */}
      <section className="watch-hero" style={{ backgroundColor: watchData.hero.bgColor }}>
        <h1 style={{ color: watchData.hero.textColor }}>{watchData.hero.title}</h1>
        <h2 style={{ color: "#86868b" }}>{watchData.hero.subtitle}</h2>
        <div className="watch-hero-emoji">⌚</div>
      </section>

      {/* Selector de series */}
      <section className="watch-series">
        <h2 className="section-title dark">Elige tu Apple Watch</h2>
        <div className="series-selector">
          {watchData.series.map((s) => (
            <div
              key={s.id}
              className={`series-card ${activeSeries.id === s.id ? "active" : ""}`}
              onClick={() => setActiveSeries(s)}
            >
              {s.tag && <span className="series-tag">{s.tag}</span>}
              <div className="series-emoji">⌚</div>
              <h3>{s.name}</h3>
              <p className="series-price">{s.price}</p>
            </div>
          ))}
        </div>

        {/* Detalle de la serie seleccionada */}
        <div className="series-detail" style={{ borderColor: activeSeries.color }}>
          <h3>{activeSeries.name}</h3>
          <p>{activeSeries.desc}</p>
          <p className="detail-price">{activeSeries.price}</p>
          <button className="btn-primary">Comprar</button>
        </div>
      </section>

      {/* Características de salud */}
      <section className="watch-health">
        <h2 className="section-title">Tu mejor compañero de salud</h2>
        <div className="health-grid">
          {watchData.healthFeatures.map((feat) => (
            <div key={feat.id} className="health-card">
              <span className="health-icon">{feat.icon}</span>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default WatchPage;