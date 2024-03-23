import { createStackNavigator } from "@react-navigation/stack";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Historic from "../pages/Historic";

const Stack = createStackNavigator();

const HistoricRoutes = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="Historic"
				component={Historic}
			/>
		</Stack.Navigator>
	)
}

export default HistoricRoutes;