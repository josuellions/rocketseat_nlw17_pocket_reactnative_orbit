import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const s = StyleSheet.create({
	container: {
		flex: 1,
		height: 48,
		paddingLeft: 18,
		paddingRight: 18,
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-between",
		alignItems: "center",
		borderWidth: 2,
		borderRadius: 8,
		margin: 8,
		borderColor: colors.zinc[200],
	},
	textInput: {
		color: colors.zinc[400],
	},
});
