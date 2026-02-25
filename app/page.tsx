export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#3b2f2f] scroll-smooth">

      {/* HERO */}
      <section className="h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl tracking-widest mb-6 font-semibold">
          WOOD & METAL TREE
        </h1>

        <div className="w-24 h-[2px] bg-[#8b5e3c] mb-6"></div>

        <p className="max-w-xl text-lg mb-8 leading-relaxed">
          Diseñamos muebles interiores que transforman tu espacio.
          Calidad en madera, detalles en metal y acabados que hablan por sí solos.
        </p>

        <a
          href="#galeria"
          className="bg-[#8b5e3c] text-white px-8 py-3 rounded-full font-semibold hover:opacity-80 transition"
        >
          Ver trabajos
        </a>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-32 px-6 bg-white text-center min-h-screen">
        <h2 className="text-3xl font-semibold mb-10">
          Nuestros Trabajos
        </h2>

        <div className="max-w-4xl mx-auto">
          <img
            src="/imagenes/puertacorrediza.jpeg"
            alt="Puerta corrediza"
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
      </section>

    </main>
  )
}