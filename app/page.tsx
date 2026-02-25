export default function Home() {
  return (
    <main style={{ backgroundColor: "#f5f1ea", color: "#1f1f1f" }}>

  <section style={{
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px"
  }}>
    
    <h1 style={{
      fontSize: "3rem",
      marginBottom: "20px",
      letterSpacing: "2px"
    }}>
      WOOD & METAL TREE
    </h1>

    <p style={{
      fontSize: "1.2rem",
      maxWidth: "600px",
      marginBottom: "30px",
      lineHeight: "1.6"
    }}>
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

</main>
)
}