import { apiClient } from "./../api/client";
import { API_URLS } from "../api/config";
const { motorbike } = API_URLS;

export const listMotorbikes = payload => {
  return apiClient({ url: motorbike.list, data: payload })
    .then(res => res?.data || {})
    .catch(err => {
      throw new Error(err);
    });
};

export const createMotorbike = payload => {
  return apiClient({ url: motorbike.create, data: payload })
    .then(res => res)
    .catch(err => {
      throw new Error(err?.data?.message);
    });
};

export const updateMotorbike = payload => {
  return apiClient({
    url: motorbike.update + payload.id,
    data: payload,
    method: "PUT"
  })
    .then(res => res?.data || {})
    .catch(err => {
      throw new Error(err?.data?.message || "Can't update record.");
    });
};

export const softDeleteMotorbike = payload => {
  return apiClient({
    url: motorbike.softdelete + payload.id,
    data: payload,
    method: "PUT"
  })
    .then(res => res)
    .catch(err => {
      throw new Error(err);
    });
};

export const getMotorbikeCount = () => {
  return apiClient({ url: motorbike.count })
    .then(res => res.data?.totalRecords || 0)
    .catch(err => {
      throw new Error(err);
    });
};

export const getMotorbikeAggregate = payload => {
  return apiClient({ url: motorbike.aggregation, data: payload })
    .then(res => res.data?.data || [])
    .catch(err => {
      throw new Error(err);
    });
};

export const getMotorbikeById = payload => {
  return apiClient({
    url: motorbike.singlerecord + payload,
    data: { query: { isActive: true, isDeleted: false } },
    method: "GET"
  })
    .then(res => res?.data || {})
    .catch(err => {
      throw new Error(err);
    });
};

export const softDeleteMultipleMotorbike = payload => {
  return apiClient({
    url: motorbike.multisoftdelete,
    data: payload,
    method: "PUT"
  })
    .then(res => res)
    .catch(err => {
      throw new Error(err);
    });
};
