import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const s = StyleSheet.create({
	container: {
		flex: 1,
		margin: 8,
		width: "auto",
		maxHeight: 4,
		borderRadius: 8,
		backgroundColor: colors.zinc[900],
	},
});
