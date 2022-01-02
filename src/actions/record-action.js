import {
  FETCH_RECORDS,
  LOADING_RECORD,
} from "../action-types/record-action-types";

export const loadingRecord = () => ({
  type: LOADING_RECORD,
});

export const fetchRecord = (record) => ({
  type: FETCH_RECORDS,
  payload: record,
});
