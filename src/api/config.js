export const TOKEN_KEY = "authToken";
export const REFRESH_TOKEN_KEY = "refreshToken"; // Change URL as per your server configuration

let serviceUrl = process.env.REACT_APP_SERVICE_URL;
const BASE_URL = `${serviceUrl}/admin`;
export const UPLOAD_URL = `${BASE_URL}/upload`;
export const API_URLS = {
  auth: {
    url: `${BASE_URL}`,
    login: `${BASE_URL}/auth/login`,
    logout: `${BASE_URL}/auth/logout`,
    resetPassword: `${BASE_URL}/auth/reset-password`,
    forgotPassword: `${BASE_URL}/auth/forgot-password`,
    register: `${BASE_URL}/auth/register`,
    validateOtp: `${BASE_URL}/auth/validate-otp`,
    changePassword: `${BASE_URL}/user/change-password/`,
    updateProfile: `${BASE_URL}/user/update-profile/`,
    login: `${BASE_URL}/auth/login/`
  },
  detection: {
    create: `${BASE_URL}/detection/create`,
    update: `${BASE_URL}/detection/update/`,
    delete: `${BASE_URL}/detection/delete/`,
    multidelete: `${BASE_URL}/detection/deleteMany/`,
    list: `${BASE_URL}/detection/list`,
    count: `${BASE_URL}/detection/count`,
    aggregate: `${BASE_URL}/detection/aggregate`,
    softdelete: `${BASE_URL}/detection/softDelete/`,
    multisoftdelete: `${BASE_URL}/detection/softDeleteMany/`,
    singlerecord: `${BASE_URL}/detection/`
  },
  motorbike: {
    create: `${BASE_URL}/motorbike/create`,
    update: `${BASE_URL}/motorbike/update/`,
    delete: `${BASE_URL}/motorbike/delete/`,
    multidelete: `${BASE_URL}/motorbike/deleteMany/`,
    list: `${BASE_URL}/motorbike/list`,
    count: `${BASE_URL}/motorbike/count`,
    aggregate: `${BASE_URL}/motorbike/aggregate`,
    softdelete: `${BASE_URL}/motorbike/softDelete/`,
    multisoftdelete: `${BASE_URL}/motorbike/softDeleteMany/`,
    singlerecord: `${BASE_URL}/motorbike/`
  },
  user: {
    create: `${BASE_URL}/user/create`,
    update: `${BASE_URL}/user/update/`,
    delete: `${BASE_URL}/user/delete/`,
    multidelete: `${BASE_URL}/user/deleteMany/`,
    list: `${BASE_URL}/user/list`,
    count: `${BASE_URL}/user/count`,
    aggregate: `${BASE_URL}/user/aggregate`,
    softdelete: `${BASE_URL}/user/softDelete/`,
    multisoftdelete: `${BASE_URL}/user/softDeleteMany/`,
    singlerecord: `${BASE_URL}/user/`
  },
  role: {
    list: `${BASE_URL}/role/list`
  },
  userRole: {
    create: `${BASE_URL}/userRole/create`,
    list: `${BASE_URL}/userRole/list`,
    softdelete: `${BASE_URL}/userRole/softDelete/`
  }
};
