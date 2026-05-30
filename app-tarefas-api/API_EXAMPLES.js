// API Testing Guide - Exemplo de payload para testes manuais

/*
  BASE URL: https://tarefa-backend.onrender.com/tasks

  Todos os endpoints retornam o objeto atualizado/criado
*/

// 1. GET ALL TASKS
// GET /tasks
// Resposta: Array de tarefas
// [
//   {
//     id: 1,
//     title: "Tarefa 1",
//     description: "Descrição da tarefa 1",
//     createdAt: "2026-05-29T10:00:00Z",
//     updatedAt: "2026-05-29T10:00:00Z"
//   },
//   ...
// ]


// 2. CREATE TASK
// POST /tasks
// Headers: Content-Type: application/json
// Body:
{
  "title": "Minha Nova Tarefa",
  "description": "Uma descrição detalhada"
}
// Resposta:
// {
//   "id": 123,
//   "title": "Minha Nova Tarefa",
//   "description": "Uma descrição detalhada",
//   "createdAt": "2026-05-29T10:05:00Z",
//   "updatedAt": "2026-05-29T10:05:00Z"
// }


// 3. UPDATE TASK
// PUT /tasks/{id}
// Headers: Content-Type: application/json
// Body:
{
  "title": "Tarefa Atualizada",
  "description": "Nova descrição"
}
// Resposta: Objeto atualizado com ID preservado


// 4. DELETE TASK
// DELETE /tasks/{id}
// Resposta: { success: true } ou { message: "Tarefa removida" }


/*
  TESTES USANDO CURL (para testar a API)

  // Listar todas
  curl -X GET https://tarefa-backend.onrender.com/tasks

  // Criar
  curl -X POST https://tarefa-backend.onrender.com/tasks \
    -H "Content-Type: application/json" \
    -d '{"title":"Teste","description":"Teste de criação"}'

  // Atualizar (ID = 1)
  curl -X PUT https://tarefa-backend.onrender.com/tasks/1 \
    -H "Content-Type: application/json" \
    -d '{"title":"Atualizado","description":"Nova desc"}'

  // Deletar (ID = 1)
  curl -X DELETE https://tarefa-backend.onrender.com/tasks/1
*/
