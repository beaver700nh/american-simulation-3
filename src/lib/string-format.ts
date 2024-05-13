import { Settlement } from "@prisma/client";

export function camelToKebab(camel: string): string {
  return camel.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function camelToTitle(camel: string): string {
  const temp = camel.replace(/([a-z])([A-Z])/g, "$1 $2");
  return temp.charAt(0).toUpperCase() + temp.slice(1);
}

export function formatSettlementName(settlement: Settlement): string {
  return `${camelToTitle(settlement.id)}, ${settlement.colony.toUpperCase()}`;
}

export function formatSettlementFromId(username: string | null | undefined): string {
  const parts = username?.match(/(?<id>.*)-(?<colony>.*)/)?.groups;

  if (parts == null) {
    return "Unknown Settlement";
  }

  return formatSettlementName(parts as Settlement);
}

export function formatSettlementToId(settlement: Settlement): string {
  return `${settlement.id}-${settlement.colony}`;
}
