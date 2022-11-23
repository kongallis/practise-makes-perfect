export const decodedValue = (arr) => {
  let value = ""

  for (let i = 0; i < arr.length; i++) {
    if (i === 2) break

    value += BAND_COLORS[arr[i]]
  }

  return +value
};

const BAND_COLORS = {
  "black": "0",
  "brown": "1",
  "red": "2",
  "orange": "3",
  "yellow": "4",
  "green": "5",
  "blue": "6",
  "violet": "7",
  "grey": "8",
  "white": "9"
}