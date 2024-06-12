import { Divider, Typography } from "@mui/material";

import { auth } from "@/auth";

import { formatSettlementName } from "@/lib/string-format";
import { getSettlements } from "@/lib/game/settlement";

import InfoOuter from "../components/info-outer";

export default async function Info() {
  const session = await auth();
  const [settlement] = await getSettlements({}, { id: session?.user?.name ?? undefined });

  return (
    <InfoOuter>
      <Typography
        variant="h4"
      >
        The Sim
      </Typography>
      <Typography
        variant="h6"
      >
        US I - American History Through Simulation
      </Typography>
      <Typography
        fontStyle="italic"
        variant="body1"
      >
        Originally written by Mr. White in Microsoft Excel<br />
        Ported to the web by his high school student Minh Lê
      </Typography>
      <Divider
        className="!-mx-8 !my-4"
        orientation="horizontal"
        flexItem
      />
      <Typography
        variant="body1"
      >
        You are: {formatSettlementName(settlement)}
      </Typography>
    </InfoOuter>
  )
}
