-- INSERIR
INSERT INTO tb_tarefa (ds_tarefa, nr_ordem, bt_finalizado, dt_cadastro)
		VALUES (?, ?, ?, ?);
        
-- FINALIZADO
SELECT id_tarefa       as Id,
       ds_tarefa       as Tarefa,
       nr_ordem        as Ordem,
       bt_finalizado   as Finalizado,
       dt_cadastro     as Cadastro
		FROM tb_tarefa 
			WHERE bt_finalizado = ?;
        
-- VER TODOS
SELECT id_tarefa       as Id,
       ds_tarefa       as Tarefa,
       nr_ordem        as Ordem,
       bt_finalizado   as Finalizado,
       dt_cadastro     as Cadastro
        	FROM tb_tarefa;

-- ALTERAR
UPDATE tb_tarefa
	SET  ds_tarefa = ?,
		 id_tarefa = ?
		WHERE id_tarefa = ?;
		 
-- DELETAR
DELETE FROM tb_tarefa
	WHERE id_tarefa = ?;