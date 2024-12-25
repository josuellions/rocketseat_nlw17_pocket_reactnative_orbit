import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { s } from "./styles";
import { CheckCircle2, Circle } from "lucide-react-native";
import { colors } from "@/styles/colors";

type RadioButtonProps = TouchableOpacityProps & {
	icon: string;
	title: string;
	amount: number;
	selected: boolean;
	onPress: (amount: number) => void;
};

function Button({
	icon,
	title,
	amount,
	selected,
	onPress,
	...rest
}: RadioButtonProps) {
	return (
		<TouchableOpacity
			style={s.container}
			onPress={() => onPress(amount)}
			{...rest}
		>
			{selected ? (
				<CheckCircle2 size={16} color={colors.violet[600]} />
			) : (
				<Circle size={16} color={colors.zinc[600]} />
			)}
			<Text>{title}</Text>
			<Text>{icon}</Text>
		</TouchableOpacity>
	);
}

// type RadioGroupProps {
// 	option: [],
// 	value: number,
// 	onChange: ,
// }

function RadioGroup({
	options,
	amount,
	title,
	onChange,
	selected,
	...rest
}: any) {
	return (
		<BottomSheetFlatList
			data={options}
			key={amount}
			showsVerticalScrollIndicator={false}
			keyExtractor={(item) => String(item.amount)}
			renderItem={({ item }) => (
				<Button
					key={amount}
					title={item.title}
					amount={amount}
					selected={amount === item.amount}
					onPress={() => onChange(item.amount)}
					icon={item.icon}
					{...rest}
				/>
			)}
		/>
	);
}

export { RadioGroup };
