export default Object.freeze({
  M_UNAUTHORIZED: 'M_UNAUTHORIZED'
})
const types = {
  RESET_STORE: 'RESET_STORE'
}

types.RESET_STORE = function () {
  return 1
}

const methods = {
  [types.RESET_STORE] () {
    return 1
  }
}

console.log(methods)
