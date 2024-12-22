import { ActivityIndicator } from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/colors";

export function Loading() {
  return (
    <ActivityIndicator
      color={colors.violet[500]}
      style={s.container}
      size={32}
    />
  );
}
