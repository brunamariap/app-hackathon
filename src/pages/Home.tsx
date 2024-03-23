import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Heading from "../components/Heading";
import InfoCard from "../components/InfoCard";
import { Droplet, Thermometer, CloudSnow } from "react-native-feather";
import { MaterialIcons } from '@expo/vector-icons';

const Home = () => {
	const navigation = useNavigation();

	return (
		<View
			className="flex-1 items-center justify-center bg-background-color w-full"
		>
			<View>
				<Heading
					title="Nome da cidade"
					description="Teste"
				/>
			</View>

			<View className="w-[85%]">
				<InfoCard
					contentClassName="mt-4"
					property="pH"
					data="7.0"
					updatedAt={"2023-09-08"}
					icon={<Droplet width={28} height={28} className="text-primary" />}
				/>
				<InfoCard
					contentClassName="mt-4"
					property="Temperatura"
					data="7.0"
					updatedAt={"2023-09-08"}
					icon={<Thermometer width={28} height={28} className="text-primary" />}
				/>
				<InfoCard
					contentClassName="mt-4"
					property="Condutividade"
					data="7.0"
					updatedAt={"2023-09-08"}
					icon={<MaterialIcons name="waves" size={28} color="#007EA7" />}
				/>
				<InfoCard
					contentClassName="mt-4"
					property="Oxigênio"
					data="7.0"
					updatedAt={"2023-09-08"}
					icon={<MaterialIcons name="waves" size={28} color="#007EA7" />}
				/>
				<InfoCard
					contentClassName="mt-4"
					property="Turbidez"
					data="7.0"
					updatedAt={"2023-09-08"}
					icon={<CloudSnow width={28} height={28} className="text-primary" />}
				/>
				<Text className="text-white font-semibold">Entrar</Text>
			</View>
		</View >
	)
}

export default Home;