const comma = (x) => {
  return (x / 1000).toFixed(3).toString().replace('.', ',');
};

export default comma;
