


const postReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return {
                posts: action.payload
            }

        case "CREATE_POST":
            return {
                posts: [...state, action.payload]
            }

        case "UPDATE_POST":
            return {
                posts: [state.posts.map(post => post._id === action.payload._id ? action.payload : post)]
            }

        case "DELETE_POST":
            return {
                posts: [state.posts.filter((post) => post._id !== action.payload)]
            }

        default:
            break;
    }
}

export default postReducer