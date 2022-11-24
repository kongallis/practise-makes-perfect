export const toRna = (dna) => {
  let rna = ''

  for (let i = 0; i < dna.length; i++) {
    rna += DNA_RNA[dna[i]]
  }

  return rna
};

const DNA_RNA = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U",
}