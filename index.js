// Your code here
  let r = []
function mapToNegativize(src) {

  for (let i = 0; i < src.length; i++ ) {
    r.push(-1 * src[i])
  }
  return r
}

function mapToNoChange(src) {
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i])
  }
}

function mapToDouble(src) {
  for (let i = 0; i < src.length; i++ ) {
    r.push(2 * src[i])
  }
  return r
}

function mapToSquare(src) {
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i] * src[i])
  }
  return r
}

function reduceToTotal(src, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < src.length; i++ ) {
    total = total + src[i]
  }
  return total
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}