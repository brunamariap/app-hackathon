import { RouteProp } from '@react-navigation/native';
import { View, Text } from 'react-native';

interface HistoricDetailsProps {
	data: string | number;
	propertyName: string;
}

const HistoricDetails: React.FC<{ route: RouteProp<Record<string, HistoricDetailsProps>, 'HistoricDetails'> }> = ({ route }) => {
	const { data } = route.params;

	return (
		<View
			className="flex-1 items-center justify-center bg-background-color w-full"
		>
			
		</View>
	)
}

export default HistoricDetails