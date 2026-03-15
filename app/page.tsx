"use client"

import React, { useState } from "react"

export default function Home() {


const [position, setPosition] = useState({ x: 0, y: 0 })
const [isDragging, setIsDragging] = useState(false)
const [start, setStart] = useState({ x: 0, y: 0 })

const [selectedProject, setSelectedProject] = useState<number | null>(null)
const [selectedIndex, setSelectedIndex] = useState(0)
const [selectedImage, setSelectedImage] = useState<string | null>(null)
const [zoom, setZoom] = useState(1)
const [touchStart, setTouchStart] = useState(0)
const [touchEnd, setTouchEnd] = useState(0)


const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
  e.preventDefault()

  const zoomSpeed = 0.001
  const newZoom = zoom - e.deltaY * zoomSpeed

    if (newZoom >= 1 && newZoom <= 3) {
    setZoom(newZoom)
  }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

const handleMouseMove = (e: React.MouseEvent) => {
  if (!isDragging) return

  setPosition({
    x: e.clientX - start.x,
    y: e.clientY - start.y,
  })
}

const handleMouseUp = () => {
  setIsDragging(false)
}

const handleTouchStart = (e: React.TouchEvent) => {
  setTouchStart(e.targetTouches[0].clientX)
}

const handleTouchMove = (e: React.TouchEvent) => {
  setTouchEnd(e.targetTouches[0].clientX)
}

const handleTouchEnd = () => {

  if (zoom > 1) return

  if (!touchStart || !touchEnd) return

  const distance = touchStart - touchEnd
  const minSwipeDistance = 50

  if (distance > minSwipeDistance) {
    setSelectedIndex(
      (selectedIndex + 1) %
      proyectos[selectedProject ?? 0].imagenes.length
    )
  }

  if (distance < -minSwipeDistance) {
    setSelectedIndex(
      (selectedIndex - 1 + proyectos[selectedProject ?? 0].imagenes.length) %
      proyectos[selectedProject ?? 0].imagenes.length
    )
  }
}
  const proyectos = [
  {
    titulo: "Puerta Corrediza",
    descripcion: "Fabricación e instalación personalizada",
    imagenes: [
      "/imagenes/puerta1.jpeg",
      "/imagenes/puerta2.jpeg",
      "/imagenes/puerta3.jpeg",
    ],
  },
  {
    titulo: "Cocina Integral",
    descripcion: "Diseño sobre medida",
    imagenes: [
      "/imagenes/cocina1.jpeg",
      "/imagenes/cocina2.jpeg",
      "/imagenes/cocina3.jpeg",
      "/imagenes/cocina4.jpeg",
      "/imagenes/cocina5.jpeg",  
      "/imagenes/cocina6.jpeg",

    ],
  },
]
  return (
 <main className="pt-20">

<header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

    {/* LOGO */}
    <div className="flex items-center gap-3">
      <img
        src="/imagenes/logo.png"
        alt="Logo Carpintería"
        className="h-12 w-auto"
      />
      <span className="font-semibold text-lg text-gray-800">
        Carpintería
      </span>
    </div>

    {/* MENU */}
    <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
      <a href="#inicio" className="hover:text-green-600">Inicio</a>
      <a href="#trabajos" className="hover:text-green-600">Trabajos</a>
      <a href="#contacto" className="hover:text-green-600">Contacto</a>
    </nav>

    {/* BOTON */}
    <a
      href="https://wa.me/526242198270"
      target="_blank"
      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
    >
      Cotizar proyecto
    </a>

  </div>
</header>


      {/* HERO / PARTE SUPERIOR */}
  <section
  style={{
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",

    backgroundImage: "url('/imagenes/inicio.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>

  {/* capa oscura */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* contenido */}
  <div className="relative z-10 px-6">

  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
  Carpintería a Medida
  <br />
  en San José del Cabo
</h1>

<p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white drop-shadow-lg">
      Diseñamos y fabricamos muebles personalizados con acabados
      de alta calidad para tu hogar o negocio.
    </p>

  </div>

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
               transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
  >
    <div className="overflow-hidden">
      <img
        src={proyecto.imagenes[0]}
        alt={proyecto.titulo}
        onClick={() => {
          setSelectedProject(index)
          setSelectedIndex(0)
        }}
        className="w-full h-80 object-cover cursor-pointer
                   transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="p-6 text-center">
      <h3 className="text-xl font-semibold">{proyecto.titulo}</h3>
      <p className="text-gray-500 mt-2">{proyecto.descripcion}</p>
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

{/* FOOTER */}
<footer className="bg-gray-900 text-white mt-20">
  <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

    {/* Empresa */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Carpintería</h3>
      <p className="text-gray-400">
        Diseñamos y fabricamos muebles personalizados con materiales de alta calidad.
        Trabajos de carpintería a medida para hogares y negocios en San José del Cabo.
      </p>
    </div>

    {/* Contacto */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Contacto</h3>

      <p className="text-gray-400">📍 San José del Cabo, Baja California Sur</p>
      <p className="text-gray-400">📞 WhatsApp: +52 624 219 8270</p>
      <p className="text-gray-400">📧 mego9291@gmail.com</p>
    </div>

    {/* Servicios */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Servicios</h3>

      <ul className="text-gray-400 space-y-2">
        <li>Muebles a medida</li>
        <li>Cocinas integrales</li>
        <li>Puertas y closets</li>
        <li>Trabajos en madera</li>
      </ul>
    </div>

  </div>

  <div className="border-t border-gray-700 text-center py-6 text-gray-400 text-sm">
    © {new Date().getFullYear()} Carpintería. Todos los derechos reservados.
  </div>
</footer>

{/*VISOR DE IMAGENES */}

{selectedProject !== null && (
  <div
    onClick={() => setSelectedProject(null)}
    className="fixed inset-0 bg-black bg-opacity-90 
               flex flex-col items-center justify-center 
               z-50"
  >
    {/* cerrar */}
    <button
      onClick={() => setSelectedProject(null)}
      className="absolute top-6 right-6 text-white text-3xl"
    >
      ✕
    </button>

    {/* flecha izquierda */}
    <button 
      onClick={(e) => {
  e.stopPropagation()
  setSelectedIndex(
    (selectedIndex - 1 + proyectos[selectedProject].imagenes.length) %
      proyectos[selectedProject].imagenes.length
  )
  setZoom(1)
  setPosition({ x: 0, y: 0 })
}}
  
      className="absolute left-6 text-white text-4xl"
    >
      ←
    </button>

{/* imagen grande */}
<div
  onClick={(e) => e.stopPropagation()}
  onWheel={handleWheel}
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
  onMouseLeave={handleMouseUp}
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
  className="overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"
>
  <img
  src={proyectos[selectedProject].imagenes[selectedIndex]}
  onDoubleClick={() => setZoom(zoom === 1 ? 2 : 1)}
  style={{
    transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`
  }}
  className="max-w-6xl w-full max-h-[90vh] object-contain transition-all duration-300 scale-95 animate-[fadeIn_.3s_ease]"
/>
</div>

{/* miniaturas */}
<div className="flex gap-3 mt-6">
  {proyectos[selectedProject].imagenes.map((img, i) => (
    <img
      key={i}
      src={img}
      onClick={(e) => {
        e.stopPropagation()
        setSelectedIndex(i)
        setPosition({ x: 0, y: 0 })
        setZoom(1)
}}
      className={`w-20 h-20 object-cover cursor-pointer rounded-lg border-2 
      ${selectedIndex === i ? "border-white" : "border-transparent"}`}
    
    />
  ))}
</div>
    

    {/* flecha derecha */}
    <button
      onClick={(e) => {
  e.stopPropagation()
  setSelectedIndex(
    (selectedIndex + 1) %
      proyectos[selectedProject].imagenes.length
  )
  setZoom(1)
  setPosition({ x: 0, y: 0 })
}}
      className="absolute right-6 text-white text-4xl"
    >
      →
    </button>
  </div>
)}
      </main>
      
  )
}
