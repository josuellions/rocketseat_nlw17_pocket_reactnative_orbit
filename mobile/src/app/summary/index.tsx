import { View, Text, Image, Alert } from "react-native";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";

import { Button } from "@/components/ui/button";
import { router } from "expo-router";
import { Plus, CheckCircleIcon } from "lucide-react-native";
import ProgressBar from "@/components/ui/progress-bar";
import Separator from "@/components/ui/separator";
import PendingGoals from "@/components/pending-goals";
import { colors } from "@/styles/colors";

import { s } from "./styles";

import { api } from "@/services/api";
import { Loading } from "@/components/loading";

dayjs.locale(ptBR);

export default function Summary() {
	type GoalsPerDayProps = Record<
		string,
		{
			id: string;
			title: string;
			completedAt: string;
		}[]
	>;

	interface SummaryProps {
		completed: number;
		total: number;
		goalsPerDay: GoalsPerDayProps;
	}

	const [summarys, setSummarys] = useState<SummaryProps | null>(null);
	const firstDayOfWeek = dayjs().startOf("week").format("D MMM");
	const lastDayOfWeek = dayjs().endOf("week").format("D MMM");

	async function fetchSummarys() {
		try {
			const response = await api.get("/summary");

			setSummarys(response.data.summary);
		} catch (error) {
			console.log(error);
			Alert.alert("Summary", "Não foi possível carregar as summary's!");
		}
	}

	useEffect(() => {
		fetchSummarys();
	}, []);

	if (!summarys) {
		return <Loading />;
	}

	const completePercentage = Math.round(
		(summarys.completed * 100) / summarys.total,
	);
	return (
		<View style={s.container}>
			<View style={s.header}>
				<View style={s.headerContainer}>
					<Image source={require("@/assets/icon.png")} style={s.logo} />
					<Text style={s.headerTitle}>
						{`${firstDayOfWeek} - ${lastDayOfWeek}`}
					</Text>
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
						<Text style={s.bodyTextQuantidade}> {summarys.completed} </Text>
						<Text style={s.bodyHeaderText}>de</Text>
						<Text style={s.bodyTextQuantidade}> {summarys.total} </Text>
						<Text style={s.bodyHeaderText}> metas nessa semana.</Text>
					</View>

					<Text style={s.bodyHeaderText}>{completePercentage}%</Text>
				</View>

				<Separator />

				<PendingGoals />

				<View style={s.summaryBody}>
					<Text style={s.summaryBodyTitle}>Sua semana</Text>

					{Object.entries(summarys.goalsPerDay).map(([date, goals]) => (
						<View key={String(date)} style={s.summaryBodyContainer}>
							<View style={s.summaryBodyHeader}>
								<View style={s.summaryBodyHeaderTitle}>
									<Text style={s.summaryBodyHeaderSubTitle}>
										{dayjs(date).format("dddd")}
									</Text>
									<Text style={s.summaryBodyHeaderSubTitleDate}>
										({dayjs(date).format("D[ de ] MMMM")})
									</Text>
								</View>
							</View>

							<View style={s.summarys}>
								{goals.map((goal, index) => (
									<View style={s.summary} key={String(index)}>
										<CheckCircleIcon size={16} color={colors.violet[600]} />
										<Text style={s.summaryText}>Você completou</Text>
										<Text style={s.summaryTitle}>"{goal.title}"</Text>
										<Text style={s.summaryText}>às</Text>
										<Text style={s.summaryDate}>
											{dayjs(goal.completedAt).format("HH:mm")}h
										</Text>
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
