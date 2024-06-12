import { getSettlementSheetData } from "@/lib/game/settlement-sheet";

import Wrapper from "./components/wrapper";
import Inner from "./components/inner";

export default async function SettlementSheet() {
  const data = await getSettlementSheetData();

  return (
    <Wrapper>
      <Inner
        data={data}
      />
    </Wrapper>
  );
}
