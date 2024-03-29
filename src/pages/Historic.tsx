import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Heading from "../components/Heading";
import { Droplet } from "react-native-feather";
import { MaterialIcons } from '@expo/vector-icons';
import HistoricInfoCard from "../components/HistoricInfoCard";
import Dropdown from "../components/Dropdown";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { City } from "../interfaces/city";
import { Information } from "../interfaces/information";
import { formatDate } from "../utils/formatDate";

const Historic = () => {
	const navigation = useNavigation();

	const [informations, setInformations] = useState<Information[] | undefined>([]);
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
			data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
			setInformations(data)
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
				{informations?.map(({ id, date }) => (
					<HistoricInfoCard
						key={id}
						contentClassName="mt-4"
						updatedAt={formatDate(date)}
					/>
				))}
				<Text className="text-white font-semibold">Entrar</Text>
			</View>
		</View >
	)
}

export default Historic;