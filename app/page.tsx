"use client";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const proyectos = [
    {
      imagen: "/imagenes/puertacorrediza.jpeg",
      titulo: "Puerta Corrediza",
      descripcion: "Fabricación e instalación personalizada",
    },
    {
      imagen: "/imagenes/puertados.jpeg",
      titulo: "Cocina Integral",
      descripcion: "Diseño sobre medida",
    },
  ];

  return (
    <main
      style={{
        backgroundColor: "#faf8f4",
        color: "#1f1f1f",
        scrollBehavior: "smooth",
        fontFamily: "sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            letterSpacing: "4px",
            marginBottom: "30px",
          }}
        >
          WOOD & METAL TREE
        </h1>

        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "20px",
              fontWeight: 500,
            }}
          >
            🪵 Carpintería a Medida en San José del Cabo y Cabo San Lucas
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              marginBottom: "35px",
            }}
          >
            Creamos muebles personalizados que combinan diseño, funcionalidad y
            calidad. Cada proyecto es fabricado sobre medida, cuidando cada
            detalle desde la estructura hasta los acabados finales.
            <br />
            <br />
            Trabajamos cocinas integrales, closets y mobiliario residencial
            adaptado a tu espacio y estilo.
          </p>

          <a
            href="https://wa.me/5216242198270"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#25D366",
              color: "white",
              padding: "15px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            }}
          >
            📲 Solicita tu cotización por WhatsApp
          </a>
        </div>
      </section>

      {/* GALERÍA */}
      <section
        id="galeria"
        style={{
          padding: "100px 20px",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "50px" }}>
          Nuestros Trabajos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
         {proyectos.map((proyecto, index) => (
  <div
    key={index}
    className="bg-white rounded-2xl shadow-md overflow-hidden 
               transition-all duration-300 
               hover:shadow-2xl hover:-translate-y-2"
  >
    <div className="overflow-hidden">
      <img
        src={proyecto.imagen}
        alt={proyecto.titulo}
        className="w-full h-80 object-cover 
                   transition-transform duration-500 
                   hover:scale-110"
      />
    </div>

    <div className="p-6 text-center">
      <h3 className="text-xl font-semibold">
        {proyecto.titulo}
      </h3>
      <p className="text-gray-500 mt-2">
        {proyecto.descripcion}
      </p>
    </div>
  </div>
))}
        </div>
      </section>

      {/* MODAL IMAGEN */}
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
            zIndex: 1000,
          }}
        >
          <img
            src={selectedImage}
            alt="Imagen ampliada"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "15px",
            }}
          />
        </div>
      )}

      {/* BOTÓN WHATSAPP FIJO */}
      <a
        href="https://wa.me/5216242198270"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          zIndex: 1001,
          textDecoration: "none",
        }}
      >
        <span style={{ fontSize: "24px", color: "white" }}>💬</span>
      </a>
    </main>
  );
}
