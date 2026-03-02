"use client"
import { useState } from "react"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
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
  <h2 style={{ fontSize: "2rem", marginBottom: "60px" }}>
    Nuestros Trabajos
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
      maxWidth: "1100px",
      margin: "0 auto"
    }}
  >

    {[1,2,3,4].map((item) => (
      <div
        key={item}
        className="card-hover"
        style={{
          backgroundColor: "white",
          borderRadius: "18px",
          padding: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          transition: "transform 0.3s ease"
        }}
      >
        <img
          src="/imagenes/puertacorrediza.jpeg"
          alt="Puerta corrediza"
          className="zoom-image"
          onClick={() => setSelectedImage("/imagenes/puertacorrediza.jpeg")}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "15px",
            cursor: "pointer"
          }}
        />

        <h3 style={{ fontSize: "1.1rem", marginBottom: "5px" }}>
          Puerta Corrediza
        </h3>

        <p style={{ color: "#777", fontSize: "0.9rem" }}>
          Muebles Interiores
        </p>
      </div>
    ))}

  </div>

</section>

{selectedImage && (
  <div
    onClick={() => setSelectedImage(null)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}
  >
    <img
      src={selectedImage}
      alt="Imagen ampliada"
      style={{
        maxWidth: "90%",
        maxHeight: "90%",
        borderRadius: "15px"
      }}
    />
  </div>
)}

<a
  href="https://wa.me/5216242198270"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    backgroundColor: "#25D366",
    color: "white",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    textDecoration: "none",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    zIndex: 1000
  }}
>
  💬
</a>

    </main>
  );
} 