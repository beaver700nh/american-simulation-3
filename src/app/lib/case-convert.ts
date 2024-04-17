export function camelToKebab(camel: string): string {
  return camel.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function camelToTitle(camel: string): string {
  const temp = camel.replace(/([a-z])([A-Z])/g, "$1 $2");
  return temp.charAt(0).toUpperCase() + temp.slice(1);
}