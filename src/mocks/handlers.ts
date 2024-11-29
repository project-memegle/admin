import { http, HttpResponse, passthrough } from 'msw';
import { SIGN_IN_URL } from '../services/LogInService';
import { GET_CAGEGORY_LIST_URL } from '../services/CategoryService';

const baseURL = import.meta.env.VITE_BASE_URL;

export const handlers = [
    http.post(`${baseURL}${SIGN_IN_URL}`, () => {
        return new HttpResponse(null, {
            status: 200,
            statusText: 'OK',
        });
    }),
    http.get(`${baseURL}${GET_CAGEGORY_LIST_URL}`, () => {
        return new HttpResponse(null, {
            status: 204,
            statusText: 'OK',
        });
    }),
];
