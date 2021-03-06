import {
  LOADING_RECORD,
  FETCH_RECORDS,
  FETCH_RECORD
} from "../action-types/record-action-types.js";

const initialState = {
  records: [],
  record: {},
  isRecordLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_RECORD:
      return { ...state, isRecordLoading: true };

    case FETCH_RECORDS:
      return { ...state, records: action.payload, isRecordLoading: false };

    case FETCH_RECORD:
      return { ...state, record: action.payload, isRecordLoading: false };

    default:
      return state;
  }
};

export default reducer;
