String.prototype.toJadenCase = function () {
  const arr = this.split(" ")
  const capitalizedArr = arr.map(word => word.substring(0, 1).toUpperCase() + word.substring(1))

  return capitalizedArr.join(" ")
};