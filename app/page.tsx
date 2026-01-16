import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-neutral-900 sm:text-5xl">Toyota EGO - Proyecto Técnico</h1>
          <p className="text-lg text-neutral-600">
            Desarrollo de sitio web profesional siguiendo especificaciones de Figma
          </p>
        </div>

        <div className="mb-12 rounded-lg border border-neutral-200 bg-neutral-50 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Sobre el Proyecto</h2>
          <div className="space-y-4 text-base leading-relaxed text-neutral-700">
            <p>
              Este proyecto fue desarrollado como parte de una prueba técnica, donde el objetivo principal era
              implementar un sitio web para Toyota EGO siguiendo fielmente el diseño proporcionado en Figma. La idea era
              demostrar capacidad técnica, atención al detalle y buenas prácticas de desarrollo frontend.
            </p>
            <p>
              La implementación se realizó utilizando <strong>Next.js 16</strong> con <strong>App Router</strong> y{" "}
              <strong>Turbopack</strong>, <strong>TypeScript</strong> en modo estricto y <strong>Tailwind CSS</strong>{" "}
              para los estilos. Todo el desarrollo siguió un enfoque mobile-first y se priorizó la creación de
              componentes reutilizables y escalables.
            </p>
            <p>
              Lo interesante de este proyecto es que fue desarrollado íntegramente con asistencia de{" "}
              <strong>Claude AI</strong> (modelos Opus y Sonnet), lo que permitió acelerar el proceso de desarrollo sin
              sacrificar calidad. Cada componente fue diseñado siguiendo las mejores prácticas de React y Next.js,
              manteniendo el código limpio y bien estructurado.
            </p>
            <p className="rounded-md bg-amber-50 p-4 text-sm">
              <strong>Nota:</strong> Tenía hasta ayer para entregar este trabajo, pero como actualmente trabajo full
              time en EasyLife Marketing y la semana pasada estuve de vacaciones, tuve menos días para realizarlo. Aún
              así, me aseguré de entregar un producto de calidad que refleje mis capacidades técnicas.
            </p>
          </div>
        </div>

        <div className="mb-12 rounded-lg border border-neutral-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Stack Tecnológico</h2>
          <ul className="grid gap-3 text-base text-neutral-700 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="text-red-600">▪</span> Next.js 16.1.1 (App Router + Turbopack)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-600">▪</span> TypeScript (Strict Mode)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-600">▪</span> Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-600">▪</span> React 19
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-600">▪</span> Custom Hooks
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-600">▪</span> Responsive Design
            </li>
          </ul>
        </div>

        <div className="mb-12 rounded-lg border border-neutral-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Características Implementadas</h2>
          <ul className="space-y-2 text-base text-neutral-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-600">▪</span>
              <span>Navegación responsive con menú hamburguesa y overlay en desktop</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-600">▪</span>
              <span>Sistema de filtros y ordenamiento de vehículos (tabs en desktop, dropdowns en mobile)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-600">▪</span>
              <span>Carrusel infinito con drag/touch support y animaciones suaves</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-600">▪</span>
              <span>Páginas dinámicas de fichas de modelos con rutas [slug]</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-600">▪</span>
              <span>Componentes reutilizables siguiendo principios DRY</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-600">▪</span>
              <span>Design tokens configurados en Tailwind para mantener consistencia</span>
            </li>
          </ul>
        </div>

        <div className="mb-12 rounded-lg border border-red-600 bg-red-50 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-neutral-900">Sobre Mí</h2>
          <div className="space-y-4 text-base leading-relaxed text-neutral-700">
            <p>
              Soy <strong>Adrián</strong>, desarrollador Full-Stack de Sunchales, Santa Fe, Argentina. Actualmente me
              desempeño como <strong>Desarrollador Web en EasyLife Marketing</strong> (desde octubre 2024), donde
              trabajo con WordPress, HubSpot y CSS bajo metodología ágil Scrum.
            </p>
            <p>
              Mi formación combina la{" "}
              <strong>Tecnicatura Informática aplicada al Diseño Multimedia y de Sitios Web</strong> en la Universidad
              Nacional del Litoral (UNL) con una sólida base técnica como <strong>Técnico Electromecánico</strong>. Mi
              interés por la programación comenzó trabajando con Controladores Lógicos Programables (PLC) en la materia
              de Automatización, y desde entonces no paré de aprender.
            </p>
            <p>
              Tengo experiencia profesional en diferentes empresas internacionales: trabajé en{" "}
              <strong>Smart Air</strong> (Hong Kong) desarrollando con Next.js, Python/Django y sistemas de
              geolocalización; en <strong>Escrito Space</strong> con Next.js, Django y AWS; en{" "}
              <strong>iCreativa Digital</strong> (Colombia) con React y GSAP; y en <strong>Alas Empresa Junior</strong>,
              brindando soluciones informáticas.
            </p>
            <p>
              Entre mis proyectos destacados está <strong>Mi Vete</strong>, un sistema de recompensas para veterinarias
              con más de <strong>500 clientes registrados</strong> y <strong>300+ interacciones mensuales</strong>,
              desarrollado con React, Node.js, PostgreSQL y Zustand. También trabajé en proyectos como BooksStore
              (e-commerce con Redux y MercadoPago), bot de WhatsApp con IA y n8n, y varios sitios corporativos
              freelance.
            </p>
            <p>
              Me apasiona seguir aprendiendo cada día y mantenerme actualizado con las nuevas tecnologías. Desde chico,
              la curiosidad por resolver problemas en dispositivos electrónicos me llevó a explorar la electrónica,
              electricidad e informática, y esa misma curiosidad me impulsa hoy en el desarrollo web.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://github.com/adrian4058/ego-pruebatecnica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Ver Repositorio
            </a>
            <a
              href="https://www.linkedin.com/in/adrian4058"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-900 bg-white px-6 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:adrian_2016_@outlook.es"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-900 bg-white px-6 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              adrian_2016_@outlook.es
            </a>
          </div>
        </div>

        <div className="rounded-lg bg-neutral-50 p-8 text-center">
          <p className="mb-4 text-base text-neutral-700">Explorá el proyecto navegando por las secciones:</p>
          <Link
            href="/modelos"
            className="inline-block rounded-md bg-red-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-red-700"
          >
            Ver Catálogo de Modelos
          </Link>
        </div>
      </div>
    </main>
  );
}
