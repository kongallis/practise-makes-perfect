function alphabetPosition(text) {
  // Remove all non letters
  let lowerText = text.replace(/[^a-zA-Z]+/g, '').toLowerCase()
  let arr = []

  for (let i = 0; i < lowerText.length; i++) {
    arr.push(lowerText.charCodeAt(i) - 96)
  }

  return arr.join(" ")
}