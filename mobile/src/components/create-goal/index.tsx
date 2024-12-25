import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { CheckCircleIcon, CheckCircle2 } from "lucide-react-native";
import { useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { s } from "./style";

import { colors } from "@/styles/colors";
import { useForm, Controller } from "react-hook-form";
import { RadioGroup } from "../ui/radio-group";
import { createGoal } from "@/http/create-goal";

interface DayWeekProps {
	amount: number;
	title: string;
	icon: string;
}

interface createGoalForm {
	title: string;
	desiredWeeklyFrequency: number;
}

interface GoalProps {
	isCreateGoal: boolean;
}

export function CreateGoal({ isCreateGoal }: GoalProps) {
	const queryClient = useQueryClient();
	const { control, register, handleSubmit, reset } = useForm<createGoalForm>();
	const dimensions = useWindowDimensions();
	const bottomSheetRef = useRef<BottomSheet>(null);
	console.log();
	const snapPoints = {
		min: isCreateGoal ? dimensions.height : 128,
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

	async function handleCreateGoal(data: createGoalForm) {
		await createGoal({
			title: data.title,
			desiredWeeklyFrequency: data.desiredWeeklyFrequency,
		});

		queryClient.invalidateQueries({ queryKey: ["pending-goals"] });
		queryClient.invalidateQueries({ queryKey: ["summary"] });

		data.title = "";
		data.desiredWeeklyFrequency = 1;
		//reset();
	}

	const [selectedValue, setSelectedValue] = useState(1);

	return (
		<BottomSheet
			ref={bottomSheetRef}
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
					{/* <View style={s.containerInput}>
						<Text style={s.textInput}>
							Praticar exercícios, meditar, etc...
						</Text>
					</View> */}
					<Controller
						name={"title"}
						control={control}
						defaultValue={""}
						render={({ field }) => (
							<Input
								autoFocus
								onChangeText={field.onChange}
								// value={String(field.value)}
								{...register("title")}
								placeholder="Praticar exercícios, meditar, etc..."
							/>
						)}
					/>

					<Text style={s.headerSubTitle}>Quantas vezes na Semana?</Text>
				</View>
			</View>
			{/*
			<BottomSheetFlatList
				data={daysWeek}
				//contentContainerStyle={s.containerGoal}
				// ListHeaderComponent={() => (
				// 	<Text style={s.headerSubTitle}>Quantas vezes na Semana</Text>
				// )}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => String(item.amount)}
				renderItem={({ item }) => (
					// <View style={s.containerGoal}>
					// 	<View style={s.containerGoalItem}>
					// 		{/* <CheckCircleIcon size={16} color={colors.violet[600]} /> 
					// 		<Text>{item.title}</Text>
					// 		<Text>{item.icon}</Text>
					// 	</View>
					// </View>
					<View style={s.containerGoal}>
						<View style={s.containerGoalItem}>
							{/* <CheckCircleIcon size={16} color={colors.violet[600]} /> 
							<RadioGroup
								options={daysWeek}
								amount={selectedValue}
								onChange={setSelectedValue}
								//selected={item.amount === selectedValue}
							/>
							<Text>{item.title}</Text>
							<Text>{item.icon}</Text>
						</View>
					</View>
				)}
			/>
			*/}
			<Controller
				name={"desiredWeeklyFrequency"}
				control={control}
				defaultValue={1}
				render={({ field }) => (
					<RadioGroup
						options={daysWeek}
						amount={selectedValue}
						//onValueChange={field.onChange}
						value={String(field.value)}
						onChange={(amount: number) => [
							field.onChange(amount),
							setSelectedValue(amount),
						]}
						//selected={item.amount === selectedValue}
					/>
				)}
			/>
			<View style={s.footer}>
				<Button
					style={{ width: "98%" }}
					onPress={handleSubmit(handleCreateGoal)}
				>
					<Button.Title>Salva</Button.Title>
				</Button>
			</View>
		</BottomSheet>
	);
}
