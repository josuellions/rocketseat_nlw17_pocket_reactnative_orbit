import { api } from "@/services/api";
import { Alert } from "react-native";

export async function createGoalCompletion(goalId: string) {
	try {
		await api.post(
			"/goals/completions",
			{ goalId },
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	} catch (error) {
		console.log(error);
		Alert.alert("Goal Completion", "Falha ao completar essa meta!");
	}
}
