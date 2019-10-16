// Your code here
function mapToNegativize(srcarr) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(-1 * srcarr[i])
  }
  return r
}

function mapToNoChange(srcarr) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(srcarr[i])
  }
  return r
}

function mapToDouble(srcarr) {
  let r = []
  for (let i = 0; i < srcarr.length; i++ ) {
    r.push(2 * srcarr[i])
  }
  return r
}

function mapToSquare(srcarr) {
  let r = []
  for (let i = 0; i < srcarr.length; i++ ) {
    r.push(srcarr[i] * srcarr[i])
  }
  return r
}

function reduceToTotal(srcarr, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < srcarr.length; i++ ) {
    total = total + srcarr[i]
  }
  return total
}

function reduceToAllTrue(srcarr) {
  for (let i = 0; i < srcarr.length; i++ ) {
    if (!srcarr[i]) return false
  }
  return true
}

function reduceToAnyTrue(srcarr) {
  for (let i = 0; i < srcarr.length; i++ ) {
    if (srcarr[i]) return true
  }
  return false
}