import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://onlysub.com/api/',
	timeout: 10000,
	headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
	config => {
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

export default api;