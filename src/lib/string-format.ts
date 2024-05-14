import { Settlement } from "@prisma/client";

export function camelToKebab(camel: string): string {
  return camel.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function camelToPascal(camel: string): string {
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

export function pascalToTitle(pascal: string): string {
  return pascal.replace(/([a-z])([A-Z])/g, "$1 $2");
}

export function camelToTitle(camel: string): string {
  return pascalToTitle(camelToPascal(camel));
}

export function formatSettlementName(settlement: Settlement | undefined): string {
  return (settlement == null
    ? "Unknown Settlement"
    : `${settlement.name}, ${settlement.colony.toUpperCase()}`);
}
