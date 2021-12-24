import {
  FETCH_ALL_USERS_SUCCESS,
  FETCH_USER_INFO_SUCCESS,
  FORM_RESET,
  FETCH_ALL_USERS_BY_QUERY_SUCCESS,
  FETCH_USER_INFO_BY_QUERY_SUCCESS,
  LOADING_DATA,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_CUSTOMER_DASHBOARD_SUCCESS,
  FETCH_ORDER_DASHBOARD_SUCCESS,
  FETCH_GRAPH_DASHBOARD_SUCCESS,
} from "../action-types/admin-action-types";

const initialState = {
  userOrders: [],
  users: [],
  user: {},
  errors: {},
  isLoaded: false,
  graphs: [],
  userResponse: [],
  orderResponse: [],
  dashboardResponse: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return { ...state, isLoaded: true };
    case FETCH_USER_INFO_SUCCESS:
      return { ...state, user: action.payload, isLoaded: false };

    case FETCH_ALL_USERS_SUCCESS:
      return { ...state, users: action.payload, isLoaded: false };

    case FETCH_USER_INFO_BY_QUERY_SUCCESS:
      return { ...state, user: action.payload, isLoaded: false };

    case FETCH_ALL_USERS_BY_QUERY_SUCCESS:
      return { ...state, users: action.payload, isLoaded: false };
    case FETCH_DASHBOARD_SUCCESS:
      return { ...state, dashboardResponse: action.payload, isLoaded: false };
    case FETCH_CUSTOMER_DASHBOARD_SUCCESS:
      return { ...state, userResponse: action.payload, isLoaded: false };
    case FETCH_ORDER_DASHBOARD_SUCCESS:
      return { ...state, orderResponse: action.payload, isLoaded: false };
    case FETCH_GRAPH_DASHBOARD_SUCCESS:
      return { ...state, graphs: action.payload, isLoaded: false };
    case FORM_RESET:
      return { ...state, errors: {} };

    default:
      return state;
  }
};

export default reducer;
