
const saveStorageCart = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

export const updateCart = cartItems => {

    saveStorageCart(cartItems);

    let itemCount = cartItems.reduce( (accumulator, product) => {
            return accumulator + product.quantity
        }, 0);
    return { itemCount }
}

export const CartReducer = (state, action) => {
    
    switch (action.type) {

        case "ADD":
            
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            } 
            return {
                ...state,
                ...updateCart(state.cartItems),
                cartItems: [...state.cartItems]
            }
        
        case "INCREASE":
            let idItem = state.cartItems.findIndex(item => item.id === action.payload.id)
            console.log(state.cartItems[idItem].quantity)
            state.cartItems[idItem].quantity++
            
            return {
                ...state,
                ...updateCart(state.cartItems),
                cartItems: [...state.cartItems]
            }
        
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
            return {
                ...state,
                ...updateCart(state.cartItems),
                cartItems: [...state.cartItems]
            }

        case "REMOVE":
            return {
                ...state,
                ...updateCart(state.cartItems.filter(item => item.id !== action.payload.id)),
                cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
            }

        
        case "CHECKOUT":
            return {
                cartItems: [],
                checkout: true,
                ...updateCart([]),
            }
        case "CLEAR":
                return {
                    cartItems: [],
                    ...updateCart([]),
                }
        default:
            return state

    }
}