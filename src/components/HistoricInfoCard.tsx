import { View, Text, TouchableOpacity } from "react-native";
import { ChevronRight, Droplet } from "react-native-feather";
import React from "react";

interface HistoricInfoCardProps {
	updatedAt: Date | string;
	contentClassName?: string;
	onPress: () => void;
}

const HistoricInfoCard = ({
	updatedAt,
	contentClassName,
	onPress,
}: HistoricInfoCardProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			className={`w-full flex-row items-center bg-primary-background rounded-lg p-4 justify-between ${contentClassName}`}>
			<View className="flex-col items-center gap-x-2">
				<Text className="text-black font-normal text-sm">{updatedAt}</Text>
			</View>

			<View className="flex-row items-center flex-wrap gap-x-2">
				<Text className="text-gray text-xs">Ver detalhes</Text>
				<ChevronRight width={24} height={24} className="text-gray" />
			</View>
		</TouchableOpacity>
	)
}

export default HistoricInfoCard;
