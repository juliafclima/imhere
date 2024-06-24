import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

import Participant from "./components/Participant";
import { styles } from "./style";

const handleParticipantAdd = (): void => {
  Alert.alert("Participante adicionado!");
};

export default function Home() {
  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Intl.DateTimeFormat("pt-BR", options).format(date);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>{formatDate(new Date())}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity
          style={[styles.button, {opacity: 0.8}]}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Júlia" />
      <Participant name="Victor" />
    </View>
  );
}
