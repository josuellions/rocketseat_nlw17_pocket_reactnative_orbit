import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
	container: {
		gap: 2,
		height: 44,
		maxHeight: 44,
		width: "auto",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "transparent",
		borderWidth: 2,
		borderColor: colors.zinc[800],
		borderStyle: "dashed",
		borderRadius: 50,
		paddingLeft: 16,
		paddingRight: 16,
		lineHeight: 1,
	},
	title: {
		fontSize: 12,
		color: colors.zinc[100],
		fontFamily: fontFamily.regular,
	},
});
