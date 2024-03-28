import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
	baseURL: "http://10.112.1.218:8000/api",
});

export const controleH2OApi = axios.create({
	baseURL: "http://127.0.0.1:8000/api/",
	headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*', // Permitindo solicitações de todos os origens
  },
});

// controleH2OApi.interceptors.request.use(
// 	async (config) => {
// 		const [token, refresh] = await AsyncStorage.multiGet([
// 			'@ControleH2O:token',
// 			'@ControleH2O:refresh',
// 		]);

// 		if (token[1]) config.headers.Authorization = `Bearer ${token[1]}`;

// 		return config;
// 	}, (error) => {
// 		return Promise.reject(error);
// 	});

// controleH2OApi.interceptors.response.use(

// 	(response) => response,

// 	(error) => Promise.reject((error) || 'Something went wrong')

// );

export default controleH2OApi;
