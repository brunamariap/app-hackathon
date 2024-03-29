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
				onValueChange={(value) => (value)}
				items={[
					{ label: '2022', value: '2022' },
					{ label: '2023', value: '2023' },
					{ label: '2023', value: '2024' },
				]}
			/>
		</View>
	)
}

export default Dropdown