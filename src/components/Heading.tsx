import { Text, View } from "react-native";

interface HeadingProps {
	title: string;
	description?: string;
}

const Heading = ({
	title,
	description,
}: HeadingProps) => {
	return (
		<View className="w-full flex-col">
			<Text className="font-semibold text-black self-start">{title}</Text>
			{description && <Text>{description}</Text>}
		</View>
	)
}

export default Heading;
