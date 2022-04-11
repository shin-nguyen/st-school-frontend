import { fetchRecord, fetchRecords, loadingRecord } from "../actions/record-action.js";

import RequestService from "./request-service";

export const getRecords = (id) => async (dispatch) => {
  dispatch(loadingRecord());
  const response = await RequestService.get(`/records/all-user/${id}`);
  dispatch(fetchRecords(response.data));
};

export const getRecord = (id) => async (dispatch) => {
  dispatch(loadingRecord());
  const response = await RequestService.get(`/records/${id}`);
  dispatch(fetchRecord(response.data));
};

export const addRecord = (data) => async (dispatch) => {
  dispatch(loadingRecord());
  dispatch(fetchRecord(data));
};
