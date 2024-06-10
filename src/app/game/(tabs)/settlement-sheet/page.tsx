import { TurnValues } from "@/lib/definitions";
import { getCurrentTurn } from "@/lib/game/turn";

import Inner from "./components/inner";

export default async function SettlementSheet() {
  const turn = await getCurrentTurn();

  return (
    <Inner
      maxTurn={TurnValues.indexOf(turn)}
    />
  );
}
