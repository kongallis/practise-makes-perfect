export const clean = (number) => {
  if (checkForLetters(number)) throw new Error('Letters not permitted')

  if (checkForPunctuation(number)) throw new Error('Punctuations not permitted')

  if (number.length < 10) throw new Error('Incorrect number of digits')

  let removedSymbolsNumber = removeSymbols(number)

  if (removedSymbolsNumber.length == 11) {
    if (removedSymbolsNumber[0] == 1) {
      removedSymbolsNumber = removedSymbolsNumber.substring(1)
    } else {
      throw new Error('11 digits must start with 1')
    }
  }

  if (removedSymbolsNumber.length > 11) throw new Error('More than 11 digits')

  const areaCodeFirst = removedSymbolsNumber[0]
  const exchangeCodeFirst = removedSymbolsNumber[3]

  if (areaCodeFirst < 2) {
    let error
    switch (areaCodeFirst) {
      case "0":
        error = "zero"
        break
      case "1":
        error = "one"
        break
    }

    throw new Error(`Area code cannot start with ${error}`)
  }

  if (exchangeCodeFirst < 2) {
    let error
    switch (exchangeCodeFirst) {
      case "0":
        error = "zero"
        break
      case "1":
        error = "one"
        break
    }

    throw new Error(`Exchange code cannot start with ${error}`)
  }
  console.log(removedSymbolsNumber)

  return removedSymbolsNumber
};

const removeSymbols = (str) => {
  const regex = /[+()-.,\s]/ig
  return str.replaceAll(regex, '')
}

const checkForLetters = (str) => {
  return /[a-zA-Z]/.test(str)
}

const checkForPunctuation = (str) => {
  return /[@:!]/.test(str)
}