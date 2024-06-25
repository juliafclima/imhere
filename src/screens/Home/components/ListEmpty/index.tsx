import React from "react";
import { Text } from "react-native";
import { styles } from "./style";

export default function ListEmptyComponent() {
  return (
    <Text style={styles.listEmptyText}>
      Ninguém chegou no evento ainda? Adicione participantes a sua lista de
      presença.
    </Text>
  );
}
