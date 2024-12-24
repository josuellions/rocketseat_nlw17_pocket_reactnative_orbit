import { Stack } from "expo-router";
import { StatusBar } from "react-native";

import { colors } from "@/styles/colors";

import {
	useFonts,
	Rubik_700Bold,
	Rubik_500Medium,
	Rubik_400Regular,
	Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Loading } from "@/components/loading";

export default function Layout() {
	const queryClient = new QueryClient();

	const [fontsLoaded] = useFonts({
		Rubik_600SemiBold,
		Rubik_400Regular,
		Rubik_500Medium,
		Rubik_700Bold,
	});

	if (!fontsLoaded) {
		return <Loading />;
	}

	return (
		<>
			<StatusBar barStyle={"light-content"} />
			<QueryClientProvider client={queryClient}>
				<Stack
					screenOptions={{
						headerShown: false,
						contentStyle: { backgroundColor: colors.zinc[950] },
					}}
				/>
			</QueryClientProvider>
		</>
	);
}
