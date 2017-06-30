export default {
  path: '*',
  onEnter: (_, replaceState) => replaceState(null, "login")
}