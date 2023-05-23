import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header } from "../../components/Header";
import React, { useState } from "react";
import uuid from "react-native-uuid";

import Icon from "@expo/vector-icons/Feather";

import { styles } from "./styles";
import { Task } from "../../components/Task";

interface Task {
  description: string;
  isCompleted: boolean;
  id: any;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [description, setDescription] = useState("");
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  function handleCreateTask() {
    setTasks((prevState) => [
      ...prevState,
      { description, id: uuid.v4(), isCompleted: false },
    ]);

    setDescription("");
  }

  function handleTaskCompletion(taskId: string, isCompleted: boolean) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted };
        }
        return task;
      })
    );

    setCompletedTasksCount((prevState) =>
      isCompleted ? prevState + 1 : prevState - 1
    );
  }

  function handleDeleteTask(taskId: string) {
    return setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginTop: -50 }}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={description}
            onChangeText={setDescription}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleCreateTask}
            disabled={description.length <= 0}
          >
            <Icon name="plus-circle" size={18} color="#F2F2F2" />
          </TouchableOpacity>
        </View>

        <View style={styles.countTasksContainer}>
          <View style={styles.countTaksContent}>
            <Text style={styles.createdTasksTitle}>Criadas</Text>
            <View style={styles.counter}>
              <Text style={styles.counterText}>{tasks.length}</Text>
            </View>
          </View>

          <View style={styles.countTaksContent}>
            <Text style={styles.fineshedTasksTitle}>Concluidas</Text>
            <View style={styles.counter}>
              <Text style={styles.counterText}>{completedTasksCount}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id}
          renderItem={({ item: task }) => (
            <Task
              description={task.description}
              onValueChange={(isChecked: boolean) =>
                handleTaskCompletion(task.id, isChecked)
              }
              isChecked={task.isCompleted}
              onDeleteTask={() => handleDeleteTask(task.id)}
            />
          )}
        />
      </View>
    </>
  );
}
