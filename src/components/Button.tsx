import { Text, TouchableOpacity } from "react-native"

interface ButtonProps {
	text: string;
	onPress: () => {};
}

const Button = ({ text, onPress }: ButtonProps) => {
	<TouchableOpacity onPress={onPress}>
		<Text>{text}</Text>
	</TouchableOpacity>
}

export default Button;