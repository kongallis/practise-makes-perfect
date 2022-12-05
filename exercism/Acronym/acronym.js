export const parse = (str) => {
  str = str.replace(regex, " ").replace(/\s+/g, " ")

  const acronyms = str.split(" ").map(word => word[0].toUpperCase())

  return acronyms.join("")
}

const regex = /[\-\_]/g
