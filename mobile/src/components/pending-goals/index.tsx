import { View, Text } from "react-native";

import { s } from "./styles";
import { ButtonOutline } from "../ui/button-outline";
import { Plus } from "lucide-react-native";

export default function PendingGoals() {
	const pendings = [
		"Acordar cedo",
		"Me exercitar",
		"Meditar",
		"Tomar Água a cada 30min",
		"Não usar celular quando for dormir",
		"Evitar tomar café depois das 19h",
	];

	return (
		<View style={s.container}>
			{pendings.map((pending, index) => (
				<ButtonOutline key={String(index)}>
					<ButtonOutline.Icon icon={Plus} />
					<ButtonOutline.Title>{pending}</ButtonOutline.Title>
				</ButtonOutline>
			))}
		</View>
	);
}
