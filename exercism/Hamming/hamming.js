export const compute = (dna1, dna2) => {
  let differences = 0
  if (dna1.length !== dna2.length) throw new Error('strands must be of equal length')

  if (dna1 === dna2) return differences

  for (let i = 0; i < dna1.length; i++) {
    if (dna1[i] !== dna2[i]) differences++
  }

  return differences
};