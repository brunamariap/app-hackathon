import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { InputPassword } from "../components/InputPassword";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {

	const { login } = useAuth();

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

	const onSubmitLogin = async (data: any) => {
		try {
			// const status = await login(data.username, data.password);

			console.log('login')
			console.log(data)
			// if (status === "error") {
			// 	Alert.alert(
			// 		"Erro ao se autenticar",
			// 		"Nome de usuário ou senha incorretos, verifique ambos e tente novamente."
			// 	);
			// }
		} catch (err) {
			console.log(JSON.stringify(err))
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
							// <Input
							// 	inputRef={ref}
							// 	onChangeText={onChange}
							// 	onBlur={onBlur}
							// 	value={value}
							// 	error={errors?.username?.message}
							// 	placeholder="Sua matrícula"
							// 	keyboardType={"numeric"}
							// />
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
							// <Input
							// 	inputRef={ref}
							// 	onChangeText={onChange}
							// 	onBlur={onBlur}
							// 	value={value}
							// 	error={errors?.username?.message}
							// 	placeholder="Sua matrícula"
							// 	keyboardType={"numeric"}
							// />
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
					{/* <InputPassword
						placeholder="Senha"
					/> */}
				</View>
				<Button
					onPress={() => { () => navigation.navigate("Tabs") }}
					contentClassName="bg-primary mt-7"
				>
					<Text className="text-white font-semibold">Entrar</Text>
				</Button>
				<Text className="text-black font-semibold text-sm self-center mt-4">Não tem uma conta?</Text>
				<TouchableOpacity
					onPress={handleSubmit(onSubmitLogin)}
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