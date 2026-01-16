"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export function NavLink({ href, label, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block py-1 text-right text-base transition-colors duration-200 ${
        isActive ? "font-medium text-primary" : "text-neutral-800 hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );
}
