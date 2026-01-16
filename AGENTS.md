# 🧠 AGENTS.md — Frontend Development Guidelines (Visual Reference Mode)

## 🎯 Objetivo del Proyecto
Desarrollar un sitio web profesional utilizando **Next.js (App Router)**, **TypeScript** y **Tailwind CSS** con enfoque movile first.  
Debido a que no se cuenta con acceso al editor de Figma, el agente deberá basar el desarrollo en **capturas de pantalla**, priorizando la interpretación precisa de la jerarquía visual y la creación de un sistema de diseño coherente.

## 🧱 Stack Tecnológico
- **Framework:** Next.js 14+ (App Router)
- **Lenguaje:** TypeScript (Strict Mode)
- **Estilos:** Tailwind CSS (Utility-first)
- **Componentes:** React Functional Components
- **Renderizado:** Server Components por defecto; Client Components solo para interactividad
- **Comentarios** Comenta lo minimo indispensable con JSDoc, tampoco abuses de los comentarios, solo donde sean necesarios
---

## 📸 Estrategia de Interpretación Visual (Screenshots)
Al no poder inspeccionar el CSS en Figma, el agente debe seguir este proceso:

1. **Extracción de Tokens**  
   Analizar las imágenes para identificar colores (usar herramientas de color picker si están disponibles), familias tipográficas (Sans, Serif, etc.) y escalas de espaciado.

2. **Escala Lógica**  
   No inventar valores aleatorios. Si un espaciado parece de 30px, usar la clase de Tailwind más cercana (`gap-8` para 32px) para mantener la consistencia del sistema de diseño.

3. **Consistencia entre Capturas**  
   Asegurar que los componentes que se repiten en distintas imágenes (Header, Buttons, Cards) mantengan las mismas proporciones y estilos.

4. **Inferencia de Estados**  
   Diseñar estados `hover`, `focus` y `active` de forma lógica y sutil, basándose en la estética general de las capturas.

---

## 📁 Arquitectura y Organización (`src/`)

Estructura obligatoria para asegurar orden y escalabilidad:

```text
src/
├── app/               # Rutas, layouts y metadata
├── components/        # Componentes divididos por jerarquía
│   ├── ui/            # Átomos (Button, Input, Badge, etc.)
│   ├── layout/        # Estructura global (Header, Footer, Container)
│   └── sections/      # Secciones de página (Hero, Features, Pricing)
├── hooks/             # Custom hooks
├── lib/               # Utilidades, constantes y configuración
├── types/             # Definiciones de interfaces y tipos TS
└── styles/            # CSS global y configuración de fuentes
```

---

## 🔤 Reglas de Naming & Casing (OBLIGATORIAS)

### 1. Carpetas y Archivos
- **Carpetas de Componentes:** PascalCase  
  Ejemplo: `src/components/ui/PrimaryButton/`

- **Archivos de Componentes:** PascalCase  
  Ejemplo: `PrimaryButton.tsx`

- **Carpetas de Lógica:** kebab-case  
  Ejemplo: `src/hooks/`, `src/lib/`

- **Hooks y Utilidades:** camelCase  
  Ejemplo: `useSlider.ts`, `formatPrice.ts`

### 2. Código (React & TypeScript)
- **Componentes:** PascalCase
- **Props & Variables:** camelCase
- **Booleanos:** Prefijos `is`, `has`, `should`, `can`  
  Ejemplo: `isVisible`
- **Interfaces / Types:** PascalCase (sin prefijo `I`)

---

## 🎨 Estilos con Tailwind CSS

### 🚫 Restricciones
- **No valores arbitrarios en JSX**  
  Prohibido: `text-[#343434]`, `w-[321px]`

### 🎯 Design Tokens
Si se identifica un color o valor clave en las capturas, **debe agregarse a `tailwind.config.ts`** antes de usarse.

### 📐 Orden de Clases
1. Layout (`flex`, `grid`, `position`)
2. Spacing (`m`, `p`, `gap`)
3. Sizing (`w`, `h`)
4. Typography (`text`, `font`)
5. Visuals (`bg`, `border`, `shadow`)
6. States (`hover`, `focus`)

---

## ⚛️ Reglas de React y Next.js
- **Componentización:**  
  Si un elemento aparece más de dos veces en las capturas, debe convertirse en un componente dentro de `components/ui/`.

- **Optimización:**  
  Usar `next/image` para todas las imágenes.  
  En secciones **Hero**, usar la prop `priority`.

- **Interactividad:**  
  Mantener los **Client Components** en el nivel más bajo posible del árbol de componentes.

---

## 🚫 Reglas Anti-Errores para el Agente
- **Dudas Visuales:**  
  Si una captura es borrosa o un color es ambiguo, preguntar o proponer una alternativa lógica basada en accesibilidad (WCAG).

- **No Redundancia:**  
  Antes de crear un componente nuevo, verificar si existe uno en `components/ui/` que pueda adaptarse mediante props.

- **Clean Logic:**  
  Separar la lógica de interacción de la UI mediante **custom hooks** si el componente supera las **60 líneas**.
