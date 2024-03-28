import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
	return (
		<NavigationContainer>
			<AppRoutes />
			{/* <AuthRoutes /> */}
		</NavigationContainer>
	)
}

export default Routes;