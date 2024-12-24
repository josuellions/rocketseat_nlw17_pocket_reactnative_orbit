import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
	container: {
		//flex: 1,
		//flexWrap: "wrap",
		flexDirection: "row",
		alignItems: "center",
		//alignSelf: "stretch",
		justifyContent: "space-between",
		maxHeight: 52,
		height: 52,
		paddingHorizontal: 12,
	},
	content: {
		alignItems: "center",
		gap: 8,
	},
});
