
/*--------------------------------------------------------------------*

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

export default postReducer

/*--------------------------------------------------------------------*/

const postReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return {
                posts: action.payload
            }

        case "CREATE_POST":
            return {
                posts: [...state.posts, action.payload]
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
            return state;
    }
}



export default postReducer;

/*--------------------------------------------------------------------*

// reducers/post.js
import { createSlice } from '@reduxjs/toolkit';

const postInitialState = {
    posts: [],
    isLoading: false,
    error: null,
};

const postSlice = createSlice({
    name: 'post',
    initialState: postInitialState, // Başlangıç durumunu burada tanımlayın
    reducers: {
        // Eylemler ve reducer mantığı buraya gelecek
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { addPost, setPosts, setLoading, setError } = postSlice.actions;

export default postSlice.reducer; // createSlice'ın döndürdüğü reducer'ı export edin

/*--------------------------------------------------------------------*/