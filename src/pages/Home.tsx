import { Text, View } from "react-native";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { InputPassword } from "../components/InputPassword";

const Home = () => {
	return (
		<View
			className="flex-1 items-center justify-center bg-background-color w-full"
		>
			<View>
				<Text>Logo aqui</Text>
			</View>

			<View className="w-[85%]">
				<Input
					placeholder="Usuário"
				/>
				<Button
					onPress={() => { }}
					contentClassName="bg-primary"
				>
					<Text className="text-white font-semibold">Entrar</Text>
				</Button>
				<Text className="text-black font-semibold text-sm">Não tem uma conta?</Text>
				<Text className="text-primary font-semibold text-sm">Cadastre-se</Text>
			</View>
		</View>
	)
}

export default Home;