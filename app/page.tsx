export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#f5f1ea",
        color: "#1f1f1f",
        scrollBehavior: "smooth"
      }}
    >
      {/* HERO */}
      <section
        style={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
            letterSpacing: "2px"
          }}
        >
          WOOD & METAL TREE
        </h1>

        <div
          style={{
            width: "80px",
            height: "2px",
            backgroundColor: "#8b5e3c",
            marginBottom: "20px"
          }}
        ></div>

        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            marginBottom: "30px",
            lineHeight: "1.6"
          }}
        >
          Diseñamos muebles interiores que transforman tu espacio.
          Calidad en madera, detalles en metal y acabados que hablan por sí solos.
        </p>

        <a
          href="#galeria"
          style={{
            backgroundColor: "#8b5e3c",
            color: "white",
            padding: "12px 30px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Ver trabajos
        </a>
      </section>

      {/* GALERÍA */}
      <section
        id="galeria"
        style={{
          padding: "120px 20px",
          backgroundColor: "white",
          textAlign: "center",
          minHeight: "100vh"
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "40px"
          }}
        >
          Nuestros Trabajos
        </h2>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <img
            src="/imagenes/puertacorrediza.jpeg"
            alt="Puerta corrediza"
            style={{
              width: "100%",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
            }}
          />
        </div>

      </section>
    </main>
  )
}