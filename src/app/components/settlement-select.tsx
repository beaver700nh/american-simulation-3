import { ComponentProps } from "react";

import { MenuItem, TextField } from "@mui/material";

import { formatSettlementName, formatSettlementToId } from "@/lib/string-format";
import { useSettlements } from "@/app/contexts/game-metadata-manager";

type SettlementSelectProps = ComponentProps<typeof TextField>;

export default function SettlementSelect(textFieldProps: SettlementSelectProps) {
  const data = useSettlements();

  return (
    <TextField
      {...textFieldProps}
      defaultValue=""
      SelectProps={{
        displayEmpty: true
      }}
      select
    >
      <MenuItem
        value=""
      >
        Select a settlement&hellip;
      </MenuItem>
      {data.map(settlement => {
        const longId = formatSettlementToId(settlement);
        const humanName = formatSettlementName(settlement);

        return (
      <MenuItem
        key={longId}
        value={longId}
      >
        {humanName}
      </MenuItem>)})}
    </TextField>
  );
}
