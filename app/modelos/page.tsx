import { getVehicles } from "@/lib/api";
import { ModelosClient } from "./ModelosClient";

export default async function ModelosPage() {
  const vehicles = await getVehicles();
  const segments = ["Todos", ...new Set(vehicles.map((v) => v.segment))];

  return <ModelosClient vehicles={vehicles} segments={segments} />;
}
