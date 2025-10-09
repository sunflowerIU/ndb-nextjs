export const formatCurrency = (amount, locale = "en-IN", currency = "NPR") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
};
