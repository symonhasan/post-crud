const initialState = {
    posts: [
        {
            feed: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia odio voluptas? Similique fugit nemo nulla, perspiciatis possimus quis optio dolorum ab, culpa nihil facere, rerum officia distinctio sit quisquam?",
            catagory: ['Cat A' , 'Cat B']
        },
        {
            feed: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi consequatur, debitis tenetur maxime corrupti voluptas doloremque aut maiores libero cum nam enim voluptatem blanditiis. Consequuntur modi atque illo molestias?",
            catagory: []
        }
    ],
    catagory: ['Cat A' , 'Cat B'],
    selectedCatagory: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_NEW_CATAGORY":
            const currentCatagory = state.catagory;
            return {
                ...state,
                catagory: [...currentCatagory, action.payload.catagoryName],
                selectedCatagory: [ ...state.selectedCatagory , action.payload.catagoryName ]
            };
        case "SELECT_CATAGORY":
            const flag = state.selectedCatagory.filter(
                (element) => element === action.payload.catagoryName
            ).length;
            if (!flag) {
                return {
                    ...state,
                    selectedCatagory: [
                        ...state.selectedCatagory,
                        action.payload.catagoryName,
                    ],
                };
            } else {
                const newSelectedCatagory = state.selectedCatagory.filter(
                    (element) => element !== action.payload.catagoryName
                );
                return {
                    ...state,
                    selectedCatagory: [...newSelectedCatagory],
                };
            }
        case "CLEAR_SELECTED_CATAGORY":
            return{
                ...state,
                selectedCatagory: []
            }
        default:
    }
    return state;
};

export default reducer;
