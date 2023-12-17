//Projetos

// 1 - Buscar projetos concluídos (todas as tarefas com status "Complete")
db.Projects.find({
  "tasks.status": "Complete",
});

// 2 - Buscar projetos com tarefas atrasadas
db.Projects.find({
  "tasks.deadline_date": { $lt: new Date() },
});

// 3 - Buscar projetos pelo nome
db.Projects.find({
  name: "Projeto Exemplo",
});
// 4 - Buscar projetos não iniciados ou finalizados
db.Projects.find({
  "tasks.status": { $in: ["To-do", "Finished"] },
});

// 5 - Buscar projetos que começam em dezembro
db.Projects.find({
  start_date: { $gte: new Date("2023-11-01"), $lt: new Date("2023-12-01") },
});

//Tarefas

// 6 - Buscar tarefas concluídas
db.Tasks.find({
  status: "Complete",
});

// 7 - Buscar as tarefas em andamento
db.Tasks.find({
  status: { $in: ["In-Progress"] },
});
// 8 - Buscar tarefas com o prazo perto do fim
db.Tasks.find({
  deadline_date: {
    $gte: new Date(),
    $lte: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000),
  },
});

// 9 - Buscar tarefas de um usuário
db.Tasks.find({
  "user.email": "ryann@provedor.com",
});

// 10 - Buscar tarefas com prioridade alta
db.Tasks.find({
  priority: "Alta",
});
// Usuários:

// 11 - Buscar usuários que concluíram todas as suas tarefas
db.Users.find({
  "tasks.status": "Complete",
});

// 12 - Buscar usuários que possuem projetos em andamento
db.Users.find({
  "tasks.project.status": { $in: ["In-Progress"] },
});
// 13 - Buscar usuários por nome
db.Users.find({
  first_name: "Ryann",
});

// 14 - Buscar usuários com um número de telefone específico (por exemplo, "9876543210")
db.Users.find({
  cell_phone: "90123-4567",
});

// 15 - Buscar usuários com tarefas em atraso
db.Users.find({
  tasks: {
    $elemMatch: { deadline_date: { $lt: new Date() } },
  },
});
