// Validação das collections

db.createCollection("Users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["first_name", "last_name", "email", "cell_phone"],
      properties: {
        first_name: {
          bsonType: "string",
          description: "Preencha o primeiro nome",
        },
        last_name: {
          bsonType: "string",
          description: "Preencha o sobrenome.",
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          description:
            "O email é obrigatório e deve seguir o formato exemplo@provedor.com",
        },
        cell_phone: {
          bsonType: "string",
          pattern: "^[0-9]{10}$",
          description: "O número de deve seguir o padrão",
        },
        tasks: {
          bsonType: "array",
          description: "Um array para armazenar as tarefas",
        },
      },
    },
  },
});

db.createCollection("Projects", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "start_date", "end_date", "tasks"],
      properties: {
        name: {
          bsonType: "string",
          description: "Preencha o nome do projeto",
        },
        start_date: {
          bsonType: "date",
          description: "A data de início é obrigatória.",
        },
        end_date: {
          bsonType: "date",
          description: "A data de término é obrigatória.",
        },
        tasks: {
          bsonType: "array",
          description: "Um array para armazenar as tarefas",
        },
      },
    },
  },
});

db.createCollection("Tasks", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "title",
        "description",
        "start_date",
        "deadline_date",
        "priority",
        "status",
        "user_id",
        "project_id",
      ],
      properties: {
        title: {
          bsonType: "string",
          description: "Preencha o título da tarefa",
        },
        description: {
          bsonType: "string",
          description: "Preencha a descrição da tarefa.",
        },
        start_date: {
          bsonType: "date",
          description: "A data de início é obrigatória.",
        },
        deadline_date: {
          bsonType: "date",
          description: "A data de vencimento é obrigatória.",
        },
        priority: {
          enum: ["Alta", "Média", "Baixa"],
          description: "A prioridade deve ser 'Alta', 'Média' ou 'Baixa'.",
        },
        status: {
          enum: ["To-do", "In-Progress", "Finished"],
          description:
            "O status deve ser 'To-do', 'In-Progress' ou 'Finished'.",
        },
        user_id: {
          bsonType: "objectId",
          description: "Referência a um usuário.",
        },
        project_id: {
          bsonType: "objectId",
          description: "Referência a um projeto.",
        },
      },
    },
  },
});
