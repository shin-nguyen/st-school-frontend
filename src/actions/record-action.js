import {
  FETCH_RECORDS,
  FETCH_RECORD,
  LOADING_RECORD,
} from "../action-types/record-action-types";

export const loadingRecord = () => ({
  type: LOADING_RECORD,
});

export const fetchRecords = (record) => ({
  type: FETCH_RECORDS,
  payload: record,
});

export const fetchRecord = (record) => ({
  type: FETCH_RECORD,
  payload: record,
});
