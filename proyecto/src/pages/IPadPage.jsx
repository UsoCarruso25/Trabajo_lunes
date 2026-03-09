import React, { useState } from "react";
import "../styles/IPadPage.css";

const iPadData = {
  hero: {
    title: "iPad",
    subtitle: "Deleite cada vez. Potencia cuando se necesita.",
    bgColor: "#fbfbfd",
  },
  models: [
    {
      id: 1,
      name: "iPad Pro",
      screen: "Pantalla Ultra Retina XDR de 11\" o 13\"",
      chip: "Chip M4",
      price: "Desde $5.799.000",
      tag: "Nuevo",
    },
    {
      id: 2,
      name: "iPad Air",
      screen: "Pantalla Liquid Retina de 11\" o 13\"",
      chip: "Chip M2",
      price: "Desde $3.499.000",
      tag: "Nuevo",
    },
    {
      id: 3,
      name: "iPad",
      screen: "Pantalla Liquid Retina de 10.9\"",
      chip: "Chip A14 Bionic",
      price: "Desde $1.999.000",
      tag: "",
    },
    {
      id: 4,
      name: "iPad mini",
      screen: "Pantalla Liquid Retina de 8.3\"",
      chip: "Chip A15 Bionic",
      price: "Desde $2.599.000",
      tag: "",
    },
  ],
  accessories: [
    { id: 1, name: "Apple Pencil Pro", price: "$549.000", icon: "✏️" },
    { id: 2, name: "Magic Keyboard",   price: "$899.000", icon: "⌨️" },
    { id: 3, name: "Smart Folio",      price: "$349.000", icon: "📱" },
  ],
};

function IPadPage() {
  const [selectedModel, setSelectedModel] = useState(iPadData.models[0]);
  const [showAccessories, setShowAccessories] = useState(false);

  return (
    <div className="ipad-page">

      {/* Hero */}
      <section className="ipad-hero" style={{ backgroundColor: iPadData.hero.bgColor }}>
        <h1>{iPadData.hero.title}</h1>
        <h2>{iPadData.hero.subtitle}</h2>
      </section>

      {/* Selector de modelos */}
      <section className="ipad-models">
        <h2 className="section-title">Elige tu iPad</h2>
        <div className="ipad-tabs">
          {iPadData.models.map((model) => (
            <button
              key={model.id}
              className={`ipad-tab ${selectedModel.id === model.id ? "active" : ""}`}
              onClick={() => setSelectedModel(model)}
            >
              {model.name}
            </button>
          ))}
        </div>

        {/* Detalle del modelo seleccionado */}
        <div className="ipad-detail">
          {selectedModel.tag && <span className="ipad-tag">{selectedModel.tag}</span>}
          <div className="ipad-emoji">📟</div>
          <div className="ipad-info">
            <h2>{selectedModel.name}</h2>
            <p className="ipad-chip">{selectedModel.chip}</p>
            <p className="ipad-screen">{selectedModel.screen}</p>
            <p className="ipad-price">{selectedModel.price}</p>
            <div className="ipad-actions">
              <button className="btn-primary">Comprar</button>
              <button className="btn-link">Más información ›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Accesorios con toggle */}
      <section className="ipad-accessories">
        <div className="accessories-header" onClick={() => setShowAccessories(!showAccessories)}>
          <h2 className="section-title">Accesorios para iPad</h2>
          <span className="toggle-icon">{showAccessories ? "▲" : "▼"}</span>
        </div>
        {showAccessories && (
          <div className="accessories-grid">
            {iPadData.accessories.map((acc) => (
              <div key={acc.id} className="accessory-card">
                <span className="acc-icon">{acc.icon}</span>
                <h3>{acc.name}</h3>
                <p>{acc.price}</p>
                <button className="btn-link small">COMPRAR ›</button>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}

export default IPadPage;