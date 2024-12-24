import { View } from "react-native";
import { Plus } from "lucide-react-native";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { s } from "./styles";
import { ButtonOutline } from "../ui/button-outline";

import { getPendingGoals } from "@/http/get-pending-goals";

import { Loading } from "../loading";

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
		<View style={s.container}>
			{data.map((goal) => (
				<ButtonOutline key={goal.id}>
					<ButtonOutline.Icon icon={Plus} />
					<ButtonOutline.Title>{goal.title}</ButtonOutline.Title>
				</ButtonOutline>
			))}
		</View>
	);
}
