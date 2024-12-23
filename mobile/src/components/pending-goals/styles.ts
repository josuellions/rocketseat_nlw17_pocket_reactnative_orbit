import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const s = StyleSheet.create({
	container: {
		gap: 8,
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",

		width: "auto",
		height: "auto",
		maxHeight: 240,
		// flexWrap: "wrap",
	},
});
