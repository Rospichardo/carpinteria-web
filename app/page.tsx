"use client"
import { useState } from "react"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
  ]

  return (
    <main
      style={{
        backgroundColor: "#f8f6f2",
        color: "#1f1f1f",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "50px",
          }}
        >
          Nuestros Trabajos
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >

          {proyectos.map((proyecto, index) => (
  <div
    key={index}
    className="group bg-white rounded-2xl shadow-md overflow-hidden 
               transition-all duration-300 
               hover:shadow-2xl hover:-translate-y-2"
  >
    <div className="overflow-hidden">
      <img
        src={proyecto.imagen}
        alt={proyecto.titulo}
        className="w-full h-80 object-cover 
                   transition-transform duration-500 
                   group-hover:scale-110"
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
      </div>
    </main>
  )
  
}