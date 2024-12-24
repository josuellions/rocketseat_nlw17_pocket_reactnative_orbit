import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
	container: {
		gap: 4,
		margin: 36,
		height: 56,
		maxHeight: 56,
		width: "60%",
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.violet[500],
	},
	title: {
		fontSize: 16,
		color: colors.zinc[100],

		fontFamily: fontFamily.semiBold,
	},
});
