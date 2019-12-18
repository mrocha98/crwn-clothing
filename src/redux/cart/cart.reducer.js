import CartActionsTypes from "./cart.types";

const INITIAL_STATE = {
    hidden: true,
    cartItens: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionsTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionsTypes.ADD_ITEM:
            return {
              ...state,
              cartItens: [...state.cartItens, action.payload]
            };
        default:
            return state;
    }
};

export default cartReducer;
