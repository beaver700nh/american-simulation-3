import { TurnValues } from "@/lib/definitions";
import { getCurrentTurn } from "@/lib/game/turn";

import Wrapper from "./components/wrapper";

export default async function SettlementSheet() {
  const turn = await getCurrentTurn();

  return (
    <Wrapper
      maxTurn={TurnValues.indexOf(turn)}
    />
  );
}
