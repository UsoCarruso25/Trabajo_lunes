import { useState, useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    tagline: "Titanio. Tan pro. Tan iPhone.",
    description: "El chip A18 Pro. Cámara de 48 MP con zoom óptico 5x. Diseño en titanio grado aeroespacial.",
    price: "Desde $5.999.000",
    bg: "#1d1d1f",
    accent: "#f5f5f7",
    image: "📱",
  },
  {
    id: 2,
    name: "MacBook Air M3",
    tagline: "Alas de aire. Potencia de M3.",
    description: "El chip M3 lleva el rendimiento y la eficiencia a nuevas alturas. Ultradelgado, silencioso.",
    price: "Desde $4.499.000",
    bg: "#f5f5f7",
    accent: "#1d1d1f",
    image: "💻",
  },
  {
    id: 3,
    name: "Apple Watch Ultra 2",
    tagline: "El reloj más capaz de Apple.",
    description: "Carcasa de titanio de 49 mm. GPS de doble frecuencia. Resistencia al agua hasta 100 m.",
    price: "Desde $3.999.000",
    bg: "#000000",
    accent: "#ff6b00",
    image: "⌚",
  },
  {
    id: 4,
    name: "iPad Pro M4",
    tagline: "Absolutamente increíblemente delgado.",
    description: "El iPad más delgado jamás creado. Pantalla Ultra Retina XDR OLED tandem. Chip M4.",
    price: "Desde $3.299.000",
    bg: "#e8e8ed",
    accent: "#1d1d1f",
    image: "🖥️",
  },
];

const navLinks = ["Mac", "iPad", "iPhone", "Watch", "AirPods", "TV y Hogar", "Soporte"];

const footerCols = [
  { title: "Tienda", links: ["Encuentra una tienda", "Genius Bar", "Today at Apple", "Apple Camp"] },
  { title: "Apple Wallet", links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"] },
  { title: "Cuenta", links: ["Gestiona tu Apple ID", "Apple Store", "iCloud", "Apple Media"] },
  { title: "Apple Store", links: ["Encontrar tienda", "Especialistas", "Apple Trade In", "Financiación"] },
  { title: "Para empresas", links: ["Apple y negocios", "Compra para negocios", "Apple Business Manager", "Empresas"] },
];

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setNavOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navScrolled = scrollY > 50;

  return (
    <div style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: "#000", color: "#f5f5f7", overflowX: "hidden" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: navScrolled || navOpen ? "rgba(22,22,23,0.92)" : "transparent",
        backdropFilter: navScrolled || navOpen ? "blur(20px)" : "none",
        WebkitBackdropFilter: navScrolled || navOpen ? "blur(20px)" : "none",
        transition: "background 0.3s ease",
        borderBottom: navScrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 52 }}>
          <div style={{ fontSize: 22, cursor: "pointer", color: "#f5f5f7", minWidth: 32 }}>
          </div>

          {!isMobile && (
            <div style={{ display: "flex", gap: 24, alignItems: "center", flex: 1, justifyContent: "center" }}>
              {navLinks.map((link) => (
                <span key={link} style={{ fontSize: 12, color: "rgba(245,245,247,0.8)", cursor: "pointer", letterSpacing: 0.1, transition: "color 0.2s", whiteSpace: "nowrap" }}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = "rgba(245,245,247,0.8)"}
                >{link}</span>
              ))}
            </div>
          )}

          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span style={{ fontSize: 16, cursor: "pointer" }}>🔍</span>
            <span style={{ fontSize: 16, cursor: "pointer" }}>🛍️</span>
            {isMobile && (
              <button onClick={() => setNavOpen(!navOpen)} style={{
                background: "none", border: "none", color: "#f5f5f7", cursor: "pointer",
                fontSize: 22, padding: 0, lineHeight: 1, display: "flex", alignItems: "center",
              }}>
                {navOpen ? "✕" : "☰"}
              </button>
            )}
          </div>
        </div>

        {isMobile && navOpen && (
          <div style={{ padding: "12px 24px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {navLinks.map((link) => (
              <div key={link} onClick={() => setNavOpen(false)} style={{
                padding: "14px 0", fontSize: 17, color: "rgba(245,245,247,0.85)", cursor: "pointer",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>{link}</div>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{
        minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(180deg, #000 0%, #0a0a0f 60%, #111 100%)",
        position: "relative", overflow: "hidden", padding: "120px 20px 80px", textAlign: "center",
      }}>
        <div style={{
          position: "absolute", width: isMobile ? 300 : 700, height: isMobile ? 300 : 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,113,227,0.15) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -60%)", pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: isMobile ? 14 : 19, color: "#2997ff", fontWeight: 600, letterSpacing: 0.3, marginBottom: 12, animation: "fadeUp 0.8s ease both" }}>
            Novedades de Apple
          </p>
          <h1 style={{
            fontSize: "clamp(38px, 10vw, 96px)", fontWeight: 700, lineHeight: 1.05,
            background: "linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", margin: "0 0 20px", letterSpacing: -2,
            animation: "fadeUp 0.9s 0.1s ease both",
          }}>
            iPhone 16 Pro
          </h1>
          <p style={{
            fontSize: "clamp(16px, 3vw, 26px)", color: "rgba(245,245,247,0.7)", fontWeight: 300,
            maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.4,
            animation: "fadeUp 1s 0.2s ease both",
          }}>
            Titanio. Tan pro. Tan iPhone.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 1s 0.3s ease both" }}>
            <button style={{
              background: "#2997ff", color: "#fff", border: "none", borderRadius: 980,
              padding: isMobile ? "12px 24px" : "14px 30px", fontSize: isMobile ? 15 : 17, fontWeight: 500, cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.target.style.background = "#0071e3"; e.target.style.transform = "scale(1.03)"; }}
              onMouseLeave={e => { e.target.style.background = "#2997ff"; e.target.style.transform = "scale(1)"; }}
            >Comprar</button>
            <button style={{
              background: "transparent", color: "#2997ff", border: "none",
              padding: isMobile ? "12px 16px" : "14px 24px", fontSize: isMobile ? 15 : 17, fontWeight: 500, cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#5ac8fa"}
              onMouseLeave={e => e.target.style.color = "#2997ff"}
            >Más información →</button>
          </div>
        </div>

        <div style={{
          marginTop: 48, fontSize: "clamp(72px, 18vw, 180px)",
          animation: "float 4s ease-in-out infinite",
          filter: "drop-shadow(0 30px 50px rgba(0,113,227,0.3))",
        }}>📱</div>
      </section>

      {/* ── PRODUCTS ── */}
      <section style={{ padding: isMobile ? "56px 16px" : "80px 24px", background: "#000" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 5vw, 52px)", fontWeight: 700, marginBottom: isMobile ? 32 : 52, letterSpacing: -1 }}>
            La línea completa.
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 16,
          }}>
            {products.map((product) => (
              <div key={product.id}
                style={{
                  background: product.bg, borderRadius: 20,
                  padding: isMobile ? "32px 22px" : "48px 36px",
                  cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <p style={{ fontSize: 11, fontWeight: 600, color: "#2997ff", marginBottom: 8, letterSpacing: 0.8, textTransform: "uppercase" }}>Nuevo</p>
                <h3 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: product.accent, marginBottom: 6, letterSpacing: -0.5 }}>{product.name}</h3>
                <p style={{ fontSize: 15, color: product.accent === "#1d1d1f" ? "#6e6e73" : "rgba(245,245,247,0.6)", marginBottom: 20, lineHeight: 1.5 }}>{product.tagline}</p>
                <div style={{ fontSize: isMobile ? 52 : 64, marginBottom: 16 }}>{product.image}</div>
                <p style={{ fontSize: 13, color: product.accent === "#1d1d1f" ? "#6e6e73" : "rgba(245,245,247,0.5)", lineHeight: 1.6, marginBottom: 16 }}>{product.description}</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: product.accent === "#1d1d1f" ? "#1d1d1f" : product.accent, marginBottom: 20 }}>{product.price}</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button style={{
                    background: "#2997ff", color: "#fff", border: "none", borderRadius: 980,
                    padding: "9px 20px", fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "background 0.2s",
                  }}
                    onMouseEnter={e => e.target.style.background = "#0071e3"}
                    onMouseLeave={e => e.target.style.background = "#2997ff"}
                  >Comprar</button>
                  <button style={{ background: "transparent", color: "#2997ff", border: "none", padding: "9px 4px", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
                    Más info →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHIP STATS ── */}
      <section style={{ padding: isMobile ? "56px 20px" : "100px 24px", background: "linear-gradient(180deg, #000 0%, #0a0a14 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,113,227,0.1) 0%, transparent 70%)",
          top: "50%", right: isMobile ? -150 : -80, transform: "translateY(-50%)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: isMobile ? 13 : 17, color: "#2997ff", fontWeight: 600, marginBottom: 14, letterSpacing: 0.3 }}>Chip A18 Pro</p>
          <h2 style={{
            fontSize: "clamp(28px, 7vw, 76px)", fontWeight: 700, letterSpacing: -2, marginBottom: 22, lineHeight: 1.05,
            background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.4) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Potencia que redefine lo posible.
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 19, color: "rgba(245,245,247,0.6)", lineHeight: 1.6, maxWidth: 680, margin: "0 auto 48px", fontWeight: 300 }}>
            Con el chip A18 Pro de Apple, el iPhone 16 Pro lleva el rendimiento de IA directamente a tu bolsillo. Más rápido. Más eficiente. Más inteligente.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 28 : 40, maxWidth: 800, margin: "0 auto" }}>
            {[
              { value: "A18", label: "Chip Pro de última generación" },
              { value: "4K", label: "Video ProRes a 120 fps" },
              { value: "5x", label: "Zoom óptico profesional" },
            ].map((stat) => (
              <div key={stat.value} style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 700, letterSpacing: -2,
                  background: "linear-gradient(135deg, #2997ff, #5ac8fa)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>{stat.value}</div>
                <p style={{ fontSize: 14, color: "rgba(245,245,247,0.5)", marginTop: 8, lineHeight: 1.4 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER CTA ── */}
      <section style={{
        margin: isMobile ? "0 12px 16px" : "0 24px 20px", borderRadius: 20, overflow: "hidden",
        background: "linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 100%)",
        padding: isMobile ? "52px 20px" : "80px 48px", textAlign: "center", position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse at center top, rgba(0,113,227,0.15) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <p style={{ fontSize: isMobile ? 13 : 17, color: "#2997ff", fontWeight: 600, marginBottom: 14, position: "relative" }}>Apple Intelligence</p>
        <h2 style={{
          fontSize: "clamp(26px, 6vw, 60px)", fontWeight: 700, marginBottom: 18, letterSpacing: -1.5, position: "relative",
        }}>IA personal. Privacidad primero.</h2>
        <p style={{ fontSize: isMobile ? 15 : 18, color: "rgba(245,245,247,0.6)", maxWidth: 540, margin: "0 auto 36px", lineHeight: 1.6, fontWeight: 300, position: "relative" }}>
          Apple Intelligence es el sistema de IA personal que entiende tu contexto, tu privacidad y tu mundo.
        </p>
        <button style={{
          background: "#fff", color: "#000", border: "none", borderRadius: 980,
          padding: isMobile ? "12px 26px" : "16px 36px", fontSize: isMobile ? 15 : 17, fontWeight: 600, cursor: "pointer",
          transition: "all 0.2s", position: "relative",
        }}
          onMouseEnter={e => { e.target.style.background = "#e5e5e7"; e.target.style.transform = "scale(1.03)"; }}
          onMouseLeave={e => { e.target.style.background = "#fff"; e.target.style.transform = "scale(1)"; }}
        >Descubrir más</button>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: isMobile ? "32px 20px 48px" : "48px 24px 64px", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 40 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(5, 1fr)",
            gap: isMobile ? 24 : 32, marginBottom: 32,
          }}>
            {footerCols.map((col) => (
              <div key={col.title}>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#f5f5f7", marginBottom: 10, letterSpacing: 0.2 }}>{col.title}</p>
                {col.links.map((link) => (
                  <p key={link} style={{ fontSize: 12, color: "#6e6e73", marginBottom: 7, cursor: "pointer", transition: "color 0.2s", lineHeight: 1.4 }}
                    onMouseEnter={e => e.target.style.color = "#f5f5f7"}
                    onMouseLeave={e => e.target.style.color = "#6e6e73"}
                  >{link}</p>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 18 }}>
            <p style={{ fontSize: 12, color: "#6e6e73", marginBottom: 10 }}>
              Copyright © 2026 Apple Inc. Todos los derechos reservados.
            </p>
            <div style={{ display: "flex", gap: isMobile ? 10 : 20, flexWrap: "wrap" }}>
              {["Privacidad", "Condiciones de uso", "Ventas y reembolsos", "Legal", "Mapa del sitio"].map((link) => (
                <span key={link} style={{ fontSize: 12, color: "#6e6e73", cursor: "pointer" }}>{link}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
      `}</style>
    </div>
  );
}
