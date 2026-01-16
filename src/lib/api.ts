import { Vehicle, VehicleDetail } from "@/types/vehicle";

const API_BASE = "https://challenge.egodesign.dev/api";

export async function getVehicles(): Promise<Vehicle[]> {
  const res = await fetch(`${API_BASE}/models/`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Error al obtener los vehículos");
  }

  return res.json();
}

export async function getVehicleById(id: number): Promise<VehicleDetail> {
  const res = await fetch(`${API_BASE}/models/${id}/`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Error al obtener el vehículo");
  }

  return res.json();
}
