import React, { useMemo, useRef } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Button } from "../ui/button";
import { s } from "./style";
import { CheckCheckIcon, CheckCircleIcon } from "lucide-react-native";
import { colors } from "@/styles/colors";

interface DayWeekProps {
	amount: number;
	title: string;
	icon: string;
}

export function CreateGoal() {
	const dimensions = useWindowDimensions();
	const bootomSheetRef = useRef<BottomSheet>(null);
	const snapPoints = {
		min: 128,
		max: dimensions.height - 128,
	};
	const daysWeek = useMemo<DayWeekProps[]>(() => {
		return [
			{
				title: "1x na semana",
				icon: "🥱",
				amount: 1,
			},
			{
				title: "2x na semana",
				icon: "🙂",
				amount: 2,
			},
			{
				title: "3x na semana",
				icon: "😎",
				amount: 3,
			},
			{
				title: "4x na semana",
				icon: "🤪",
				amount: 4,
			},
			{
				title: "5x na semana",
				icon: "😜",
				amount: 5,
			},
			{
				title: "6x na semana",
				icon: "🤯",
				amount: 6,
			},
			{
				title: "Todos os dias da semana ",
				icon: "🔥",
				amount: 7,
			},
		];
	}, []);

	return (
		<BottomSheet
			ref={bootomSheetRef}
			snapPoints={[snapPoints.min, snapPoints.max]}
			//handleIndicatorStyle={s.indicator}
			//backgroundStyle={s.container}
			enableOverDrag={false}
		>
			<View style={s.container}>
				<View style={s.header}>
					<Text style={s.headerTitle}>Cadastrar meta</Text>
					<Text style={s.headerText}>
						Adicione atividades que te fazem bem e que você{"\b"} quer continuar
						praticando toda semana.
					</Text>
					<Text style={s.headerSubTitle}>Qual atividade?</Text>
					<View style={s.containerInput}>
						<Text style={s.textInput}>
							Praticar exercícios, meditar, etc...
						</Text>
					</View>
					<Text style={s.headerSubTitle}>Quantas vezes na Semana?</Text>
				</View>
			</View>
			<BottomSheetFlatList
				data={daysWeek}
				//contentContainerStyle={s.containerGoal}
				// ListHeaderComponent={() => (
				// 	<Text style={s.headerSubTitle}>Quantas vezes na Semana</Text>
				// )}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => String(item.amount)}
				renderItem={({ item }) => (
					<View style={s.containerGoal}>
						<View style={s.containerGoalItem}>
							<CheckCircleIcon size={16} color={colors.violet[600]} />
							<Text>{item.title}</Text>
							<Text>{item.icon}</Text>
						</View>
					</View>
				)}
			/>
			<View style={s.footer}>
				<Button style={{ width: "98%" }}>
					<Button.Title>Salva</Button.Title>
				</Button>
			</View>
		</BottomSheet>
	);
}
