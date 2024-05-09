import { ComponentProps } from "react";

import { MenuItem, TextField } from "@mui/material";

import { formatSettlementName } from "@/lib/string-format";

import { useGameMetadata } from "@/app/contexts/game-metadata-manager";

type SettlementSelectProps = ComponentProps<typeof TextField>;

export default function SettlementSelect(textFieldProps: SettlementSelectProps) {
  const [data] = useGameMetadata();

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
      {data?.settlements.map(settlement => {
        const longId = `${settlement.id}-${settlement.colony}`;
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
