export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#3b2f2f]">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 bg-[#f5f1ea]/80 backdrop-blur-md z-50">
        <h2 className="text-xl font-semibold tracking-wide">
          Wood & Metal Tree
        </h2>
        <div className="flex gap-8 text-sm">
          <a href="#galeria" className="hover:text-[#6b4f4f] transition">
            Galería
          </a>
          <a href="#contacto" className="hover:text-[#6b4f4f] transition">
            Contacto
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-32">

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Wood & Metal Tree
        </h1>

        <p className="mt-6 text-lg max-w-xl text-[#6b4f4f]">
          Diseñamos y fabricamos muebles únicos que combinan elegancia,
          funcionalidad y materiales de alta calidad.
        </p>

        <div className="mt-10 flex gap-6">
          <a
            href="#galeria"
            className="bg-[#6b4f4f] text-white px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Ver Trabajos
          </a>

          <a
            href="#contacto"
            className="border border-[#6b4f4f] px-6 py-3 rounded-md hover:bg-[#6b4f4f] hover:text-white transition"
          >
            Contactar
          </a>
        </div>

      </section>

      {/* Galería */}
     <section id="galeria" className="px-8 py-24">
  <h2 className="text-3xl font-bold text-center mb-12">
    Nuestros Trabajos
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    <img
  src="/imagenes/puertacorrediza.jpeg"
  className="h-64 w-full object-cover rounded-lg shadow-sm transition-transform duration-500 hover:scale-105"
/>
  </div>
</section>

      {/* Contacto */}
      <section id="contacto" className="px-8 py-24 bg-[#ebe3d8] text-center">
        <h2 className="text-3xl font-bold mb-6">
          Solicita una Cotización
        </h2>
        <p className="mb-8 text-[#6b4f4f]">
          Escríbenos y te ayudamos a crear el mueble perfecto para tu espacio.
        </p>
        <button className="bg-[#6b4f4f] text-white px-8 py-3 rounded-md hover:opacity-90 transition">
          Enviar Mensaje
        </button>
      </section>

    </main>
  )
}