import { Alert, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";

interface PartipantProps {
  name: string;
}

export default function Participant({ name }: PartipantProps) {
  const handleParticipantRemove = () => {
    Alert.alert("Participante excluido!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity
        style={[styles.button, { opacity: 0.8 }]}
        onPress={handleParticipantRemove}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
