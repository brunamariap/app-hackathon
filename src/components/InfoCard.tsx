import { View, Text, TouchableOpacity } from "react-native";
import { Droplet } from "react-native-feather";
import { Octicons } from '@expo/vector-icons';
import React from "react";

interface InfoCardProps {
	property: string;
	data: string | number;
	updatedAt: Date;
	icon: React.ReactNode;
	contentClassName?: string;
	onPress: () => void;
}

const InfoCard = ({
	property,
	data,
	updatedAt,
	icon,
	contentClassName
}: InfoCardProps) => {
	return (
		<TouchableOpacity
			onPress={() => { }}
			className={`w-full flex-row items-center bg-primary-background rounded-lg p-4 justify-between ${contentClassName}`}>
			<View className="flex-row items-center gap-x-2">
				<View>
					{icon}
				</View>

				<View>
					<Text className="text-black font-normal text-sm">{property}</Text>
					<Text className="text-black font-semibold">{data}</Text>
				</View>
			</View>

			<View className="flex-row items-center flex-wrap gap-x-2">
				<Octicons name="history" size={16} color={"#676767"} />
				<View>
					<Text className="text-gray text-xs">Última atualização em:</Text>
					<Text className="text-gray text-xs">12/12/2023 às 12:00</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default InfoCard;
