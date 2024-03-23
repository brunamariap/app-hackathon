import { Text, View, Image, TouchableOpacity } from "react-native";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { InputPassword } from "../components/InputPassword";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

	const navigation = useNavigation()

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
						contentClassName="mt-5 mb-4"
					/>
					<InputPassword
						placeholder="Senha"
					/>
				</View>
				<Button
					onPress={() => {() => navigation.navigate("Tabs")}}
					contentClassName="bg-primary mt-7"
				>
					<Text className="text-white font-semibold">Entrar</Text>
				</Button>
				<Text className="text-black font-semibold text-sm self-center mt-4">Não tem uma conta?</Text>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Register")
					}}
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