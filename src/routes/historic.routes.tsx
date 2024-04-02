import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Historic from "../pages/Historic";
import HistoricDetails from "../pages/HistoricDetails";

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
			<Stack.Screen
				name="HistoricDetails"
				// @ts-expect-error
				component={HistoricDetails}
			/>
		</Stack.Navigator>
	)
}

export default HistoricRoutes;