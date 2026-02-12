const generateId = (state) => {
  const lastId = state[state.length].id
  return lastId+1
}

const load = (state, action) => {
  let id = 0
  return action.payload.map(post => {
    id++
    return {id, ...post}
  })
}

const add = (state, action) => {
  const post = {
    id: generateId(state),
    author: action.payload.author,
    body: action.payload.body
  }
  return [...state, post]
}

const update = (state, action) => {

}

const remove = (state, action) => {

}


export const PostReducer = (state, action) => {
  switch (action.type) {
    case 'load':
      return load(state, action)
    case 'add':
      return add(state)
    case 'update':
      return update(state, action)
    case 'delete':
      return remove(state)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}



