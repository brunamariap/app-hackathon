import React from "react";
import { TouchableOpacity } from "react-native"

interface ButtonProps {
	contentClassName: string;
	children: React.ReactNode;
	onPress: () => void;
}

const Button = ({
	contentClassName,
	children,
	onPress
}: ButtonProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			className={`h-12 justify-center items-center rounded-lg ${contentClassName}`}
		>
			{children}
		</TouchableOpacity>
	)
}

export default Button;