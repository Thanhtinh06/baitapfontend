//set up state giỏ hàng trên store
const stateCart = {
  cartList: [],
};

const cartReducer = (state = stateCart, action) => {
  let cartUpdate = [...state.cartList];

  const findIndexItem = (item) => {
    return cartUpdate.findIndex((itemCart) => itemCart.maSP === item.maSP);
  };

  const removeItem = (cartItem) => {
    let index = findIndexItem(cartItem);
    cartUpdate.splice(index, 1);
    return cartUpdate;
  };

  switch (action.type) {
    case "ADD_CART": {
      let index = findIndexItem(action.itemCart);
      if (index !== -1) {
        cartUpdate[index].soLuong += 1;
      } else {
        cartUpdate.push(action.itemCart);
      }
      //set State
      return {...state,
        cartList: cartUpdate
      };
    };

    case "CHANGE_AMOUNT": {
      let index = findIndexItem(action.cartItem);
      if (action.status === "add") {
        cartUpdate[index].soLuong += 1;
      } else {
        cartUpdate[index].soLuong -= 1;
        if (cartUpdate[index].soLuong < 1) {
          removeItem(action.cartItem);
        }
      }
      //set state
      return {...state,
        cartList: cartUpdate
      };
    };

    case "DELETE_ITEM": {
      let cartUpdate = removeItem(action.cartItem);
      return {...state,
        cartList: cartUpdate
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
