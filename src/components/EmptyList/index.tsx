import { View, Image, Text } from "react-native";
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/clipboard.png')} style={{ marginBottom: 16 }} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}