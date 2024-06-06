import { getCurrentTurn } from "@/lib/game/turn";

export default async function SettlementSheet() {
  const turn = await getCurrentTurn();

  return (
    <p>{ turn }</p>
  );
}
