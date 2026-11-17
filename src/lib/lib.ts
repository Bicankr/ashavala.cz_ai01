export const serializeJSON = (o: unknown) => {
  if (!o) return;
  return JSON.parse(JSON.stringify(o));
};
