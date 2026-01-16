import { notFound } from "next/navigation";
import { getVehicleById, getVehicles } from "@/lib/api";
import { VehicleHero } from "@/components/sections/VehicleHero";
import { Slider } from "@/components/ui/Slider";
import { HighlightSection } from "@/components/sections/HighlightSection";

type Params = Promise<{ id: string }>;

interface VehiclePageProps {
  params: Params;
}

export async function generateStaticParams() {
  const vehicles = await getVehicles();
  return vehicles.map((vehicle) => ({ id: String(vehicle.id) }));
}

export default async function VehiclePage(props: VehiclePageProps) {
  const params = await props.params;
  const vehicleId = parseInt(params.id, 10);

  if (isNaN(vehicleId)) {
    notFound();
  }

  try {
    const vehicle = await getVehicleById(vehicleId);

    return (
      <main className="min-h-screen bg-white">
        <VehicleHero vehicle={vehicle} />

        {vehicle.model_features.length > 0 && <Slider features={vehicle.model_features} />}

        {vehicle.model_highlights.map((highlight, index) => (
          <HighlightSection key={index} highlight={highlight} imagePosition={index % 2 === 0 ? "right" : "left"} />
        ))}
      </main>
    );
  } catch {
    notFound();
  }
}
