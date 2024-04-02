import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Heading from "../components/Heading";
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

	const monthOptions = [
		{ label: "Janeiro", value: 1 },
		{ label: "Fevereiro", value: 2 },
		{ label: "Março", value: 3 },
		{ label: "Abril", value: 4 },
		{ label: "Maio", value: 5 },
		{ label: "Junho", value: 6 },
		{ label: "Julho", value: 7 },
		{ label: "Agosto", value: 8 },
		{ label: "Setembro", value: 9 },
		{ label: "Outubro", value: 10 },
		{ label: "Novembro", value: 11 },
		{ label: "Dezembro", value: 12 },
	]

	const yearsOptions = [
		{ label: "2024", value: 2024 },
		{ label: "2023", value: 2023 },
		{ label: "2022", value: 2022 },
	]

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
						<Dropdown label="Mês" data={monthOptions} />
					</View>
					<View className="w-1/2">
						<Dropdown label="Ano" data={yearsOptions} />
					</View>
				</View>
			</View>

			<View className="w-[85%]">
				{informations?.map((data) => (
					<HistoricInfoCard
						key={data.id}
						contentClassName="mt-4"
						onPress={() => {
							navigation.navigate('HistoricDetails', { data: data })
						}}
						updatedAt={formatDate(data.date)}
					/>
				))}
				<Text className="text-white font-semibold">Entrar</Text>
			</View>
		</View >
	)
}

export default Historic;