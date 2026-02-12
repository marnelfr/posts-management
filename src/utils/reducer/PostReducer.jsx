const generateId = (state) => {
  const lastId = state[state.length].id
  return lastId+1
}

const load = (state, action) => {
  return action.data
}

const add = (state, action) => {
  const post = {
    id: generateId(state),
    author: action.author,
    body: action.body
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
      return load(state)
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



