import { createStackNavigator } from "@react-navigation/stack";
import PropertyDetails from "../pages/PropertyDetails";
import Home from "../pages/Home";

const Stack = createStackNavigator();

const HomeRoutes = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="Home"
				component={Home}
			/>
			<Stack.Screen
				name="PropertyDetails"
				component={PropertyDetails}
			/>
		</Stack.Navigator>
	)
}

export default HomeRoutes;