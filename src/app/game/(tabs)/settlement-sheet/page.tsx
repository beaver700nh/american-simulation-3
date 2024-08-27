import Wrapper from "./components/wrapper";
import Inner from "./components/inner";

import { auth } from "@/auth";

import { getSettlements } from "@/lib/game/settlement";

export default async function SettlementSheet() {
  const session = await auth();
  const [settlement] = await getSettlements({}, { id: session?.user?.name ?? undefined });

  return (
    <Wrapper>
      <Inner
        settlement={settlement}
      />
    </Wrapper>
  );
}
