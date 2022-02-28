const intitalState = {
  products: []
}

const ProductReducer = (state = intitalState, action) =>{
  switch (action.type) {
    case 'SET_PRODUCT':
        return state
      break;
  
    default:
      break;
  }
}