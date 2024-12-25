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
  "propertyRate": {
    label: {
      ...styles.label,
      gridArea: "7 / 2 / 9 / 4",
    },
    value: {
      ...styles.value,
      gridArea: "9 / 2 / 11 / 4",
    },
  },
  "tariffRate": {
    label: {
      ...styles.label,
      gridArea: "7 / 6 / 9 / 8",
    },
    value: {
      ...styles.value,
      gridArea: "9 / 6 / 11 / 8",
    },
  },
  "exciseRate": {
    label: {
      ...styles.label,
      gridArea: "7 / 10 / 9 / 12",
    },
    value: {
      ...styles.value,
      gridArea: "9 / 10 / 11 / 12",
    },
  },
  "propertyCollection": {
    label: {
      ...styles.label,
      gridArea: "19 / 2 / 21 / 4",
    },
    value: {
      ...styles.value,
      gridArea: "21 / 2 / 23 / 4",
      fontStyle: "normal",
    },
  },
  "tariffCollection": {
    label: {
      ...styles.label,
      gridArea: "19 / 6 / 21 / 8",
      fontStyle: "italic",
    },
    value: {
      ...styles.value,
      gridArea: "21 / 6 / 23 / 8",
    },
  },
  "exciseCollection": {
    label: {
      ...styles.label,
      gridArea: "15 / 6 / 17 / 8",
      fontStyle: "italic",
    },
    value: {
      ...styles.value,
      gridArea: "17 / 6 / 19 / 8",
    },
  },
  "plantationValue": {
    label: {
      ...styles.label,
      gridArea: "11 / 2 / 13 / 4",
    },
    value: {
      ...styles.value,
      gridArea: "13 / 2 / 15 / 4",
      fontStyle: "normal",
    },
  },
  "farmingValue": {
    label: {
      ...styles.label,
      gridArea: "11 / 6 / 13 / 8",
    },
    value: {
      ...styles.value,
      gridArea: "13 / 6 / 15 / 8",
      fontStyle: "normal",
    },
  },
  "industryValue": {
    label: {
      ...styles.label,
      gridArea: "11 / 10 / 13 / 12",
    },
    value: {
      ...styles.value,
      gridArea: "13 / 10 / 15 / 12",
      fontStyle: "normal",
    },
  },
  "commerceValue": {
    label: {
      ...styles.label,
      gridArea: "15 / 2 / 17 / 4",
    },
    value: {
      ...styles.value,
      gridArea: "17 / 2 / 19 / 4",
      fontStyle: "normal",
    },
  },
  "tradeFleet": {
    label: {
      ...styles.label,
      gridArea: "15 / 10 / 17 / 12",
    },
    value: {
      ...styles.value,
      gridArea: "17 / 10 / 19 / 12",
      fontStyle: "normal",
    },
  },
  "debt": {
    label: {
      ...styles.label,
      gridArea: "19 / 10 / 21 / 12",
    },
    value: {
      ...styles.value,
      gridArea: "21 / 10 / 23 / 12",
      fontStyle: "normal",
    },
  },
  "smuggling": {
    label: {
      ...styles.label,
      gridArea: "23 / 2 / 25 / 4",
      fontStyle: "italic",
    },
    value: {
      ...styles.value,
      gridArea: "25 / 2 / 27 / 4",
    },
  },
  "societyLevel": {
    label: {
      ...styles.label,
      gridArea: "23 / 5 / 25 / 7",
    },
    value: {
      ...styles.value,
      gridArea: "25 / 5 / 27 / 7",
      fontStyle: "normal",
    },
  },
  "dividend": {
    label: {
      ...styles.label,
      gridArea: "23 / 8 / 25 / 9",
    },
    value: {
      ...styles.value,
      gridArea: "25 / 8 / 27 / 9",
      fontStyle: "normal",
    },
  },
  "triangularTrade": {
    label: {
      ...styles.label,
      gridArea: "23 / 10 / 25 / 12",
      fontStyle: "italic",
    },
    value: {
      ...styles.value,
      gridArea: "25 / 10 / 27 / 12",
    },
  },
};
