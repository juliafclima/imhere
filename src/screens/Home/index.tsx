import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Participant from "./components/Participant";
import { styles } from "./style";

export default function Home() {
  const participants = [
    "Júlia",
    "Rodrigo",
    "Vini",
    "Diego",
    "Biro",
    "Ana",
    "Isa",
    "Jack",
    "Mayk",
    "João",
  ];

  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Intl.DateTimeFormat("pt-BR", options).format(date);
  }

  function handleParticipantAdd() {
    if (participants.includes("Rodrigo")) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome."
      );
    }

    Alert.alert("Adicionado!", "Você clicou no botão adicionar");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover",
      `Tem certeza que quer deletar o participante ${name}?`,
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => Alert.alert("Deletado!"),
        },
      ]
    );
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
          style={[styles.button, { opacity: 0.8 }]}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => {
              handleParticipantRemove(item);
            }}
          />
        )}
      />
    </View>
  );
}
