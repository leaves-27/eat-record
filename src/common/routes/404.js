module.exports = {
  path: '*',
  onEnter: (_, replaceState) => replaceState(null, "login")
}