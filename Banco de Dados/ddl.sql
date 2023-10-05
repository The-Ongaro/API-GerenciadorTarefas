CREATE DATABASE tarefas;

USE tarefas;

CREATE TABLE tb_tarefa (
id_tarefa	INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
ds_tarefa	VARCHAR(400) NOT NULL,
nr_ordem	INT NOT NULL,
bt_finalizado	BOOLEAN NOT NULL,
dt_cadastro DATETIME
); 