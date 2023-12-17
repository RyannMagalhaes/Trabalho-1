use("taskManager");

// Criação do usuário
db.Users.insertOne({
  first_name: "Primeiro Nome",
  last_name: "Sobrenome",
  email: "joaoteste@exemplo.com",
  cell_phone: "90123-4567",
  tasks: [], // Um array para armazenar as tarefas
});

// Criação do projeto
db.Projects.insertOne({
  name: "Nome do Projeto",
  start_date: new Date("YYYY-MM-DD"),
  end_date: new Date("YYYY-MM-DD"),
  tasks: [],
});

// Criação da tarefa
db.Tasks.insert({
  title: "Título da Tarefa",
  description: "Descriçãoda tarefa",
  start_date: new Date("YYYY-MM-DD"),
  deadline_date: new Date("YYYY-MM-DD"),
  priority: "Alta/Média/Baixa",
  status: "To-do/In-Progress/Complete",
  user_id: ObjectId("ID do usuário associado"), // Referência ao usuário
  project_id: ObjectId("ID do projeto associado"), // Referência ao projeto
});
