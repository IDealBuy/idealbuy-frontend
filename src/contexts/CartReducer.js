
// Guarda el carrito en el localStorage, si esta vacío, guarda un array vacío.
const saveStorageCart = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
}



// Cada vez que actualizamos, guaradmos en local storage
// Actualizamos el nímero de items en el carrito
export const updateCart = (cartItems) => {
    saveStorageCart(cartItems);
    let itemCount = cartItems.reduce( (accumulator, product) => {
            return accumulator + product.quantity
        }, 0);
    return { itemCount }
}

// CartReducer actualiza el estado del carrito segun la opción


export const CartReducer = (state, action) => {
    
    switch (action.type) {

        case "ADD":
            // Di no existe el producto, lo agregamos al estado con un parámetro de cantidad igual a 1
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
            // Validamos que exista el producto y aumentamos en 1
            let idItem = state.cartItems.findIndex(item => item.id === action.payload.id)
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