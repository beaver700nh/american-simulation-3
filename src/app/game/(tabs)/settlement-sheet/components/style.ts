import { CSSProperties } from "react";

import { Roboto, UnifrakturMaguntia } from "next/font/google"

const sans = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const goth = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
});

const styles: {
  [key: string]: CSSProperties;
} = {
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
};

export const style: {
  [key: string]: {
    label: CSSProperties;
    value: CSSProperties;
  },
} = {
  "earnings": {
    label: {
      ...styles.header,
      gridArea: "1 / 4 / 3 / 6",
    },
    value: {
      ...styles.value,
      gridArea: "1 / 6 / 3 / 8",
      fontSize: "160%",
      fontWeight: "normal",
    },
  }
};
