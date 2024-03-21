import { TextInput } from "react-native"

interface InputPasswordProps {
	placeholder: string;
	contentClassName?: string;
}

const InputPassword = ({ placeholder, contentClassName }: InputPasswordProps) => {
	return (
		<TextInput
			placeholder={placeholder}
			className={`h-14 w-full px-5 py-3 rounded-lg border-gray-light border ${contentClassName}`}
			secureTextEntry={true}
		/>
	)
}

export { InputPassword }