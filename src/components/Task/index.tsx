import { View, Text, TouchableOpacity, Switch } from "react-native";
import Checkbox from 'expo-checkbox'
import Icon from "@expo/vector-icons/Feather";
import { styles } from "./styles";

interface TaskProps {
  description: string;
  isChecked: boolean;
  onValueChange: (isChecked: boolean) => void;
  onDeleteTask: () => void;
}

export function Task({ description, onValueChange, isChecked, onDeleteTask }: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox 
        style={styles.checkbox} 
        value={isChecked}
        onValueChange={onValueChange}
      />
      <Text style={isChecked ? styles.isCompleted : styles.description}>
        {description}
      </Text>
      <TouchableOpacity onPress={onDeleteTask}>
        <Icon name="trash" size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}