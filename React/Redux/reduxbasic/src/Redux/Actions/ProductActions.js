import { ActionType } from "../Constants/ActionType"

export const setProducts = (product) =>{
  return {
    type: ActionType.SET_PRODUCTS,
    payload: product,
  }
}