import { TextInput } from "react-native"

interface InputProps {
	placeholder: string;
	contentClassName?: string;
}

const Input = ({
	placeholder,
	contentClassName
}: InputProps) => {
	return (
		<TextInput
			placeholder={placeholder}
			className={`h-14 w-full px-5 py-3 rounded-lg border-gray-light border ${contentClassName}`}
		/>
	)
}

export { Input }