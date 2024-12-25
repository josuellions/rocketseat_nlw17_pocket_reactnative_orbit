import { TextInput, type TextInputProps } from "react-native";

import { s } from "./styles";

export function Input({ ...rest }: TextInputProps) {
	return <TextInput style={s.container} {...rest} />;
}
