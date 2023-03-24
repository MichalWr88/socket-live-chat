/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isNumber = (n: any) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
