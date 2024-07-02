const initialState = {
    cartData: [],
    bookmarkedBikes: []  
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: [...state.cartData, action.payload]
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartData: state.cartData.filter(bike => bike.id !== action.payload.id)
            };
        case "TOGGLE_BOOKMARK":
            const bikeIndex = state.bookmarkedBikes.findIndex(bike => bike.id === action.payload.id);
            if (bikeIndex === -1) {
                return {
                    ...state,
                    bookmarkedBikes: [...state.bookmarkedBikes, action.payload]
                };
            } else {
                const updatedBookmarkedBikes = [...state.bookmarkedBikes];
                updatedBookmarkedBikes.splice(bikeIndex, 1);
                return {
                    ...state,
                    bookmarkedBikes: updatedBookmarkedBikes
                };
            }
        default:
            return state;
    }
};

export {
    initialState,
    cartReducer
};
