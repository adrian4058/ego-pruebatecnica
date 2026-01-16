import Image from "next/image";
import { VehicleDetail } from "@/types/vehicle";

interface VehicleHeroProps {
  vehicle: VehicleDetail;
}

export function VehicleHero({ vehicle }: VehicleHeroProps) {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-video w-full lg:aspect-square">
            <Image
              src={vehicle.photo}
              alt={vehicle.name}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-2 font-primary text-sm font-medium uppercase tracking-wider text-neutral-600 sm:text-base">
              {vehicle.name}
            </p>
            <h1 className="mb-6 font-primary text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              {vehicle.title}
            </h1>
            <div
              className="font-primary text-base leading-relaxed text-neutral-600 sm:text-lg"
              dangerouslySetInnerHTML={{ __html: vehicle.description }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
