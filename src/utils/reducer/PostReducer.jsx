const generateId = (state) => {
  if(state.length > 0) {
    return state[state.length-1].id + 1
  }
  return 1
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
  let i = 0
  for (const post of state) {
    if(post.id === action.payload.id) {
      post.author = action.payload.author;
      post.body = action.payload.body;
      state[i] = post
    }
    i++
  }
  return state
}

const remove = (state, action) => {

}


export const PostReducer = (state, action) => {
  switch (action.type) {
    case 'load':
      return load(state, action)
    case 'add':
      return add(state, action)
    case 'update':
      return update(state, action)
    case 'delete':
      return remove(state)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}



