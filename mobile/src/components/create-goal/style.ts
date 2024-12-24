import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
	container: {
		height: 232,
		width: "100%",
		marginLeft: 0.5,
		padding: 8,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
		// backgroundColor: colors.zinc[950],
	},
	header: {
		gap: 16,
		width: "100%",
		height: 128,
	},
	headerTitle: {
		fontSize: 24,
		fontFamily: fontFamily.semiBold,
		//color: colors.zinc[100],
	},
	headerSubTitle: {
		fontSize: 16,
		fontFamily: fontFamily.medium,
	},
	headerText: {
		color: colors.zinc[400],
		textAlign: "left",
	},
	containerInput: {
		height: 48,
		width: "100%",
		borderWidth: 1,
		//backgroundColor: colors.zinc[950],
		borderColor: colors.zinc[400],
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		padding: 8,
	},
	textInput: {
		color: colors.zinc[400],
	},
	containerGoal: {
		height: 68,
		width: "100%",
		flex: 1,
		gap: 16,
		padding: 8,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		// alignSelf: "stretch",
		//backgroundColor: colors.zinc[100],
	},
	containerGoalItem: {
		flex: 1,
		paddingLeft: 18,
		paddingRight: 18,
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-between",
		alignItems: "center",
		borderWidth: 2,
		borderRadius: 12,
		borderColor: colors.zinc[200],
	},
	footer: {
		height: 128,
		width: "100%",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		alignSelf: "stretch",
	},
});
