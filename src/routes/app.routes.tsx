import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Home as HomeIcon, BarChart, User } from "react-native-feather";
import Profile from "../pages/Profile";
import HomeRoutes from "./home.routes";
import HistoricRoutes from "./historic.routes";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppRoutes = () => {
	const TabNavigation = () => {
		return (
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: "#FFF",
						borderWidth: 0,
						height: 70,
						borderTopWidth: 0,
					},
					tabBarShowLabel: false,
					tabBarActiveTintColor: "#007EA7",
					tabBarInactiveTintColor: "#676767",
				}}
			>
				<Tab.Screen
					name="HomeRoutes"
					component={HomeRoutes}
					options={{
						tabBarIcon: ({ color }) =>
							<HomeIcon width={28} height={28} color={color} />,
					}}
				/>
				<Tab.Screen
					name="HistoricRoutes"
					component={HistoricRoutes}
					options={{
						tabBarIcon: ({ color }) =>
							<BarChart width={28} height={28} color={color} />,
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						tabBarIcon: ({ color }) =>
							<User width={28} height={28} color={color} />,
					}}
				/>
			</Tab.Navigator>
		)
	}

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Tabs" component={TabNavigation} />
		</Stack.Navigator>
	)
}
export default AppRoutes;