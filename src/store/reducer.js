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
        case "CREATE_POST":
            const posts = state.posts;
            posts.unshift({
                feed: action.payload.feed,
                catagory: [...state.selectedCatagory]
            })
            return{
                ...state,
                posts: [...posts],
                selectedCatagory: []
            }
        case "SET_SELECTED_CATAGORY":
            const { id } = action.payload;
            let newArr = [...state.selectedCatagory , ...state.posts[ id ].catagory ];
            newArr = new Set( newArr );
            return{
                ...state,
                selectedCatagory: [ ...newArr ]
            }
        case "EDIT_POST":
            const oldPosts = state.posts;
            oldPosts.splice( action.payload.id , 1 );
            oldPosts.splice( action.payload.id , 0 , {
                feed: action.payload.feed,
                catagory: state.selectedCatagory
            })
            return{
                ...state,
                posts: [...oldPosts],
                selectedCatagory: []
            }
        case "DELETE_POST":
            const arr = state.posts;
            arr.splice( action.payload.id , 1 );
            return{
                ...state,
                posts: [...arr]
            }
        default:
    }
    return state;
};

export default reducer;
