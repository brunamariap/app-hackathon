import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native"
import { Information } from "../interfaces/information";

interface PropertyDetailsProps {
	data: string | number;
	propertyName: string;
}

const PropertyDetails: React.FC<{ route: RouteProp<Record<string, PropertyDetailsProps>, 'PropertyDetails'> }> = ({ route }) => {
	const { data, propertyName } = route.params;

	return (
		<View
			className="flex-1 items-center justify-center bg-background-color w-full"
		>
			<Text className="text-black text-3xl">{propertyName}</Text>
			<Text className="text-black font-semibold text-4xl mt-4">{data}</Text>
		</View>
	)
}

export default PropertyDetails