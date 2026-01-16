"use client";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  showAlways?: boolean;
}

export function HamburgerButton({ isOpen, onClick, className = "", showAlways = false }: HamburgerButtonProps) {
  const baseClasses = "flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5";
  const visibilityClass = showAlways ? "" : "lg:hidden";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${visibilityClass} ${className}`.trim()}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={isOpen}
    >
      <span
        className={`block h-0.5 w-6 bg-neutral-900 transition-all duration-300 ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-neutral-900 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`block h-0.5 w-6 bg-neutral-900 transition-all duration-300 ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </button>
  );
}
