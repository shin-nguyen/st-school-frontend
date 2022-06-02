import requestService from "./request-service";
import { toastSuccess, toastError } from "../utils/utils";

export const createEvent = (params) => async () => {
    try {
        const { data } = await requestService.post(`/schedule`, params, true);
        toastSuccess("Create Success");
    } catch (error) {
        toastError(error.message);
    }
}