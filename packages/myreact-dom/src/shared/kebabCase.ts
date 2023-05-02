// eslint-disable-next-line @typescript-eslint/ban-types
const memorize = <T extends Function>(fn: T): T => {
  const map: Record<string, any> = {};
  return ((...p: any[]) => {
    const key = p.join(",");
    if (key in map) {
      return map[key];
    }
    map[key] = fn.call(null, ...p);
    return map[key];
  }) as unknown as T;
};

export const kebabCase = memorize((s: string) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase());
