import { Text, TextInput, View } from "react-native"

interface InputProps {
	placeholder: string;
	contentClassName?: string;
	error?: string;
	defaultValue?: string;
}

const Input = ({
	placeholder,
	contentClassName,
	error,
	defaultValue,
	...props
}: InputProps) => {
	return (
		<View>
			<TextInput
				placeholder={placeholder}
				className={`h-14 w-full px-5 py-3 rounded-lg border-gray-light border ${contentClassName}`}
				defaultValue={defaultValue}
				{...props}
			/>
			{error && <Text>{error}</Text>}
		</View>
	)
}

export { Input }