//--Usuários--//

//Usuário 1
db.Users.insertOne({
  first_name: "Ryann",
  last_name: "Cláudio",
  email: "ryann@provedor.com",
  cell_phone: "9876543210",
  tasks: [],
});

//Usuário 2
db.Users.insertOne({
  first_name: "Rosy",
  last_name: "Pereira",
  email: "pedro@provedor.com",
  cell_phone: "9553612983",
  tasks: [],
});

//Usuário 3
db.Users.insertOne({
  first_name: "Mariana",
  last_name: "Rodrigues",
  email: "ana@provedor.com",
  cell_phone: "9998887776",
  tasks: [],
});

//Usuário 4
db.Users.insertOne({
  first_name: "Marcio",
  last_name: "Dos Santos",
  email: "lucas@provedor.com",
  cell_phone: "9288231200",
  tasks: [],
});

//Usuário 5
db.Users.insertOne({
  first_name: "Isabelly",
  last_name: "Moura",
  email: "isabel@provedor.com",
  cell_phone: "9876543210",
  tasks: [],
});

//Usuário 6
db.Users.insertOne({
  first_name: "Lucas",
  last_name: "Rodrigues",
  email: "rafael@provedor.com",
  cell_phone: "9551902229",
  tasks: [],
});

//Usuário 7
db.Users.insertOne({
  first_name: "Joana",
  last_name: "Campos",
  email: "larissa@provedor.com",
  cell_phone: "9890297755",
  tasks: [],
});

//Usuário 8
db.Users.insertOne({
  first_name: "Bernardo",
  last_name: "Antunes",
  email: "diego@provedor.com",
  cell_phone: "933123280",
  tasks: [],
});

//Usuário 9
db.Users.insertOne({
  first_name: "Rosangela",
  last_name: "Magalhães",
  email: "clara@provedor.com",
  cell_phone: "9270543210",
  tasks: [],
});

//Usuário 10
db.Users.insertOne({
  first_name: "Fernando",
  last_name: "Ferreira",
  email: "fernando@provedor.com",
  cell_phone: "9451291233",
  tasks: [],
});

//--Projetos--//

//Projeto 1
db.Projects.insertOne({
  name: "Projeto Exemplo",
  start_date: new Date("2023-02-01"),
  end_date: new Date("2023-03-15"),
  tasks: [],
});

//Projeto 2
db.Projects.insertOne({
  name: "Projeto 00",
  start_date: new Date("2023-03-15"),
  end_date: new Date("2023-04-30"),
  tasks: [],
});

//Projeto 3
db.Projects.insertOne({
  name: "Projeto 01",
  start_date: new Date("2023-04-01"),
  end_date: new Date("2023-05-15"),
  tasks: [],
});

//Projeto 4
db.Projects.insertOne({
  name: "Projeto 02",
  start_date: new Date("2023-05-15"),
  end_date: new Date("2023-06-30"),
  tasks: [],
});

//Projeto 5
db.Projects.insertOne({
  name: "Projeto 03",
  start_date: new Date("2023-06-01"),
  end_date: new Date("2023-07-15"),
  tasks: [],
});

//Projeto 6
db.Projects.insertOne({
  name: "Projeto 04",
  start_date: new Date("2023-07-15"),
  end_date: new Date("2023-08-31"),
  tasks: [],
});

//Projeto 7
db.Projects.insertOne({
  name: "Projeto 05",
  start_date: new Date("2023-08-01"),
  end_date: new Date("2023-09-15"),
  tasks: [],
});

//Projeto 8
db.Projects.insertOne({
  name: "Projeto 06",
  start_date: new Date("2023-09-15"),
  end_date: new Date("2023-10-31"),
  tasks: [],
});

//Projeto 9
db.Projects.insertOne({
  name: "Projeto 07",
  start_date: new Date("2023-10-01"),
  end_date: new Date("2023-11-15"),
  tasks: [],
});

//Projeto 10
db.Projects.insertOne({
  name: "Projeto 08",
  start_date: new Date("2023-11-15"),
  end_date: new Date("2023-12-31"),
  tasks: [],
});

//--Tarefas--//

//Tarefa 1
db.Tasks.insertOne({
  title: "Tarefa 2",
  description: "Passear com cachorro",
  start_date: new Date("2023-01-25"),
  deadline_date: new Date("2023-02-15"),
  priority: "Média",
  status: "In-Progress",
  user_id: ObjectId("653d2f8d382d6da3e4473136"),
  project_id: ObjectId("653d303c34216495d7661617"),
});

//Tarefa 2
db.Tasks.insertOne({
  title: "Tarefa 3",
  description: "Lavar Louça",
  start_date: new Date("2023-02-10"),
  deadline_date: new Date("2023-03-01"),
  priority: "Baixa",
  status: "To-do",
  user_id: ObjectId("653d2f9e1e4dde0b04c9dc34"),
  project_id: ObjectId("653d304b505bc754001ff32b"),
});

//Tarefa 3
db.Tasks.insertOne({
  title: "Tarefa 4",
  description: "Preencher planilhas",
  start_date: new Date("2023-03-01"),
  deadline_date: new Date("2023-03-15"),
  priority: "Alta",
  status: "Complete",
  user_id: ObjectId("653d2fb5dec533acfde4b1ed"),
  project_id: ObjectId("653d305e19fe091950514835"),
});

//Tarefa 4
db.Tasks.insertOne({
  title: "Tarefa 5",
  description: "Trabalho de banco de dados",
  start_date: new Date("2023-04-01"),
  deadline_date: new Date("2023-04-15"),
  priority: "Alta",
  status: "In-Progress",
  user_id: ObjectId("653d2fc3a9cdbb5f37efeaed"),
  project_id: ObjectId("653d3070f17f65cfa124029f"),
});

//Tarefa 5
db.Tasks.insertOne({
  title: "Tarefa 6",
  description: "Correr",
  start_date: new Date("2023-05-01"),
  deadline_date: new Date("2023-05-15"),
  priority: "Baixa",
  status: "To-do",
  user_id: ObjectId("653d2fd541692d505ff06977"),
  project_id: ObjectId("653d3080f153a881a7626d62"),
});

//Tarefa 6
db.Tasks.insertOne({
  title: "Tarefa 7",
  description: "Fazer jantar",
  start_date: new Date("2023-06-01"),
  deadline_date: new Date("2023-06-15"),
  priority: "Alta",
  status: "Complete",
  user_id: ObjectId("653d2fe6147ffba9f020e537"),
  project_id: ObjectId("653d3094eb4641c4d583051a"),
});

//Tarefa 7
db.Tasks.insertOne({
  title: "Tarefa 8",
  description: "Ligar para parentes",
  start_date: new Date("2023-07-01"),
  deadline_date: new Date("2023-07-15"),
  priority: "Média",
  status: "In-Progress",
  user_id: ObjectId("653d2ff78b9deafa90bd156a"),
  project_id: ObjectId("653d30a1acfc25671c6ef287"),
});

//Tarefa 8
db.Tasks.insertOne({
  title: "Tarefa 9",
  description: "Estudar javascript",
  start_date: new Date("2023-08-01"),
  deadline_date: new Date("2023-08-15"),
  priority: "Baixa",
  status: "To-do",
  user_id: ObjectId("653d300f59eb897d9a62f49a"),
  project_id: ObjectId("653d30afd86745fec4b286b9"),
});

//Tarefa 9
db.Tasks.insertOne({
  title: "Tarefa 10",
  description: "Cinema com os amigos",
  start_date: new Date("2023-09-01"),
  deadline_date: new Date("2023-09-15"),
  priority: "Alta",
  status: "Complete",
  user_id: ObjectId("653d301e781f91958fa07715"),
  project_id: ObjectId("653d30bce8b189a4ee0647aa"),
});

//Tarefa 10
db.Tasks.insertOne({
  title: "Tarefa 11",
  description: "Trabalho de microsserviços",
  start_date: new Date("2023-10-01"),
  deadline_date: new Date("2023-10-15"),
  priority: "Média",
  status: "In-Progress",
  user_id: ObjectId("653d302fb022f6bd314a1f8f"),
  project_id: ObjectId("653d30c8724077d4feccb31f"),
});
