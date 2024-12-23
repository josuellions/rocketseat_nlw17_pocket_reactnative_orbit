import { View, Text, Image } from "react-native";

import { s } from "./styles";
import { Button } from "@/components/ui/button";
import { router } from "expo-router";
import { Plus, CheckCircleIcon } from "lucide-react-native";
import ProgressBar from "@/components/ui/progress-bar";
import Separator from "@/components/ui/separator";
import PendingGoals from "@/components/pending-goals";
import { colors } from "@/styles/colors";

export default function Summary() {
	const summarys = [
		{ title: "Acordar cedo", completedAt: "09:32" },

		{ title: "Me exercitar", completedAt: "19:32" },

		{ title: "Meditar", completedAt: "20:32" },

		// { title: "Tomar Água a cada 30min", completedAt: "09:32" },

		// { title: "Não usar celular quando for dormir", completedAt: "23:32" },

		// { title: "Evitar tomar café depois das 19h", completedAt: "18:52" },
	];

	const goalsPerDay = [
		{
			date: "Domingo",
			day: "22 de dezembro",
			summarys,
		},
		{
			date: "Segunda-feira",
			day: "23 de dezembro",
			summarys,
		},
		{
			date: "Terça-feira",
			day: "24 de dezembro",
			summarys,
		},
	];

	return (
		<View style={s.container}>
			<View style={s.header}>
				<View style={s.headerContainer}>
					<Image source={require("@/assets/icon.png")} style={s.logo} />
					<Text style={s.headerTitle}>22 Dez - 28 Dez</Text>
				</View>
				<Button
					isLoading={false}
					style={s.buttonContainer}
					onPress={() => router.navigate("/summary")}
				>
					<Button.Icon icon={Plus} />
					<Button.Title>Cadastrar meta</Button.Title>
				</Button>
			</View>

			<View style={s.body}>
				<ProgressBar />

				<View style={s.bodyHeaderContainer}>
					<View style={s.bodyContainerText}>
						<Text style={s.bodyHeaderText}>Você completou</Text>
						<Text style={s.bodyTextQuantidade}> 4 </Text>
						<Text style={s.bodyHeaderText}>de</Text>
						<Text style={s.bodyTextQuantidade}> 25 </Text>
						<Text style={s.bodyHeaderText}> metas nessa semana.</Text>
					</View>

					<Text style={s.bodyHeaderText}>17%</Text>
				</View>

				<Separator />

				<PendingGoals />

				<View style={s.summaryBody}>
					<Text style={s.summaryBodyTitle}>Sua semana</Text>

					{goalsPerDay.map((goal, index) => (
						<View key={String(goal.date)} style={s.summaryBodyContainer}>
							<View style={s.summaryBodyHeader}>
								<View style={s.summaryBodyHeaderTitle}>
									<Text style={s.summaryBodyHeaderSubTitle}>{goal.date}</Text>
									<Text style={s.summaryBodyHeaderSubTitleDate}>
										({goal.day})
									</Text>
								</View>
							</View>

							<View style={s.summarys}>
								{goal.summarys.map((summary, index) => (
									<View style={s.summary} key={String(index)}>
										<CheckCircleIcon size={16} color={colors.violet[600]} />
										<Text style={s.summaryText}>Você completou</Text>
										<Text style={s.summaryTitle}>"{summary.title}"</Text>
										<Text style={s.summaryText}>às</Text>
										<Text style={s.summaryDate}>{summary.completedAt}h</Text>
									</View>
								))}
							</View>
						</View>
					))}
				</View>
			</View>
		</View>
	);
}
