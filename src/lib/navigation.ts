import type { NavigationData } from "@/types/navigation";

export const navigationData: NavigationData = {
  groups: [
    {
      items: [
        { label: "Modelos", href: "/modelos" },
        { label: "Servicios y Accesorios", href: "/servicios-accesorios" },
        { label: "Financiación", href: "/financiacion" },
        { label: "Reviews y Comunidad", href: "/reviews-comunidad" },
      ],
      background: "white",
    },
    {
      items: [
        { label: "Toyota Mobility Service", href: "/mobility-service" },
        { label: "Toyota Gazoo Racing", href: "/gazoo-racing" },
        { label: "Toyota Híbridos", href: "/hibridos" },
      ],
      background: "white",
    },
    {
      items: [
        { label: "Concesionarios", href: "/concesionarios" },
        { label: "Test Drive", href: "/test-drive" },
        { label: "Contacto", href: "/contacto" },
      ],
      background: "white",
    },
    {
      items: [
        { label: "Actividades", href: "/actividades" },
        { label: "Servicios al Cliente", href: "/servicios-cliente" },
        { label: "Ventas Especiales", href: "/ventas-especiales" },
        { label: "Innovación", href: "/innovacion" },
        { label: "Prensa", href: "/prensa" },
        { label: "Acerca de...", href: "/acerca-de" },
      ],
      background: "gray",
    },
  ],
};
