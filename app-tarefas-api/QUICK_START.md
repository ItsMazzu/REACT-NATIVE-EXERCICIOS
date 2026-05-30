# 🚀 Quick Start - App 27 Tarefas

## Estrutura Criada ✅

```
app-tarefas-api/
├── src/
│   ├── components/
│   │   └── SafeViewContainer.js      [SafeAreaView padrão]
│   ├── styles/
│   │   └── taskStyles.js             [StyleSheet centralizado com cores profissionais]
│   ├── services/
│   │   └── api.js                    [Fetch com try/catch - API CRUD]
│   └── screens/
│       └── TaskListScreen.js         [UI principal com Modal compartilhado]
├── App.js                            [Entry point limpo]
├── package.json                      [Todas as dependências instaladas]
├── README.md                         [Documentação completa]
└── API_EXAMPLES.js                   [Exemplos de requisições]
```

## Como Executar

### Opção 1: Web (Mais rápido para testar)
```bash
cd app-tarefas-api
npm run web
```
Abre automaticamente em http://localhost:19006

### Opção 2: Expo Go (Smartphone)
```bash
npm start
# Escaneia o QR code com câmera (iOS) ou Expo Go app (Android)
```

### Opção 3: Android Emulator
```bash
npm run android
```

### Opção 4: iOS Simulator (Mac apenas)
```bash
npm run ios
```

## Funcionalidades Implementadas

### ✅ Listagem de Tarefas
- Busca automática ao abrir
- FlatList renderizando cards
- Mensagem vazia quando não há tarefas
- ActivityIndicator durante carregamento

### ✅ Criar Tarefa
1. Clica botão azul "INCLUIR" no topo
2. Modal abre vazio
3. Preenche título e descrição
4. Clica "Salvar"
5. Nova tarefa aparece na lista

### ✅ Editar Tarefa
1. Clica botão amarelo "Editar" no card
2. Modal abre com dados preenchidos
3. Altera os campos
4. Clica "Salvar"
5. Tarefa é atualizada na lista

### ✅ Deletar Tarefa
1. Clica botão vermelho "Excluir"
2. Alert pede confirmação
3. Tarefa removida imediatamente da lista após sucesso

## 🎨 Design

- **Fundo:** Branco puro (#fff)
- **Botão Principal:** Azul iOS (#007AFF)
- **Botão Editar:** Ouro/Amarelo (#FFD700)
- **Botão Excluir:** Vermelho (#FF3B30)
- **Cards:** Sombra sutil com elevation/shadowColor
- **Tipografia:** Títulos negrito, descrições regulares

## 🔒 Segurança

- Validação de inputs obrigatórios
- Tratamento de erros com try/catch
- Estados de submissão para prevenir duplicação
- Headers Content-Type JSON explícitos
- SafeAreaView blindando notches

## 📍 API Conectada

**Base URL:** https://tarefa-backend.onrender.com/tasks

Todos os CRUD operations retornam dados sincronizados com o backend.

---

**Desenvolvido com Clean Architecture - Código pronto para produção! 🎉**
