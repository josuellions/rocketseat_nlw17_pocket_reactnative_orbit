import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
	container: {
		flex: 1,
		gap: 24,
		padding: 8,
		justifyContent: "flex-start",
		alignItems: "center",
	},

	header: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		alignSelf: "stretch",
		maxHeight: 40,
	},
	headerContainer: {
		flex: 1,
		gap: 8,
		maxWidth: "50%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	headerTitle: {
		fontFamily: fontFamily.semiBold,
		color: colors.zinc[100],
		textTransform: "capitalize",
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
		alignSelf: "stretch",
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
		gap: 24,
		marginTop: 32,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		alignSelf: "stretch",
	},
	summaryBodyScroll: {
		gap: 24,
	},

	summaryBodyTitle: {
		color: colors.zinc[100],
		fontFamily: fontFamily.bold,
	},

	summaryBodyContainer: {
		//flex: 1,
		gap: 8,
		// height: "auto",
		// maxHeight: 120,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		alignSelf: "flex-start",
		// flexGrow: 1,
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
		paddingRight: 4,
		color: colors.zinc[100],
		textTransform: "capitalize",
		fontFamily: fontFamily.medium,
	},
	summaryBodyHeaderSubTitleDate: {
		fontSize: 12,
		color: colors.zinc[400],
		fontFamily: fontFamily.regular,
	},

	summarys: {
		gap: 8,
		flexDirection: "column",
		alignSelf: "stretch",
		justifyContent: "flex-start",
		alignItems: "flex-start",
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
