import { View, Text } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

interface DropdownProps {
	label: string;
	data: {
		label: string;
		value: string | number;
	}[];
	onChange: () => void;
}

const Dropdown = ({ label, data, onChange }: DropdownProps) => {
	return (
		<View className='items-center justify-between'>
			<RNPickerSelect
				placeholder={{
					label: label,
					value: undefined,
				}}
				value={undefined}
				onValueChange={onChange}
				// onValueChange={(value) => (value)}
				// items={[
				// 	{ label: '2022', value: '2022' },
				// 	{ label: '2023', value: '2023' },
				// 	{ label: '2023', value: '2024' },
				// ]}
				items={data}
			/>
		</View>
	)
}

export default Dropdown