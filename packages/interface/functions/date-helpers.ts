export const formatDate = (apiDate: Date) => {
  const date = new Date(apiDate);
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
    timeStyle: "medium",
  }).format(date);
};
