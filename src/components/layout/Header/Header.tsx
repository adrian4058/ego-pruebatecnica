"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { HamburgerButton } from "@/components/ui/HamburgerButton";
import { Menu } from "@/components/layout/Menu";
import { useMenu } from "@/hooks/useMenu";

export function Header() {
  const { isOpen, toggleMenu, closeMenu } = useMenu();
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isModelos = pathname === "/modelos";
  const isFicha = pathname.startsWith("/ficha/");

  const linkClass = (active: boolean) =>
    active
      ? "relative pb-1 text-base font-medium text-red-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-red-600"
      : "text-base text-neutral-800 transition-colors hover:text-red-600";

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <Logo />

        <nav className="ml-12 hidden flex-1 items-center gap-12 lg:flex">
          <Link href="/" className={linkClass(isHome)}>
            Inicio
          </Link>
          <Link href="/modelos" className={linkClass(isModelos)}>
            Modelos
          </Link>
          <span className={linkClass(isFicha)}>Ficha de modelo</span>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <span className="text-base text-neutral-800">Menú</span>
          <HamburgerButton isOpen={isOpen} onClick={toggleMenu} showAlways />
        </div>

        <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />

        <Menu isOpen={isOpen} onClose={closeMenu} />
      </div>
    </header>
  );
}
