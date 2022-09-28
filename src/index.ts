// Generics
function reverse<T>(items: T[]) {
  const toreturn = []
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i])
  }
  return toreturn
}

const sample = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const sample2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const sample3 = [
  {id: '0'},
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
  {id: '6'},
  {id: '7'},
  {id: '8'},
  {id: '9'},
]

const reversed = reverse(sample)
const reversed2 = reverse(sample2)
const reversed3 = reverse(sample3)

console.log(reversed)
console.log(reversed2)
console.log(reversed3)
