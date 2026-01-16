"use client";

import { NavLink } from "@/components/ui/NavLink";
import { navigationData } from "@/lib/navigation";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 hidden bg-[#252525] transition-opacity duration-300 lg:block ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full transform bg-white shadow-2xl transition-transform duration-400 lg:max-w-sm ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menú de navegación"
      >
        <div className="flex items-center justify-end p-6">
          <button
            onClick={onClose}
            className="flex cursor-pointer items-center gap-2 text-sm text-neutral-800 transition-colors hover:text-primary"
            aria-label="Cerrar menú"
          >
            <span>Cerrar</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="h-[calc(100%-80px)] overflow-y-auto">
          {navigationData.groups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`px-6 py-4 ${groupIndex > 0 ? "border-t border-neutral-200" : ""} ${
                groupIndex === navigationData.groups.length - 1 ? "bg-neutral-100" : "bg-white"
              }`}
            >
              <div className="flex flex-col items-end">
                {group.items.map((item: { href: string; label: string }) => (
                  <NavLink key={item.href} href={item.href} label={item.label} onClick={onClose} />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
