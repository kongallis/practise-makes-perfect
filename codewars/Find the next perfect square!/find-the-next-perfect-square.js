function findNextSquare(sq) {
  const squareRoot = Math.sqrt(sq)
  if (squareRoot % 1 !== 0) return -1

  return Math.pow(squareRoot + 1, 2)
}