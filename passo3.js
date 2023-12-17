//Criar projeto
db.Projects.insertOne({
  name: "Projeto Exemplo",
  start_date: new Date("2023-01-15"),
  end_date: new Date("2023-02-28"),
  tasks: [],
});

//Criar usuário
db.Users.insert({
  first_name: "Ryann",
  last_name: "Cláudio",
  email: "ryann@provedor.com",
  cell_phone: "90123-4567",
  tasks: [],
});

//Criar tarefa
db.Tasks.insert({
  title: "Tarefa Exemplo",
  description: "Exemplo: passear com o cachorro",
  start_date: new Date("2023-01-20"),
  deadline_date: new Date("2023-02-10"),
  priority: "média",
  status: "To-do",
  user_id: ObjectId("653d2b55bff6b435cf0e50f7"),
  project_id: ObjectId("653d2b4f0e8622d8fcbdd855"),
});

//Alterar tarefa
db.Tasks.update(
  { _id: ObjectId("653d2b95d721e5d34eb49d97") },
  { $set: { status: "In-Progress" } }
);

db.Tasks.update(
  { _id: ObjectId("653d2b95d721e5d34eb49d97") },
  { $set: { status: "To-do" } }
);

//Consultar todas as tarefas
db.Tasks.find({ project_id: ObjectId("653d2b4f0e8622d8fcbdd855") });

//Consultar tarefas com o status "To-do"
db.Tasks.find({
  user_id: ObjectId("653d2b55bff6b435cf0e50f7"),
  status: "To-do",
});
