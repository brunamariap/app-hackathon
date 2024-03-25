import { View, Text } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

interface DropdownProps {
	label: string;
	data: {
		label: string;
		value: any;
	}[];
}

const Dropdown = ({ label }: DropdownProps) => {
	return (
		<View className='items-center justify-between'>
			<RNPickerSelect
				placeholder={{ 
					label: label,
					value: undefined,
				}}
				value={undefined}
				onValueChange={(value) => console.log(value)}
				items={[
					// { label: 'Ano', value: 'Ano' },
					{ label: 'Football', value: 'football' },
					{ label: 'Baseball', value: 'baseball' },
					{ label: 'Hockey', value: 'hockey' },
				]}
			/>
		</View>
	)
}

export default Dropdown