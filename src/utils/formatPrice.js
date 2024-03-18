const formatPrice = (price) => {
  const options = {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  };
  const formatSoles = new Intl.NumberFormat("es-PE", options).format(price);
  return formatSoles;
};

export default formatPrice;