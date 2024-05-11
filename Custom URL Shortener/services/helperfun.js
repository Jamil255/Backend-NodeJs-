const sessionIdUserMap = new Map()

const setUser = (id, user) => {
  return sessionIdUserMap.set(id, user)
}
const getUser = (id) => {
  return sessionIdUserMap.get(id)
}

export { setUser, getUser }
    