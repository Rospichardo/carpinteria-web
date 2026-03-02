"use client";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main
      style={{
        backgroundColor: "#f5f1ea",
        color: "#1f1f1f",
        scrollBehavior: "smooth",
        fontFamily: "sans-serif",
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
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
            letterSpacing: "2px",
          }}
        >
          WOOD & METAL TREE
        </h1>

        <div
          style={{
            textAlign: "center",
            padding: "60px 20px 40px 20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              marginBottom: "20px",
            }}
          >
            🪵 Carpintería a Medida en San José del Cabo y Cabo San Lucas
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              marginBottom: "30px",
            }}
          >
            Creamos muebles personalizados que combinan diseño, funcionalidad y
            calidad. Cada proyecto es fabricado sobre medida, cuidando cada
            detalle desde la estructura hasta los acabados finales.
            <br />
            Trabajamos cocinas integrales, closets y mobiliario residencial
            adaptado a tu espacio y estilo.
          </p>

          <a
            href="https://wa.me/5216241234567"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#25D366",
              color: "white",
              padding: "15px 25px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
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
          padding: "120px 20px",
          backgroundColor: "white",
          textAlign: "center",
          minHeight: "100vh",
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
            margin: "0 auto",
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="card-hover"
              style={{
                backgroundColor: "white",
                borderRadius: "18px",
                padding: "20px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src="/imagenes/puertacorrediza.jpeg"
                alt="Puerta corrediza"
                onClick={() =>
                  setSelectedImage("/imagenes/puertacorrediza.jpeg")
                }
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "15px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                className="zoom-image"
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

      {/* Imagen ampliada */}
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

      {/* Botón WhatsApp fijo */}
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
        >
          <path d="M19.11 17.38c-.29-.14-1.71-.84-1.97-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.12-.6.12-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.43 1.02 2.82 1.16 3.01.14.19 2 3.06 4.84 4.29.68.29 1.21.47 1.62.6.68.21 1.29.18 1.78.11.54-.08 1.71-.7 1.95-1.38.24-.67.24-1.25.17-1.38-.07-.12-.26-.19-.55-.33z" />
          <path d="M26.6 5.4A15.92 15.92 0 0016.02 1C7.73 1 1 7.73 1 16c0 2.82.74 5.57 2.15 7.99L1 31l7.21-2.1A14.95 14.95 0 0016.02 31C24.31 31 31 24.27 31 16c0-4.27-1.66-8.29-4.4-10.6zM16.02 28.3c-2.41 0-4.76-.64-6.81-1.86l-.49-.29-4.28 1.25 1.29-4.17-.32-.51A12.27 12.27 0 013.7 16c0-6.8 5.52-12.32 12.32-12.32 3.29 0 6.39 1.28 8.71 3.61A12.26 12.26 0 0128.34 16c0 6.8-5.52 12.3-12.32 12.3z" />
        </svg>
      </a>
    </main>
  );
}
