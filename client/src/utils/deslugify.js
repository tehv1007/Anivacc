export const deslugify = (slug) => {
  const regex = /-{3}/g;
  return slug.replace(regex, " - ").split("-").join(" ");
};
