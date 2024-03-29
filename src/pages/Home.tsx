import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Heading from "../components/Heading";
import InfoCard from "../components/InfoCard";
import { Droplet, Thermometer, CloudSnow } from "react-native-feather";
import { MaterialIcons } from '@expo/vector-icons';
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { Information } from "../interfaces/information";
import { formatDate } from "../utils/formatDate";
import { City } from "../interfaces/city";

const Home = () => {
	const navigation = useNavigation();

	const [informations, setInformations] = useState<Information | undefined>();
	const [city, setCity] = useState<City | undefined>();


	const getCity = async (cityId: string | number) => {
		const { data } = await api.get(`cities/?id=${cityId}`)
		setCity(data[0])
	}

	function timeDifference(current: any, previous: any) {
		return Math.abs(current - previous);
	}

	const getInformations = async (cityId: string | number) => {
		try {
			const { data } = await api.get(`informations/?cityId=${cityId}`)

			const now = new Date();
			let closestData = null;
			let shortestDifference = Infinity;

			data.forEach(item => {
				const itemDate = new Date(item.date);
				const difference = timeDifference(now, itemDate);
				if (difference < shortestDifference) {
					shortestDifference = difference;
					closestData = item;
				}
			});
			setInformations(closestData)

		} catch (error) {
			console.log(JSON.stringify(error))
		}
	}

	useEffect(() => {
		getInformations("1");
		getCity("1");
	}, [])

	return (
		<View
			className="flex-1 items-center justify-center bg-background-color w-full"
		>
			<View className="w-[85%]">
				<Heading
					title={city?.name + " - " + city?.state}
					description={formatDate(informations?.date)}
				/>
			</View>

			<View className="w-[85%]">
				<InfoCard
					contentClassName="mt-4"
					property="pH"
					data={informations?.ph}
					updatedAt={formatDate(informations?.date)}
					onPress={() => {
						navigation.navigate("PropertyDetails", { data: informations?.ph, propertyName: "pH" })
					}}
					icon={<Droplet width={28} height={28} className="text-primary" />}
				/>
				<InfoCard
					contentClassName="mt-4"
					property="Temperatura"
					data={informations?.temperature}
					updatedAt={formatDate(informations?.date)}
					onPress={() => {
						navigation.navigate("PropertyDetails", { data: informations?.temperature, propertyName: "Temperatura" })
					}}
					icon={<Thermometer width={28} height={28} className="text-primary" />}
				/>
				<InfoCard
					contentClassName="mt-4"
					property="Condutividade"
					data={informations?.conductivity}
					updatedAt={formatDate(informations?.date)}
					onPress={() => {
						navigation.navigate("PropertyDetails", { data: informations?.conductivity, propertyName: "Condutividade" })
					}}
					icon={<MaterialIcons name="waves" size={28} color="#007EA7" />}
				/>
				<InfoCard
					contentClassName="mt-4"
					property="Oxigênio"
					data={informations?.dissolved_oxygen}
					updatedAt={formatDate(informations?.date)}
					onPress={() => {
						navigation.navigate("PropertyDetails", { data: informations?.dissolved_oxygen, propertyName: "Oxigênio dissolvido" })
					}}
					icon={<MaterialIcons name="waves" size={28} color="#007EA7" />}
				/>
				<InfoCard
					contentClassName="mt-4"
					property="Turbidez"
					data={informations?.turbidity}
					updatedAt={formatDate(informations?.date)}
					onPress={() => {
						navigation.navigate("PropertyDetails", { data: informations?.turbidity, propertyName: "Turbidez" })
					}}
					icon={<CloudSnow width={28} height={28} className="text-primary" />}
				/>
				<Text className="text-white font-semibold">Entrar</Text>
			</View>
		</View >
	)
}

export default Home;