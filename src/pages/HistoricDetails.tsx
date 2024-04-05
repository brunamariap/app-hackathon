import { RouteProp } from '@react-navigation/native';
import { View, Text } from 'react-native';
import {
	LineChart,
	BarChart,
	PieChart,
	ProgressChart,
	ContributionGraph,
	StackedBarChart
} from "react-native-chart-kit";
import { Characteristics } from '../interfaces/information';
import { formatDate } from '../utils/formatDate';
import CardWaterQuality from '../components/CardWaterQuality';

interface HistoricDetailsProps {
	data: Characteristics;
	propertyName: string;
}

const HistoricDetails: React.FC<{ route: RouteProp<Record<string, HistoricDetailsProps>, 'HistoricDetails'> }> = ({ route }) => {
	const { data } = route.params;

	return (
		<View
			className="flex-1 items-center justify-center bg-background-color w-full"
		>
			<View className='w-[85%] items-start gap-y-4'>
				<View className='w-full mb-6'>
					<Text className='text-xl font-semibold'>{formatDate(data.data_atualizacao)}</Text>
				</View>

				<CardWaterQuality isPotable={data.potabilidade_agua} />

				<View className='w-full'>
					<Text className='font-semibold text-lg'>pH</Text>
					<Text className='text-xl'>{data.ph}</Text>
				</View>

				<View className='w-full'>
					<Text className='font-semibold text-lg'>Sulfato</Text>
					<Text className='text-xl'>{data.sulfato} mg/L</Text>
				</View>

				<View className='w-full'>
					<Text className='font-semibold text-lg'>Condutividade</Text>
					<Text className='text-xl'>{data.condutividade} μS/cm</Text>
				</View>

				<View className='w-full'>
					<Text className='font-semibold text-lg'>Carbono Orgânico</Text>
					<Text className='text-xl'>{data.ph} mg/L</Text>
				</View>

				<View className='w-full'>
					<Text className='font-semibold text-lg'>Trihalometanos</Text>
					<Text className='text-xl'>{data.trihalometanos} µg/L</Text>
				</View>
			</View>
		</View>
	)
}

export default HistoricDetails