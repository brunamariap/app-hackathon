import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { InputPassword } from "../components/InputPassword";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import controleH2OApi, { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../interfaces/user";

interface UserParams {
	username: string;
	password: string;
}

const Login = () => {

	const { login, user, setUser } = useAuth();

	const navigation = useNavigation()

	const loginSchema = yup.object().shape({
		username: yup
			.string()
			.required("Campo obrigatório"),
		password: yup.string().required("Campo obrigatório"),
	});

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const onSubmitLogin = async (userData: UserParams) => {
		try {
			// console.log('dat1', userData)
			// // const status = await login(userData.username, userData.password);

			// const { data } = await api.get('users/');
			// console.log(data)
			// const foundUser = data.find(
			// 	(user: User) =>
			// 		user.username === userData.username && user.password === userData.password
			// );

			// if (foundUser) {
			// 	console.log("djdnddjsndjn")
			// 	// const loggedUser = await api.get(`users/${foundUser.id}`)
			// 	setUser(foundUser[0])
			// } else {
			// 	Alert.alert("Erro no login", "E-mail ou senha incorretos");
			// }
			await login(userData.username, userData.password);
			// const params = {
			// 	'username': userData.username,
			// 	'password': userData.password,
			// }
			// console.log('params',params)

			// const { data } = await controleH2OApi.post('auth/login/', params);
			// console.log('data',data)

			// await AsyncStorage.multiSet([
			// 	['@ControleH2O:token', data.access],
			// 	['@ControleH2O:refresh', data.refresh]
			// ])

			// await AsyncStorage.setItem('@ControleH2O:user', JSON.stringify(data));
			// console.log('s',status)

			// console.log('data', data)
			// if (status === "error") {
			// 	Alert.alert(
			// 		"Erro ao se autenticar",
			// 		"Nome de usuário ou senha incorretos."
			// 	);
			// }
		} catch (error) {
			console.log(error)
			console.log(JSON.stringify(error))
			Alert.alert(
				"Erro ao se autenticar",
				"Nome de usuário ou senha incorretos, verifique ambos e tente novamente."
			);
		}
	};

	return (
		<View
			className="flex-1 items-center justify-center bg-background-color w-full"
		>
			<View>
				<Image
					source={require("../assets/img/logo_controle.png")}
					className="w-72 h-10"
				/>
			</View>

			<View className="w-[85%] mt-10">
				<Text className="text-black font-semibold text-sm">Seja bem-vindo(a) de volta</Text>
				<View
					className="flex"
				>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<Input
								inputRef={ref}
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
								error={errors?.username?.message}
								placeholder="Usuário"
								contentClassName="mt-5 mb-4"
							/>
						)}
						name="username"
					/>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<Input
								inputRef={ref}
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
								error={errors?.password?.message}
								placeholder="Senha"
								contentClassName="mt-5 mb-4"
								secureTextEntry={true}
							/>
						)}
						name="password"
					/>
				</View>
				<Button
					onPress={handleSubmit(onSubmitLogin)}
					contentClassName="bg-primary mt-7"
				>
					<Text className="text-white font-semibold">Entrar</Text>
				</Button>
				<Text className="text-black font-semibold text-sm self-center mt-4">Não tem uma conta?</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate("Register")}
				>
					<Text className="text-primary font-semibold text-sm self-center">
						Cadastre-se
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Login;