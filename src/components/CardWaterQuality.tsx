import { View, Text } from "react-native"
import { Droplet } from "react-native-feather";

interface CardWaterQualityProps {
	isPotable: boolean;
	contentClassName?: string;
};

const CardWaterQuality = ({
	isPotable,
	contentClassName
}: CardWaterQualityProps) => {
	return (
		<View className={`w-full p-6 gap-y-2 rounded-lg
			${isPotable ? "bg-success-transparent"
				: "bg-error-transparent"} 
			${contentClassName}`
		}>
			<View className="flex-row items-center justify-between">
				{isPotable ? (
					<Text className="text-black font-semibold text-xl">Água potável</Text>
				) : (
					<Text className="text-black font-semibold text-xl">Água suja</Text>
				)}
				<Droplet width={32} height={32} className={`${isPotable ? "text-success" : "text-error"}`} />
			</View>

			<View>
				{isPotable ? (
					<Text className="text-black font-semibold text-sm">
						De acordo com os sensores, a água está saudável e não  apresenta perigo à comunidade. Para mais detalhes, confira abaixo.
					</Text>
				) : (
					<Text className="text-black font-semibold text-sm">
						De acordo com os sensores, a água não está saudável e pode apresentar perigo à comunidade. Para mais detalhes, confira abaixo.
					</Text>
				)
				}
			</View>
		</View>
	)
}

export default CardWaterQuality