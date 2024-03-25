import React, { createContext, useCallback, useContext, useState } from "react";
import { User } from "../interfaces/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import controleH2OApi from "../services/api";

interface AuthProviderProps {
	children: React.ReactNode;
}

interface AuthContextProps {
	user: User | undefined;
	login: () => void;
	logout: () => void;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | undefined>();

	const login = useCallback(async (username: string, password: string) => {
		try {
			const params = {
				'username': username,
				'password': password,
			}

			// const { data } = await controleH2OApi.post('autenticacao/token/', params);

			// await AsyncStorage.multiSet([
			// 	['@ControleH2O:token', data.access],
			// 	['@ControleH2O:refresh', data.refresh]
			// ])

			// getStudentProfile();
			// await AsyncStorage.setItem('@ControleH2O:user', JSON.stringify(data));
		} catch (error) {
			throw new Error(error)
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
		login,
		logout,
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
