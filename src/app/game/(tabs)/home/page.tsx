import { Box } from "@mui/material";

import Info from "./components/info";
import CyclingMaps from "./components/cycling-maps";

export default async function Home() {
  return (
    <Box
      className="grow flex relative"
    >
      <CyclingMaps />
      <Info />
    </Box>
  )
}
