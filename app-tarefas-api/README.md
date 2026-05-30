# App 27 - Cadastro de Tarefas com API

Gerenciador de tarefas profissional desenvolvido em React Native + Expo, seguindo arquitetura Clean Architecture com CRUD completo integrado a API externa.

## 📁 Estrutura do Projeto

```
app-tarefas-api/
├── src/
│   ├── components/
│   │   └── SafeViewContainer.js      # Container com SafeAreaView para notches
│   ├── styles/
│   │   └── taskStyles.js             # StyleSheet centralizado
│   ├── services/
│   │   └── api.js                    # Serviço Fetch com tratamento de erros
│   └── screens/
│       └── TaskListScreen.js         # Tela principal com modal compartilhado
├── App.js                            # Entry point limpo
└── package.json
```

## 🚀 Instalação e Execução

### 1. Instalar dependências
```bash
cd app-tarefas-api
npm install
```

### 2. Rodar em diferentes plataformas

**Web (Navegador)**
```bash
npm run web
```

**iOS** (requer Mac)
```bash
npm run ios
```

**Android**
```bash
npm run android
```

**Expo CLI diretamente**
```bash
npx expo start
```

## 🏗️ Arquitetura e Componentes

### SafeViewContainer
- Utiliza `SafeAreaView` para blindar contra notches de câmera
- Garante consistência visual em iOS e Android
- Fundo branco padrão

### taskStyles.js
- StyleSheet centralizado com identidade visual limpa
- Estilos para container principal (flex: 1, backgroundColor: "#fff")
- Cartões com sombras sutis (elevation/shadowColor)
- Botão azul "INCLUIR" em topo
- Botões de ação: Editar (amarelo) e Excluir (vermelho)

### api.js (Serviço)
**Base URL:** `https://tarefa-backend.onrender.com/tasks`

**Funções exportadas:**
- `getAllTasks()` - GET `/` - Retorna lista de tarefas
- `createTask(taskData)` - POST `/` - Cria nova tarefa
- `updateTask(id, taskData)` - PUT `/{id}` - Atualiza tarefa
- `deleteTask(id)` - DELETE `/{id}` - Remove tarefa

Todas envolvidas em try/catch com tratamento de erros.

### TaskListScreen.js
**Funcionalidades:**
- ✅ Cabeçalho "Tarefas"
- ✅ Botão "INCLUIR" azul que abre Modal
- ✅ FlatList renderizando cards da API
- ✅ Modal único para Criar e Editar
- ✅ Cards com título, descrição, botões Editar/Excluir
- ✅ ActivityIndicator durante carregamentos
- ✅ Validação de campos obrigatórios
- ✅ Confirmação antes de deletar
- ✅ Mensagem "Nenhuma tarefa registrada" quando vazio

## 🎨 Design Visual

| Elemento | Cor | Descrição |
|----------|-----|-----------|
| Fundo Principal | #fff | Branco puro |
| Botão INCLUIR | #007AFF | Azul iOS padrão |
| Botão Editar | #FFD700 | Ouro/Amarelo |
| Botão Excluir | #FF3B30 | Vermelho iOS |
| Texto Primário | #333 | Cinza escuro |
| Texto Secundário | #666 | Cinza médio |
| Sombra Cards | rgba(0,0,0,0.1) | Sutil |

## 🔒 Segurança de Dados

- ✅ Validação de inputs obrigatórios
- ✅ Tratamento de erros sem expor detalhes técnicos
- ✅ Headers Content-Type JSON explícitos
- ✅ Erro HTTP capturado e tratado
- ✅ Estados de loading/submitting para prevenir duplicação

## 📦 Dependências Principais

```json
{
  "expo": "^56.0.0",
  "react": "^18.3.1",
  "react-native": "^0.76.0",
  "react-native-safe-area-context": "^4.11.7",
  "react-native-screens": "^4.2.0"
}
```

## 🧪 Fluxo de Uso

1. **Inicializar:** Tela carrega `ActivityIndicator` enquanto busca tarefas
2. **Criar:** Clica "INCLUIR" → Modal abre vazio → Preenche dados → Clica "Salvar"
3. **Editar:** Clica "Editar" em um card → Modal abre preenchido → Altera dados → Clica "Salvar"
4. **Deletar:** Clica "Excluir" → Confirma em Alert → Tarefa removida localmente
5. **Listar:** FlatList exibe todos os cards com dados sincronizados da API

## 🔧 Variáveis de Ambiente (Opcional)

Se precisar customizar a URL da API:
```javascript
// Em src/services/api.js
const BASE_URL = process.env.REACT_APP_API_URL || 'https://tarefa-backend.onrender.com/tasks';
```

## 📝 Notas Importantes

- Modal é compartilhado entre criação e edição (único componente)
- Estado local é atualizado **imediatamente** após sucesso da API
- ActivityIndicator aparece apenas durante requisições
- Todos os botões ficam desabilitados durante submissão
- Notches iOS/Android são blindados automaticamente pelo SafeAreaView
