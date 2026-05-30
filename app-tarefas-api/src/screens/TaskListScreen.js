import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  ActivityIndicator,
  Alert,
  Platform,
  Pressable,
} from 'react-native';
import { taskStyles } from '../styles/taskStyles';
import * as api from '../services/api';

export const TaskListScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await api.getAllTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (error) {
      Alert.alert('Erro', error.message);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPress = () => {
    setEditingId(null);
    setFormData({ title: '', description: '' });
    setModalVisible(true);
  };

  const handleEditPress = (task) => {
    const currentId = task.id || task._id;
    setEditingId(currentId);
    setFormData({ title: task.title, description: task.description });
    setModalVisible(true);
  };

  const handleDeletePress = (task) => {
    const currentId = task.id || task._id;

    // Lógica para executar a exclusão de fato
    const executeDelete = async () => {
      try {
        setSubmitting(true);
        
        // 1. Chama a API
        await api.deleteTask(currentId);
        
        // 2. Remove da tela imediatamente
        setTasks(prev => prev.filter(t => (t.id || t._id) !== currentId));
        
        // 3. Avisa o usuário depois que a tela já limpou
        alert("Tarefa excluída com sucesso!");
      } catch (error) {
        alert('Erro ao deletar: ' + error.message);
      } finally {
        setSubmitting(false);
      }
    };

    // CHAVEAMENTO DE PLATAFORMA (Web vs Mobile)
    if (Platform.OS === 'web') {
      const confirmado = window.confirm('Deseja realmente deletar esta tarefa?');
      if (confirmado) {
        executeDelete();
      }
    } else {
      Alert.alert(
        'Confirmar Exclusão',
        'Deseja realmente deletar esta tarefa?',
        [
          { text: 'Cancelar', onPress: () => {} },
          { text: 'Deletar', onPress: executeDelete, style: 'destructive' },
        ]
      );
    }
  };

  const handleSaveTask = async () => {
    if (!formData.title.trim()) {
      Alert.alert('Validação', 'O título é obrigatório');
      return;
    }

    try {
      setSubmitting(true);
      if (editingId) {
        const updated = await api.updateTask(editingId, formData);
        setTasks(tasks.map(t => ((t.id || t._id) === editingId ? updated : t)));
      } else {
        const newTask = await api.createTask(formData);
        setTasks([...tasks, newTask]);
      }
      setModalVisible(false);
      setFormData({ title: '', description: '' });
    } catch (error) {
      Alert.alert('Erro', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const renderTaskCard = ({ item }) => (
    <View style={taskStyles.taskCard}>
      <Text style={taskStyles.taskTitle}>{item.title}</Text>
      <Text style={taskStyles.taskDescription}>{item.description || 'Sem descrição'}</Text>
      <View style={taskStyles.actionButtons}>
        <TouchableOpacity
          style={taskStyles.editButton}
          onPress={() => handleEditPress(item)}
          disabled={submitting}
        >
          <Text style={taskStyles.editButtonText}>Editar</Text>
        </TouchableOpacity>
        
        {/* PRESSABLE BLINDADO CONTRA DEPRECATION DA WEB */}
        <Pressable
          style={({ pressed }) => [
            taskStyles.deleteButton,
            { opacity: pressed ? 0.6 : 1, pointerEvents: 'auto' }
          ]}
          onPress={() => handleDeletePress(item)} // <--- AGORA PASSA O ITEM INTEIRO!
          disabled={submitting}
        >
          <Text style={taskStyles.deleteButtonText}>Excluir</Text>
        </Pressable>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={taskStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={taskStyles.container}>
      <Text style={taskStyles.header}>Tarefas</Text>

      <TouchableOpacity
        style={taskStyles.addButton}
        onPress={handleAddPress}
        disabled={submitting}
      >
        <Text style={taskStyles.addButtonText}>INCLUIR</Text>
      </TouchableOpacity>

      {tasks.length === 0 ? (
        <Text style={taskStyles.emptyMessage}>Nenhuma tarefa registrada</Text>
      ) : (
        <FlatList
          data={tasks}
          renderItem={renderTaskCard}
          keyExtractor={item => String(item.id || item._id)} // <--- CHAVE BLINDADA CONTRA MONGODB
          contentContainerStyle={taskStyles.listContainer}
        />
      )}

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={taskStyles.modalOverlay}>
          <View style={taskStyles.modalContent}>
            <Text style={taskStyles.modalTitle}>
              {editingId ? 'Editar Tarefa' : 'Nova Tarefa'}
            </Text>

            <TextInput
              style={taskStyles.modalInput}
              placeholder="Título da tarefa"
              value={formData.title}
              onChangeText={text => setFormData({ ...formData, title: text })}
              editable={!submitting}
            />

            <TextInput
              style={[taskStyles.modalInput, { minHeight: 80, textAlignVertical: 'top' }]}
              placeholder="Descrição (opcional)"
              value={formData.description}
              onChangeText={text => setFormData({ ...formData, description: text })}
              multiline
              editable={!submitting}
            />

            <View style={taskStyles.modalButtonRow}>
              <TouchableOpacity
                style={[taskStyles.modalButton, taskStyles.cancelButton]}
                onPress={() => setModalVisible(false)}
                disabled={submitting}
              >
                <Text style={taskStyles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[taskStyles.modalButton, taskStyles.saveButton]}
                onPress={handleSaveTask}
                disabled={submitting}
              >
                {submitting ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={taskStyles.saveButtonText}>Salvar</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};