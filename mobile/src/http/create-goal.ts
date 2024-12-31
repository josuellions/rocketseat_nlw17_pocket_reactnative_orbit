import { api } from "@/services/api";
import { Alert } from "react-native";

type CreateGoalProps = {
	title: string;
	desiredWeeklyFrequency: number;
};

export async function createGoal({
	title,
	desiredWeeklyFrequency,
}: CreateGoalProps) {
	try {
		console.log({ title, desiredWeeklyFrequency });
		await api.post(
			"/goals/create",
			{
				title,
				desiredWeeklyFrequency,
			},
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	} catch (error) {
		console.log(error);
		Alert.alert("Goal Create", "Falha criar essa meta!");
	}
}
