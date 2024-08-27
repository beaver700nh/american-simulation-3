import { CSSProperties } from "react";

import { Roboto, UnifrakturMaguntia } from "next/font/google"

import { SettlementSheetName } from "@/lib/definitions";

const sans = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const goth = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
});

type StyleType = Record<
  SettlementSheetName,
  {
    label: CellProperties;
    value: CellProperties;
  }
>;

type CellProperties = CSSProperties & Required<Pick<CSSProperties, "gridArea">>;

const styles = {
  header: {
    ...goth.style,
    fontSize: "160%",
  },
  label: {
    ...sans.style,
    fontSize: "140%",
    fontWeight: "bold",
    textDecoration: "underline",
  },
  value: {
    ...sans.style,
    fontSize: "170%",
    fontWeight: "bold",
    fontStyle: "italic",
  },
} as const satisfies {
  [key: string]: CSSProperties;
};

export const style: StyleType = {
  "settlement": {
    label: {
      gridArea: "auto",
      display: "none",
    },
    value: {
      ...styles.header,
      gridArea: "1 / 1 / 3 / 4",
      fontSize: "180%",
    },
  },
  "earnings": {
    label: {
      ...styles.header,
      gridArea: "1 / 4 / 3 / 6",
      justifyContent: "flex-end",
    },
    value: {
      ...styles.value,
      gridArea: "1 / 6 / 3 / 8",
      fontSize: "160%",
      fontWeight: "normal",
    },
  },
  "turn": {
    label: {
      ...styles.header,
      gridArea: "1 / 8 / 3 / 10",
    },
    value: {
      ...styles.value,
      ...goth.style,
      gridArea: "1 / 10 / 3 / 11",
      fontSize: "160%",
      fontWeight: "normal",
      fontStyle: "normal",
    },
  },
  "debtToEarnings": {
    label: {
      ...styles.label,
      gridArea: "1 / 11 / 2 / 12",
      fontSize: "100%",
      justifyContent: "flex-end",
    },
    value: {
      ...styles.value,
      gridArea: "2 / 11 / 3 / 12",
      fontSize: "120%",
      fontStyle: "normal",
      justifyContent: "flex-end",
    },
  },
  "population": {
    label: {
      ...styles.label,
      gridArea: "3 / 2 / 5 / 4",
    },
    value: {
      ...styles.value,
      gridArea: "5 / 2 / 7 / 4",
      fontStyle: "normal",
    },
  },
  "votes": {
    label: {
      ...styles.label,
      gridArea: "3 / 6 / 5 / 8",
    },
    value: {
      ...styles.value,
      gridArea: "5 / 6 / 7 / 8",
      fontStyle: "normal",
    },
  },
  "unrest": {
    label: {
      ...styles.label,
      gridArea: "3 / 10 / 5 / 12",
    },
    value: {
      ...styles.value,
      gridArea: "5 / 10 / 7 / 12",
      fontStyle: "normal",
    },
  },
};
