# Toyota EGO - Proyecto Técnico

Sitio web profesional desarrollado para Toyota EGO siguiendo especificaciones de Figma, consumiendo datos desde la API de EGO Design.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 16.1.1 (App Router + Turbopack)
- **Lenguaje:** TypeScript (Strict Mode)
- **Estilos:** Tailwind CSS
- **React:** 19
- **Diseño:** Mobile-first, Responsive

## 🔌 API Consumida

El proyecto consume datos desde la API de EGO Design:

- **Listado de modelos:** `GET https://challenge.egodesign.dev/api/models/`
- **Detalle de modelo:** `GET https://challenge.egodesign.dev/api/models/{id}/`

Los datos incluyen información de vehículos, características (features) y destacados (highlights) con sus respectivas imágenes.

## ✨ Características

- Consumo de API REST para datos dinámicos
- Sistema de filtros por segmento (Sedan, Hatchback, SUVs, Pickups)
- Ordenamiento por precio y año
- Carrusel infinito con drag/touch support
- Páginas dinámicas de fichas de vehículos
- Componentes reutilizables siguiendo DRY
- Design tokens configurados en Tailwind

## 🛠️ Instalación

```bash
npm install
```

## 🏃‍♂️ Desarrollo

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📝 Estructura del Proyecto

```
src/
├── app/              # Rutas y layouts (Next.js App Router)
├── components/       # Componentes React
│   ├── ui/          # Componentes base (Button, Slider, etc.)
│   ├── layout/      # Header, Footer, Menu
│   └── sections/    # Secciones de página
├── hooks/           # Custom hooks
├── lib/             # API, utilidades y constantes
└── types/           # Tipos TypeScript
```

## 🌐 Deploy en Netlify

Este proyecto está configurado para desplegarse en Netlify:

1. Conectá tu repositorio de GitHub con Netlify
2. La configuración de build está en `netlify.toml`
3. El plugin `@netlify/plugin-nextjs` se instalará automáticamente

## 👨‍💻 Desarrollado por

**Adrián** - [LinkedIn](https://www.linkedin.com/in/adrian4058) | adrian_2016_@outlook.es

Desarrollador Full-Stack de Sunchales, Santa Fe, Argentina

---

Proyecto desarrollado con asistencia de Claude AI (Opus & Sonnet)
