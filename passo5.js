//1- Alterar o usuário responsável por uma tarefa
db.Tasks.updateOne(
  { title: "Tarefa 2" },
  { $set: { user_id: ObjectId("653d2f9e1e4dde0b04c9dc34") } }
);

//2- Aumentar o prazo de entrega de uma tarefa
db.Tasks.updateOne(
  { title: "Tarefa 11" },
  { $set: { deadline_date: new Date("2023-10-20") } }
);

//3- Mudar o status de "In Progress" para "Complete" em uma tarefa
db.Tasks.updateOne({ title: "Tarefa 2" }, { $set: { status: "Complete" } });

//4- Atualizar o nome de um projeto
db.Projects.updateOne(
  { name: "Projeto 00" },
  { $set: { name: "Projeto 00 - Alterado" } }
);

//5- Atualizar o número de telefone de um usuário
db.Users.updateOne(
  { first_name: "Ryann" },
  { $set: { cell_phone: "94567-0213" } }
);
