"use client";

import { useState } from "react";
import { VehicleCard } from "@/components/ui/VehicleCard";
import { Dropdown } from "@/components/ui/Dropdown";
import { Vehicle, SortOption } from "@/types/vehicle";

interface ModelosClientProps {
  vehicles: Vehicle[];
  segments: string[];
}

export function ModelosClient({ vehicles, segments }: ModelosClientProps) {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [sortBy, setSortBy] = useState<SortOption>("Nada");

  const filteredVehicles = vehicles
    .filter((vehicle) => {
      if (activeFilter === "Todos") return true;
      return vehicle.segment === activeFilter;
    })
    .sort((a, b) => {
      if (sortBy === "De menor a mayor precio") return a.price - b.price;
      if (sortBy === "De mayor a menor precio") return b.price - a.price;
      if (sortBy === "Más nuevos primero") return b.year - a.year;
      if (sortBy === "Más viejos primero") return a.year - b.year;
      return 0;
    });

  const filterOptions = segments.map((segment) => ({ value: segment, label: segment }));

  const sortOptions = [
    { value: "Nada", label: "Nada" },
    { value: "De menor a mayor precio", label: "De menor a mayor precio" },
    { value: "De mayor a menor precio", label: "De mayor a menor precio" },
    { value: "Más nuevos primero", label: "Más nuevos primero" },
    { value: "Más viejos primero", label: "Más viejos primero" },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="mb-6 text-3xl font-bold text-neutral-900 sm:mb-8 sm:text-4xl">Descubrí todos los modelos</h1>

        <div className="mb-8 flex flex-row items-center justify-between gap-4 border-b border-neutral-400 pb-6 sm:pb-8">
          <Dropdown
            label="Filtrar por"
            options={filterOptions}
            value={activeFilter}
            onChange={setActiveFilter}
            className="xl:hidden"
            align="left"
          />
          <Dropdown
            label="Ordenar por"
            options={sortOptions}
            value={sortBy}
            onChange={(value) => setSortBy(value as SortOption)}
            highlightWords
            className="xl:hidden"
          />

          <div className="hidden xl:flex xl:items-center xl:gap-8">
            <span className="text-sm font-semibold tracking-wide text-neutral-900">Filtrar por</span>
            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
              {segments.map((segment) => (
                <button
                  key={segment}
                  onClick={() => setActiveFilter(segment)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-sm transition-all hover:bg-neutral-100 ${
                    activeFilter === segment ? "bg-neutral-100 font-semibold" : "font-normal"
                  } text-neutral-600`}
                >
                  {segment}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden xl:block">
            <Dropdown
              label="Ordenar por"
              options={sortOptions}
              value={sortBy}
              onChange={(value) => setSortBy(value as SortOption)}
              highlightWords
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </main>
  );
}
