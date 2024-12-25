import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const s = StyleSheet.create({
	container: {
		height: 48,
		width: "100%",
		borderWidth: 1,
		//backgroundColor: colors.zinc[950],
		borderColor: colors.zinc[400],
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
	},
	textInput: {
		color: colors.zinc[400],
	},
});
