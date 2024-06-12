import { Box } from "@mui/material";

import { auth } from "@/auth";

import Info from "./components/info";
import CyclingMaps from "./components/cycling-maps";

export default async function Home() {
  const session = await auth();

  return (
    <Box
      className="grow flex relative"
    >
      <CyclingMaps />
      <Info />
    </Box>
  )
}
