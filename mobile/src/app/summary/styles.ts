import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
	container: {
		flex: 1,
		padding: 8,
		gap: 24,
	},

	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		color: colors.zinc[100],
		marginTop: 8,
	},
	headerContainer: {
		gap: 8,
		maxWidth: "50%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	headerTitle: {
		fontFamily: fontFamily.semiBold,
		color: colors.zinc[100],
		maxWidth: "auto",
	},

	logo: {
		width: 34,
		height: 34,
	},
	buttonContainer: {
		height: 42,
		maxHeight: 42,
		width: "45%",
		margin: 0,
	},

	body: {
		gap: 8,
		flex: 1,
		flexDirection: "column",
	},
	bodyHeaderContainer: {
		flex: 1,
		maxHeight: 16,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	bodyHeaderText: {
		color: colors.zinc[400],
		fontFamily: fontFamily.regular,
		fontSize: 12,
	},
	bodyContainerText: {
		flexDirection: "row",
	},
	bodyTextQuantidade: {
		color: colors.zinc[100],
		fontFamily: fontFamily.regular,
		fontSize: 12,
	},

	title: {
		color: colors.zinc[100],
	},
	summaryBody: {
		flex: 1,
		gap: 16,
		height: "auto",
		padding: 8,
		flexDirection: "column",
	},

	summaryBodyTitle: {
		color: colors.zinc[100],
		fontFamily: fontFamily.bold,
	},

	summaryBodyContainer: {
		flex: 1,
		gap: 8,
		height: "auto",
		maxHeight: 120,
		flexDirection: "column",
	},

	summaryBodyHeader: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		fontFamily: fontFamily.semiBold,
		maxHeight: 24,
	},

	summaryBodyHeaderTitle: {
		flex: 1,
		gap: 4,
		height: "auto",
		flexDirection: "row",
		alignItems: "baseline",
	},
	summaryBodyHeaderSubTitle: {
		color: colors.zinc[100],
		fontFamily: fontFamily.medium,
	},
	summaryBodyHeaderSubTitleDate: {
		fontSize: 12,
		color: colors.zinc[400],

		fontFamily: fontFamily.regular,
	},

	summarys: {
		gap: 8,
		flex: 1,
		flexDirection: "column",
	},
	summary: {
		gap: 4,
		flexDirection: "row",
	},
	summaryIcon: {
		fontSize: 12,
		color: colors.zinc[400],

		fontFamily: fontFamily.regular,
	},
	summaryText: {
		fontSize: 12,
		color: colors.zinc[400],

		fontFamily: fontFamily.regular,
	},
	summaryTitle: {
		fontSize: 12,
		color: colors.zinc[100],

		fontFamily: fontFamily.regular,
	},
	summaryDate: {
		fontSize: 12,
		color: colors.zinc[100],

		fontFamily: fontFamily.regular,
	},
});
