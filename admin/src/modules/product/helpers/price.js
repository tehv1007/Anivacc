export const convertPrice = (priceString) => {
  if (!priceString) return 0;
  return Number(priceString.slice(1).replace(",", ""));
};
