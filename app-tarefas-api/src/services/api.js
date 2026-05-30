const BASE_URL = 'https://tarefa-backend.onrender.com/tasks';

const handleError = (error) => {
  console.error('API Error:', error);
  throw new Error('Erro ao comunicar com o servidor. Tente novamente.');
};

export const getAllTasks = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    
    return true;
    
  } catch (error) {
    console.error("Erro no fetch do delete:", error);
    throw error; 
  }
};
