import { FlatList, View, Text } from "react-native";
import { Plus } from "lucide-react-native";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { s } from "./styles";
import { ButtonOutline } from "../ui/button-outline";

import { getPendingGoals } from "@/http/get-pending-goals";

import { Loading } from "../loading";
import { colors } from "@/styles/colors";

export default function PendingGoals() {
	//const queryClient = useQueryClient();

	const { data } = useQuery({
		queryKey: ["pending-goals"],
		queryFn: getPendingGoals,
		staleTime: 1000 * 60, //60 segundos
	});

	if (!data) {
		return <Loading />;
	}

	return (
		// <View style={s.container}>
		// 	{data.map((goal) => (
		// 		<ButtonOutline key={goal.id}>
		// 			<ButtonOutline.Icon icon={Plus} />
		// 			<ButtonOutline.Title>{goal.title}</ButtonOutline.Title>
		// 		</ButtonOutline>
		// 	))}
		// </View>
		<View style={s.container}>
			<FlatList
				data={data}
				horizontal
				keyExtractor={(item) => item.id}
				contentContainerStyle={s.content}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<ButtonOutline
						disabled={item.completionCount === item.desiredWeeklyFrequency}
					>
						<ButtonOutline.Icon
							icon={Plus}
							disabled={item.completionCount === item.desiredWeeklyFrequency}
						/>
						<ButtonOutline.Title
							disabled={item.completionCount === item.desiredWeeklyFrequency}
						>
							{item.title}
						</ButtonOutline.Title>
					</ButtonOutline>
				)}
			/>
		</View>
	);
}
