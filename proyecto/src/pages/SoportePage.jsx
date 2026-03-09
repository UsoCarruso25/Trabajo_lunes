import React, { useState } from "react";
import "../styles/SoportePage.css";

const soporteData = {
  hero: {
    title: "Soporte de Apple",
    subtitle: "Estamos aquí para ayudarte.",
    bgColor: "#f5f5f7",
  },
  categories: [
    { id: 1, icon: "📱", name: "iPhone",   topics: ["Activación", "Batería", "Reparaciones", "iCloud"] },
    { id: 2, icon: "💻", name: "Mac",      topics: ["macOS", "Rendimiento", "Accesorios", "Boot Camp"] },
    { id: 3, icon: "📟", name: "iPad",     topics: ["iPadOS", "Apple Pencil", "Teclado", "Conectividad"] },
    { id: 4, icon: "⌚", name: "Apple Watch", topics: ["watchOS", "Salud", "Batería", "Correas"] },
    { id: 5, icon: "🎧", name: "AirPods",  topics: ["Conexión", "Sonido", "Limpieza", "Garantía"] },
    { id: 6, icon: "📺", name: "Apple TV", topics: ["Configuración", "Apple TV+", "Siri Remote", "HomeKit"] },
  ],
  contactOptions: [
    { id: 1, icon: "💬", title: "Chat en vivo",          desc: "Chatea con un especialista de Apple." },
    { id: 2, icon: "📞", title: "Llamar",                desc: "Habla directamente con soporte técnico." },
    { id: 3, icon: "🏪", title: "Visitar Apple Store",   desc: "Recibe ayuda en persona en una tienda." },
    { id: 4, icon: "🔧", title: "Proveedor de servicio", desc: "Encuentra reparaciones autorizadas cerca." },
  ],
  faqs: [
    { id: 1, q: "¿Cómo activo mi nuevo iPhone?",        a: "Enciende el iPhone, sigue los pasos en pantalla y conéctate a Wi-Fi o a tu operadora." },
    { id: 2, q: "¿Cómo hago una copia de seguridad?",   a: "Ve a Ajustes > [tu nombre] > iCloud > Copia de seguridad de iCloud y actívala." },
    { id: 3, q: "¿Cómo cancelo una suscripción?",       a: "Ve a Ajustes > [tu nombre] > Suscripciones y selecciona la que deseas cancelar." },
    { id: 4, q: "¿Qué cubre la garantía de Apple?",     a: "Apple cubre defectos de fabricación por 1 año. AppleCare+ extiende la cobertura y cubre daños accidentales." },
  ],
};

function SoportePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = soporteData.faqs.filter((f) =>
    f.q.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === ""
  );

  return (
    <div className="soporte-page">

      {/* Hero con buscador */}
      <section className="soporte-hero" style={{ backgroundColor: soporteData.hero.bgColor }}>
        <h1>{soporteData.hero.title}</h1>
        <h2>{soporteData.hero.subtitle}</h2>
        <input
          type="text"
          placeholder="Busca un producto o tema..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="soporte-search"
        />
      </section>

      {/* Categorías de productos */}
      <section className="soporte-categories">
        <h2 className="section-title">¿Con qué producto necesitas ayuda?</h2>
        <div className="categories-grid">
          {soporteData.categories.map((cat) => (
            <div
              key={cat.id}
              className={`category-card ${selectedCategory?.id === cat.id ? "selected" : ""}`}
              onClick={() => setSelectedCategory(selectedCategory?.id === cat.id ? null : cat)}
            >
              <span className="cat-icon">{cat.icon}</span>
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className="category-topics">
            <h3>Temas de ayuda para {selectedCategory.name}:</h3>
            <div className="topics-list">
              {selectedCategory.topics.map((topic, i) => (
                <button key={i} className="topic-btn">{topic}</button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Preguntas frecuentes */}
      <section className="soporte-faq">
        <h2 className="section-title">Preguntas frecuentes</h2>
        <div className="faq-list">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
              >
                {faq.q}
                <span>{openFaq === faq.id ? "▲" : "▼"}</span>
              </button>
              {openFaq === faq.id && (
                <div className="faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <p className="no-results">No se encontraron resultados para "{searchQuery}"</p>
          )}
        </div>
      </section>

      {/* Opciones de contacto */}
      <section className="soporte-contact">
        <h2 className="section-title">Comunícate con Apple</h2>
        <div className="contact-grid">
          {soporteData.contactOptions.map((opt) => (
            <div key={opt.id} className="contact-card">
              <span className="contact-icon">{opt.icon}</span>
              <h3>{opt.title}</h3>
              <p>{opt.desc}</p>
              <button className="btn-primary small">Iniciar</button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default SoportePage;