import { Box, Divider, Stack, Typography } from "@mui/material";

import { auth } from "@/auth";
import { formatSettlementName } from "@/lib/string-format";
import { getSettlements } from "@/lib/database";

import Info from "./components/info";
import CyclingMaps from "./components/cycling-maps";

export default async function Home() {
  const session = await auth();
  const [settlement] = await getSettlements({}, { id: session?.user?.name ?? undefined });

  return (
    <Box
      className="grow flex relative"
    >
      <CyclingMaps />
      <Info />
    </Box>
  )
}
