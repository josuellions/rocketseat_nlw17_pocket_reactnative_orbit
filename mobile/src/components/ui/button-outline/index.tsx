import {
	TouchableOpacity,
	type TouchableOpacityProps,
	Text,
	type TextProps,
	ActivityIndicator,
	Button,
} from "react-native";

import { Plus, type LucideProps as LucideIconProps } from "lucide-react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

type ButtonProps = TouchableOpacityProps & {
	isLoading?: boolean;
};

type IconProps = {
	icon: React.ComponentType<LucideIconProps>;
};

function ButtonOutline({
	children,
	style,
	isLoading = false,
	...rest
}: ButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			disabled={isLoading}
			style={[s.container, style]}
			{...rest}
		>
			{isLoading ? (
				<ActivityIndicator size="small" color={colors.zinc[100]} />
			) : (
				children
			)}
		</TouchableOpacity>
	);
}

function Title({ children }: TextProps) {
	return <Text style={s.title}>{children}</Text>;
}

function Icon({ icon: Icon }: IconProps) {
	return <Icon size={16} color={colors.zinc[100]} />;
}

ButtonOutline.Title = Title;
ButtonOutline.Icon = Icon;

export { ButtonOutline };
