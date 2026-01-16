"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Vehicle } from "@/types/vehicle";
import { formatPrice } from "@/lib/formatPrice";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <article
      className="flex flex-col items-center bg-neutral-50 p-4 text-center transition-all duration-300 sm:p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3
        className={`mb-1 text-base font-bold transition-colors duration-300 sm:text-lg ${
          isHovered ? "text-red-600" : "text-neutral-900"
        }`}
      >
        {vehicle.name}
      </h3>
      <p className="mb-4 text-xs text-neutral-600 sm:text-sm">
        {vehicle.year} | {formatPrice(vehicle.price)}
      </p>
      <div className="relative mb-4 h-32 w-full sm:h-40">
        <Image
          src={vehicle.thumbnail}
          alt={vehicle.name}
          fill
          className="object-contain mix-blend-multiply"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="h-10">
        <button
          onClick={() => router.push(`/ficha/${vehicle.id}`)}
          className={`cursor-pointer rounded-full bg-neutral-900 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-neutral-800 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Ver Modelo
        </button>
      </div>
    </article>
  );
}
