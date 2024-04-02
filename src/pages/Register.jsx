import { Text, View, Image, TouchableOpacity } from "react-native";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { InputPassword } from "../components/InputPassword";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
	const navigation = useNavigation()

	const loginSchema = yup.object().shape({
		username: yup
			.string()
			.required("Campo obrigatório"),
		name: yup.string().required("Campo obrigatório"),
		email: yup.string().required("Campo obrigatório"),
		cep: yup.string().required("Campo obrigatório"),
		password: yup.string().required("Campo obrigatório"),
		password2: yup.string().required("Campo obrigatório"),
	});

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

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
					<Input
						placeholder="Usuário"
						contentClassName="mt-5"
					/>
					<Input
						placeholder="Nome completo"
						contentClassName="mt-5"
					/>
					<Input
						placeholder="E-mail"
						contentClassName="mt-5"
					/>
					<Input
						placeholder="CEP"
						contentClassName="mt-5"
					/>
					<InputPassword
						placeholder="Senha"
						contentClassName="mt-5"
					/>
					<InputPassword
						placeholder="Confirme sua senha"
						contentClassName="mt-5"
					/>
				</View>
				<Button
					onPress={() => { }}
					contentClassName="bg-primary mt-7"
				>
					<Text className="text-white font-semibold">Entrar</Text>
				</Button>
				<Text className="text-black font-semibold text-sm self-center mt-4">Já tem uma conta?</Text>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Login")
					}}
				>
					<Text className="text-primary font-semibold text-sm self-center">
						Entrar
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Register;