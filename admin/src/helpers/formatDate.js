export const formatDate = (date) => {
  // Parse the ISO string into a Date object
  const formatedDate = new Date(date);

  // Format the date string using the user's locale settings
  const formattedDateString = formatedDate.toLocaleDateString("es-CL");
  return formattedDateString;
};
