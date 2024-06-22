import { Fragment } from "react";

import { SettlementSheetData } from "@/lib/definitions";
import { style } from "./style";

type CellProps = SettlementSheetData;

export default function Cell({
  name,
  label,
  value,
}: CellProps) {
  const cfg = style[name];

  if (cfg == null) {
    return null;
  }

  return (
    <Fragment
      key={name}
    >
      <span
        className="flex justify-center items-center"
        style={cfg.label}
      >
        {label}
      </span>
      <span
        className="flex justify-center items-center"
        style={cfg.value}
      >
        {value == null
          ? "#ERR!"
          : typeof value !== "object"
            ? value
            : "[table]"}
      </span>
    </Fragment>
  );
}
