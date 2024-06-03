import CyclingMapsInner from "./cycling-maps-inner";

import { getSettlements } from "@/lib/database";

export default async function CyclingMaps() {
  const settlements = await getSettlements();

  return (
    <CyclingMapsInner
      settlements={settlements}
    />
  );
}
