import { TextInput } from "react-native"

interface InputNumberProps {
	placeholder: string;
	contentClassName?: string;
}

const InputNumber = ({
	placeholder,
	contentClassName
}: InputNumberProps) => {
	return (
		<TextInput
			placeholder={placeholder}
			className={`h-14 w-full px-5 py-3 rounded-lg border-gray-light border ${contentClassName}`}
			keyboardType="numeric"
		/>
	)
}

export { InputNumber }