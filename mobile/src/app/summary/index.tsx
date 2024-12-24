import { View, Text, Image, ScrollView, Dimensions } from "react-native";
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

import { Loading } from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "@/http/get-summary";
import { CreateGoal } from "@/components/create-goal";

dayjs.locale(ptBR);

export default function Summary() {
	const firstDayOfWeek = dayjs().startOf("week").format("D MMM");
	const lastDayOfWeek = dayjs().endOf("week").format("D MMM");

	const { data } = useQuery({
		queryKey: ["summary"],
		queryFn: getSummary,
		staleTime: 1000 * 60, //60 segundos
	});

	if (!data) {
		return <Loading />;
	}

	const completePercentage = Math.round((data.completed * 100) / data.total);
	const screenHeight = Dimensions.get("window").height;
	const scrollViewHeight = screenHeight * 0.5; // 70% da altura da tela

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
						<Text style={s.bodyTextQuantidade}> {data.completed} </Text>
						<Text style={s.bodyHeaderText}>de</Text>
						<Text style={s.bodyTextQuantidade}> {data.total} </Text>
						<Text style={s.bodyHeaderText}> metas nessa semana.</Text>
					</View>

					<Text style={s.bodyHeaderText}>{completePercentage}%</Text>
				</View>

				<Separator />

				<PendingGoals />

				{/*<View style={s.summaryBody}>
					<Text style={s.summaryBodyTitle}>Sua semana</Text>

					{Object.entries(data.goalsPerDay).map(([date, goals]) => (
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
				</View>*/}

				<View style={s.summaryBody}>
					<Text style={s.summaryBodyTitle}>Sua semana</Text>
					<ScrollView
						contentContainerStyle={s.summaryBodyScroll}
						showsVerticalScrollIndicator={false}
						style={[{ height: scrollViewHeight }]}
					>
						{Object.entries(data.goalsPerDay).map(([date, goals]) => (
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
					</ScrollView>
				</View>
			</View>

			<CreateGoal />
		</View>
	);
}
