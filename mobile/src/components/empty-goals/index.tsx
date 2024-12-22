import { View, Text, Image } from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/colors";

export function EmptyGoals() {
  return (
    <View style={s.container}>
      <Image source={require("@/assets/logo-in-orbit.png")} style={s.logo} />
      <Image
        source={require("@/assets/lets-start-illustration.png")}
        style={s.illustration}
      />

      <Text style={s.text}>
        Você ainda não cadastrou nenhuma meta,{"\n"} que tal cadastrar um agora
        mesmo?
      </Text>
    </View>
  );
}
