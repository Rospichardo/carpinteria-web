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
    <main className="bg-[#f8f6f2] text-[#1f1f1f]">

      {/* HERO / PARTE SUPERIOR */}
      <section className="relative text-center py-32 px-6 
                    bg-gradient-to-b from-[#f8f6f2] to-[#e8e3d9]">
  
  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
    Carpintería en <br />
    San José del Cabo y Cabo San Lucas
  </h1>

  <p className="text-gray-600 text-lg md:text-xl 
                max-w-2xl mx-auto mb-10">
    Diseñamos y fabricamos muebles sobre medida con acabados
    de alta calidad y atención personalizada.
  </p>

  <a
    href="#galeria"
    className="inline-block bg-[#1f1f1f] text-white
               px-8 py-4 rounded-full
               hover:bg-black transition"
  >
    Ver nuestros trabajos
  </a>

</section>
      {/* GALERÍA */}
      <section id="galeria" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Trabajos
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
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
  onClick={() => setSelectedImage(proyecto.imagen)}
  className="w-full h-80 object-cover cursor-pointer
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
      </section>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/5216242198270"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        WhatsApp
      </a>

      {/* MODAL DE IMAGEN */}   
      {selectedImage && (
  <div
    className="fixed inset-0 bg-black/80
               flex items-center justify-center
               z-[9999]"
  >
    {/* BOTÓN X */}
    <button
      onClick={() => setSelectedImage(null)}
      className="absolute top-6 right-6
                 text-white text-3xl font-light
                 hover:scale-110 transition"
    >
      ×
    </button>

    {/* IMAGEN */}
    <img
      src={selectedImage}
      onClick={(e) => e.stopPropagation()}
      className="max-w-3xl w-[90%] max-h-[85vh]
                 object-contain rounded-xl"
    />
  </div>
)} 
      </main>
  )
}