import { View } from "react-native";
import { Input } from "../components/Input";

const Profile = () => {
	return (
		<View className="flex-1 items-center justify-center bg-background-color w-full">
			<View className="w-[85%]">
				<Input
					// inputRef={ref}
					// onChangeText={onChange}
					// onBlur={onBlur}
					// value={value}
					// error={errors?.username?.message}
					placeholder="Username"
					contentClassName="mt-5 mb-4"
					editable={false}
				/>
				<Input
					// inputRef={ref}
					// onChangeText={onChange}
					// onBlur={onBlur}
					// value={value}
					// error={errors?.username?.message}
					placeholder="Nome completo"
					contentClassName="mt-5 mb-4"
					editable={false}
				/>
				<Input
					// inputRef={ref}
					// onChangeText={onChange}
					// onBlur={onBlur}
					// value={value}
					// error={errors?.username?.message}
					placeholder="E-mail"
					contentClassName="mt-5 mb-4"
					editable={false}
				/>
				<Input
					// inputRef={ref}
					// onChangeText={onChange}
					// onBlur={onBlur}
					// value={value}
					// error={errors?.username?.message}
					placeholder="Cidade"
					contentClassName="mt-5 mb-4"
					editable={false}
				/>
				<Input
					// inputRef={ref}
					// onChangeText={onChange}
					// onBlur={onBlur}
					// value={value}
					// error={errors?.username?.message}
					placeholder="Estado"
					contentClassName="mt-5 mb-4"
					editable={false}
				/>
				<Input
					// inputRef={ref}
					// onChangeText={onChange}
					// onBlur={onBlur}
					// value={value}
					// error={errors?.username?.message}
					placeholder="CEP"
					contentClassName="mt-5 mb-4"
					editable={false}
				/>
			</View>
		</View>
	)
}

export default Profile;