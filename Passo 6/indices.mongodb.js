// Criação de índices
db.Tasks.createIndex({ "start_date": 1 });
db.Tasks.createIndex({ "status": 1 });
db.Projects.createIndex({ "start_date": 1 });
db.Projects.createIndex({ "status": 1 });

// Consulta de desempenho antes da indexação
db.Tasks.find({ "start_date": { $gte: new Date("2023-01-01") } }).explain("executionStats");

// Consulta de desempenho após a indexação
db.Projects.find({ "status": { $gte: new Date("2023-01-01") } }).explain("executionStats")


