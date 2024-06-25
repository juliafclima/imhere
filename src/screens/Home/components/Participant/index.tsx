import { Alert, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";

interface PartipantProps {
  name: string;
  onRemove: () => void;
}

export default function Participant({ name, onRemove }: PartipantProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity
        style={[styles.button, { opacity: 0.8 }]}
        onPress={onRemove}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
