function accum(s) {
  let accumulated = ""

  for (let i = 0; i < s.length; i++) {
    accumulated += s[i].toUpperCase()

    if (i == 0) accumulated = `${accumulated}-`

    for (let y = 0; y < i; y++) {
      if (y == i - 1 && i != s.length - 1) {
        accumulated += `${s[i].toLowerCase()}-`
      } else {
        accumulated += s[i].toLowerCase()
      }
    }
  }

  return accumulated
}