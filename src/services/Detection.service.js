import { apiClient } from "./../api/client";
import { API_URLS } from "../api/config";
const { detection } = API_URLS;

export const listDetections = payload => {
  return apiClient({ 
    url: detection.list, 
    data: payload,
    method: 'GET'
   })
    .then(res => res?.data || {})
    .catch(err => {
      throw new Error(err?.data?.message || "Cannot fetch records.");
    });
};

export const createDetection = payload => {
  return apiClient({ url: detection.create, data: payload, method: 'POST' })
    .then(res => res)
    .catch(err => {
      throw new Error(err?.data?.message);
    });
};

export const updateDetection = payload => {
  return apiClient({
    url: detection.update + payload.id,
    data: payload,
    method: "PUT"
  })
    .then(res => res?.data || {})
    .catch(err => {
      throw new Error(err?.data?.message || "Can't update record.");
    });
};

export const softDeleteDetection = payload => {
  return apiClient({
    url: detection.softdelete + payload.id,
    data: payload,
    method: "PUT"
  })
    .then(res => res)
    .catch(err => {
      throw new Error(err);
    });
};

export const getDetectionCount = () => {
  return apiClient({ url: detection.count })
    .then(res => res.data?.totalRecords || 0)
    .catch(err => {
      throw new Error(err);
    });
};

export const getDetectionAggregate = payload => {
  return apiClient({ url: detection.aggregation, data: payload })
    .then(res => res.data?.data || [])
    .catch(err => {
      throw new Error(err);
    });
};

export const getDetectionById = payload => {
  return apiClient({
    url: detection.singlerecord + payload,
    data: { query: { isActive: true, isDeleted: false } },
    method: "GET"
  })
    .then(res => res?.data || {})
    .catch(err => {
      throw new Error(err);
    });
};

export const softDeleteMultipleDetection = payload => {
  return apiClient({
    url: detection.multisoftdelete,
    data: payload,
    method: "PUT"
  })
    .then(res => res)
    .catch(err => {
      throw new Error(err);
    });
};
