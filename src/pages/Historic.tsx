import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Heading from "../components/Heading";
import { Droplet } from "react-native-feather";
import { MaterialIcons } from '@expo/vector-icons';
import HistoricInfoCard from "../components/HistoricInfoCard";
import Dropdown from "../components/Dropdown";

const Historic = () => {
	const navigation = useNavigation();

	return (
		<View
			className="flex-1 items-center justify-center bg-background-color w-full"
		>
			<View className="w-[85%]">
				<Heading
					title="Nome da cidade"
					description="Teste"
				/>

				<View className="flex-row justify-between">
					<View className="w-1/2">
						<Dropdown label="Mês" />
					</View>
					<View className="w-1/2">
						<Dropdown label="Ano" />
					</View>
				</View>
			</View>

			<View className="w-[85%]">
				<HistoricInfoCard
					contentClassName="mt-4"
					property="pH"
					data="7.0"
					updatedAt={"2023-09-08"}
				/>
				<Text className="text-white font-semibold">Entrar</Text>
			</View>
		</View >
	)
}

export default Historic;