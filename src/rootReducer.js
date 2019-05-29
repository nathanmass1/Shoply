import data from './data.json'
import uuid from 'uuid/v4'


const dataArray = [];
for (let item in data.products) {
  dataArray.push({ ...data.products[item], id: item });
}

const INITIAL_STATE = { items: dataArray, cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, cart: [{ ...action.payload, id: uuid() }, ...state.cart] };

    case "REMOVE":
      const cartCopy = [...state.cart];

      let idx = cartCopy.findIndex(item => item.name === action.payload.name)
      if (idx === -1) {
        return { ...state, cart: cartCopy }
      }
      const finalCopy = cartCopy.slice(0, idx).concat(cartCopy.slice(idx + 1))
      return { ...state, cart: finalCopy };

    default:
      return state;
  }
}

export default rootReducer;