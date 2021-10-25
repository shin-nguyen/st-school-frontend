import {
    LOADING_BLOG,
    FETCH_BLOGS,
    FETCH_BLOG_SUCCESS,
    FETCH_BLOGS_BY_FILTER_PARAMS_SUCCESS,
    FETCH_BLOGS_BY_QUERY_SUCCESS,
    FETCH_BLOG_BY_QUERY_SUCCESS,
    DELETE_BLOG,
} from "../action-types/blog-action-types";


const initialState = {
    blogs: [],
    blog: {},
    topics: [],
    isBlogLoading: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOADING_BLOG:
            return {...state, isBlogLoading: true};

        case FETCH_BLOGS:
            return {...state, blogs: action.payload, isBlogLoading: false};

        case FETCH_BLOGS_BY_FILTER_PARAMS_SUCCESS:
            return {...state, blogs: action.payload, isBlogLoading: false};

        case FETCH_BLOG_SUCCESS:
            return {...state, blog: action.payload, topics: action.payload.topics, isBlogLoading: false};

        case FETCH_BLOG_BY_QUERY_SUCCESS:
            return {...state, blog: action.payload, topics: action.payload.topics, isBlogLoading: false};

        case FETCH_BLOGS_BY_QUERY_SUCCESS:
            return {...state, blogs: action.payload, isBlogLoading: false};
        case DELETE_BLOG:{
                console.log(action.payload);
                const newList = [...state.blogs].filter((item) => item.id !== action.payload);
                console.log(newList);
                return {...state, blogs: newList,isBlogLoading: false}
            }   
        default:
            return state;
    }
};

export default reducer;
