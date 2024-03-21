import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppRoutes = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Tabs" component={Home} />
		</Stack.Navigator>
	)
}
export default AppRoutes;