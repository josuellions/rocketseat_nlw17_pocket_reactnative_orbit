import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";

export const s = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: 172,
		height: 54,
		marginTop: 24,
		marginBottom: 28,
	},
	illustration: {
		width: 340,
		height: 360,
		marginTop: 24,
		marginBottom: 28,
	},
	text: {
		fontSize: 16,
		marginTop: 12,
		textAlign: "center",
		fontFamily: fontFamily.regular,
		color: colors.zinc[100],
	},
});
