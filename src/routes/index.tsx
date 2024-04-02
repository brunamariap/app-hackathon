import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useAuth } from "../contexts/AuthContext";

const Routes = () => {
	const { user } = useAuth();

	return (
		<NavigationContainer>
			{/* {user?.id ? <AppRoutes /> : <AuthRoutes />} */}
			<AppRoutes />
			{/* <AuthRoutes /> */}
		</NavigationContainer>
	)
}

export default Routes;