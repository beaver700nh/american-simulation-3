export const TurnValues = [
  1759,
  1762,
  1765,
  1768,
  1771,
  1774,
  1777,
  1780,
  1783,
  1786,
  1789,
  1790,
  1795,
  1800,
  1805,
  1810,
  1815,
  1820,
  1825,
  1830,
  1835,
  1840,
  1845,
  1850,
  1855,
  1860,
  1865,
  1870,
] as const;

export type Turn = typeof TurnValues[number];

export type SettlementSheet = {
  turn: Turn;
  data: SettlementSheetData[];
};

export type SettlementSheetData = {
  name: SettlementSheetName;
  label?: string;
  value?: SettlementSheetValue | SettlementSheetTable;
};

export const SettlementSheetNames = [
  "settlement",
  "earnings",
  "turn",
  "debtToEarnings",
  "population",
  "votes",
  "unrest",
  "propertyRate",
  "tariffRate",
  "exciseRate",
  "propertyCollection",
  "tariffCollection",
  "exciseCollection",
  "plantationValue",
  "farmingValue",
  "industryValue",
  "commerceValue",
  "tradeFleet",
  "debt",
  "smuggling",
  "societyLevel",
  "dividend",
  "triangularTrade",
] as const;

export type SettlementSheetName = typeof SettlementSheetNames[number];

export type SettlementSheetValue = string | number;

export type SettlementSheetTable = {
  rows: string[];
  cols: string[];
  data: SettlementSheetValue[];
};
