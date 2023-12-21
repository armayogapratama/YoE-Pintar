function age(value) {
  const now = new Date();
  return (value = now.getFullYear() - value.getFullYear());
}

module.exports = age;
