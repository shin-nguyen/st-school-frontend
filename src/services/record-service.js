import { fetchRecord, loadingRecord } from "../actions/record-action.js";

import RequestService from "./request-service";

export const getRecords = (id) => async (dispatch) => {
  dispatch(loadingRecord());
  const response = await RequestService.get(`/records/all-user/${id}`);
  dispatch(fetchRecord(response.data));
};
