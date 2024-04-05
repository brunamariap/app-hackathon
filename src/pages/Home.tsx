import { ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Heading from "../components/Heading";
import InfoCard from "../components/InfoCard";
import { Droplet, Thermometer, CloudSnow } from "react-native-feather";
import { MaterialIcons } from '@expo/vector-icons';
import controleH2OApi, { api } from "../services/api";
import { useEffect, useState } from "react";
import { Characteristics, Information } from "../interfaces/information";
import { formatDate } from "../utils/formatDate";
import { City } from "../interfaces/city";
import CardWaterQuality from "../components/CardWaterQuality";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
	const navigation = useNavigation();

	// const [informations, setInformations] = useState<Information | undefined>();
	const [informations, setInformations] = useState<Characteristics | undefined>();
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
			// const { data } = await api.get(`informations/?cityId=${cityId}`)
			const { data } = await controleH2OApi.get(`caracteristicas/`)

			const now = new Date();
			let closestData = null;
			let shortestDifference = Infinity;

			data.forEach((item: Characteristics) => {
				const itemDate = new Date(item.data_criacao);
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
		// getCity("1");
	}, [])

	return (
		<View
			className="flex-1 items-center justify-center bg-background-color w-full"
		>
			<View className="w-[85%] mt-20">
				<Heading
					// title={city?.name + " - " + city?.state}
					title=" "
					description={formatDate(informations?.data_criacao)}
				/>

				<CardWaterQuality
					isPotable={informations?.potabilidade_agua}
					contentClassName="mt-4"
				/>
			</View>

			<ScrollView
				className="w-[85%] mt-4"
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					marginTop: 8,
					rowGap: 16,
					flexGrow: 1,
				}}
			>
				<InfoCard
					contentClassName=""
					property="pH"
					data={informations?.ph.toString().substring(0, 3)}
					updatedAt={formatDate(informations?.data_criacao)}
					onPress={() => {
						navigation.navigate("PropertyDetails", { data: informations?.ph, propertyName: "pH" })
					}}
					icon={<FontAwesome name="balance-scale" size={24} color="#007EA7" />}
				/>
				<InfoCard
					contentClassName=""
					property="Sulfato"
					data={`${informations?.sulfato.toString().substring(0, 5)} mg/L`}
					updatedAt={formatDate(informations?.data_criacao)}
					onPress={() => {
						navigation.navigate("PropertyDetails", { data: `${informations?.sulfato} mg/L`, propertyName: "Sulfato" })
					}}
					// icon={<Thermometer width={28} height={28} className="text-primary" />}
					icon={<MaterialCommunityIcons name="molecule" size={28} color="#007EA7" />}
				/>
				<InfoCard
					contentClassName=""
					property="Condutividade"
					data={`${informations?.condutividade.toString().substring(0, 5)} μS/cm`}
					updatedAt={formatDate(informations?.data_criacao)}
					onPress={() => {
						navigation.navigate("PropertyDetails", { data: `${informations?.condutividade} μS/cm`, propertyName: "Condutividade" })
					}}
					icon={<MaterialIcons name="waves" size={28} color="#007EA7" />}
				/>
				<InfoCard
					contentClassName=""
					property="Carbono orgânico"
					data={`${informations?.carbono_organico.toString().substring(0, 5)} mg/L`}
					updatedAt={formatDate(informations?.data_criacao)}
					onPress={() => {
						navigation.navigate("PropertyDetails", { data: `${informations?.carbono_organico} mg/L`, propertyName: "Carbono orgânico" })
					}}
					// icon={<MaterialIcons name="waves" size={28} color="#007EA7" />}
					icon={<MaterialCommunityIcons name="molecule-co" size={28} color="#007EA7" />}
				/>
				<InfoCard
					contentClassName=""
					property="Trihalometanos"
					data={`${informations?.trihalometanos.toString().substring(0, 5)} µg/L`}
					updatedAt={formatDate(informations?.data_criacao)}
					onPress={() => {
						navigation.navigate("PropertyDetails", { data: `${informations?.trihalometanos} µg/L`, propertyName: "Trihalometanos" })
					}}
					icon={<Droplet width={28} height={28} className="text-primary" />}
				/>
				<Text className="text-white font-semibold">Entrar</Text>
			</ScrollView>
		</View >
	)
}

export default Home;