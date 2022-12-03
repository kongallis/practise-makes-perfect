export const convert = (num) => {
  let answer = ""

  if (num % 3 == 0) answer += "Pling"
  if (num % 5 == 0) answer += "Plang"
  if (num % 7 == 0) answer += "Plong"

  return answer.length == 0 ? String(num) : answer
}