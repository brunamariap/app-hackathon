import React, { createContext, useCallback, useContext, useState } from "react";
import { User } from "../interfaces/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import controleH2OApi from "../services/api";

interface AuthProviderProps {
	children: React.ReactNode;
}

interface CreateUserData {
	username: string;
	name: string;
	email: string;
	password: string;
}

interface AuthContextProps {
	user: User | undefined;
	setUser: React.Dispatch<React.SetStateAction<User | undefined>>
	login: (username: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	register: (data: CreateUserData) => Promise<void>;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | undefined>();

	const register = useCallback(async (userData: CreateUserData) => {
		const params = {
			'first_name': userData.name,
			'last_name': '',
			'username': userData.username,
			'email': userData.email,
			'password': userData.password,
		}
		const { data } = await controleH2OApi.post('auth/login/', params);
	}, [])

	const login = useCallback(async (username: string, password: string) => {
		console.log('teste', username, password)
		try {
			const params = {
				'username': username,
				'password': password,
			}
			console.log('params', params)

			const { data } = await controleH2OApi.post('auth/login/', params);
			console.log(data)
			// await AsyncStorage.multiSet([
			// 	['@ControleH2O:token', data.access],
			// 	['@ControleH2O:refresh', data.refresh]
			// ])

			await AsyncStorage.setItem('@ControleH2O:user', JSON.stringify(data));
		} catch (error) {
			// throw new Error(error)
			console.log(JSON.stringify('erro'))
		}
	}, []);

	const logout = useCallback(async () => {
		setUser(undefined);

		await AsyncStorage.multiRemove(
			['@ControleH2O:user', '@ControleH2O:token', '@ControleH2O:refresh']
		)
	}, []);

	const loadSavedSession = async () => {
		const storagedSession = await AsyncStorage.getItem('@ControleH2O:user');

		const user = storagedSession ? JSON.parse(storagedSession) : null

		if (user) {
			setUser(user);
		}
	}

	const contextValues = {
		user,
		setUser,
		login,
		logout,
		register,
	}

	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	);
}

const useAuth = () => {
	const context = useContext(AuthContext);

	return context;
}

export { AuthProvider, useAuth }
