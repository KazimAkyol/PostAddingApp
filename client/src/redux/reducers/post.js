

// reducers/post.js
const initialState = {
    posts: [],
    loading: false,
    error: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        // Post ekleme, güncelleme, silme veya alma işlemleri burada olacak
        case 'FETCH_POSTS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                loading: false,
                posts: action.payload,
            };
        case 'FETCH_POSTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        // Diğer eylemler...
        default:
            return state;
    }
};

/*--------------------------------------------------------------------*

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

/*--------------------------------------------------------------------*/

export default postReducer