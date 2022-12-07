export const rotate = (input, key) => {
  if (key == 26 || key == 0) return input

  let output = ""
  for (let i = 0; i < input.length; i++) {
    if (lettersRegex.test(input[i])) {
      const addedKey = input[i].charCodeAt() + key

      if (addedKey > 122 || (addedKey > 90 && addedKey <= 97)) {
        output += String.fromCharCode(addedKey - 26)
      } else {
        output += String.fromCharCode(addedKey)
      }

    } else {
      output += input[i]
    }
  }

  return output
};

const lettersRegex = /[a-zA-Z]/