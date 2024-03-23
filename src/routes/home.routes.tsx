import { createStackNavigator } from "@react-navigation/stack";
import Details from "../pages/Details";
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
				name="Details"
				component={Details}
			/>
		</Stack.Navigator>
	)
}

export default HomeRoutes;