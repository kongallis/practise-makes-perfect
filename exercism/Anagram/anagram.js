export const findAnagrams = (word, words) => {
  const matches = []

  const loweredCaseWord = word.toLowerCase()

  for (let i = 0; i < words.length; i++) {
    const lowerCanditateWord = words[i].toLowerCase()
    if (loweredCaseWord == lowerCanditateWord) {
      continue
    }

    if (isAnagram(loweredCaseWord, lowerCanditateWord)) {
      matches.push(words[i])
    }
  }


  return matches
};


const isAnagram = (word, canditateAnagram) => {
  for (let i = 0; i < word.length; i++) {
    const idx = canditateAnagram.indexOf(word[i].toLowerCase())

    if (idx != -1) {
      canditateAnagram = canditateAnagram.substring(0, idx) + canditateAnagram.substring(idx + 1, canditateAnagram.length)
    } else {
      break
    }
  }

  return canditateAnagram.length == 0
}