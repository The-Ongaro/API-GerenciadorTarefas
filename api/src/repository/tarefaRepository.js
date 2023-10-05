import { conexao } from './connection.js';

export async function inserirTarefa(tarefa) {
    const comando =
    `INSERT INTO tb_tarefa (ds_tarefa, nr_ordem, bt_finalizado, dt_cadastro)
         VALUES (?, ?, ?, ?)`

    const [resposta] = await conexao.query(comando, [tarefa.tarefa, tarefa.ordem, tarefa.finalizado, tarefa.cadastro]);
    tarefa.id = resposta.insertId;
    return tarefa;
}

export async function buscarTarefas() {
    const comando = 
    `SELECT id_tarefa       as Id,
            ds_tarefa       as Tarefa,
            nr_ordem        as Ordem,
            bt_finalizado   as Finalizado,
            dt_cadastro        as Cadastro
                FROM tb_tarefa`

    const [resposta] = await conexao.query(comando);
    return resposta;
}

export async function buscarFinalizadas(finalizadas) {
    const comando = 
    `SELECT ds_tarefa       as Tarefa,
            nr_ordem        as Ordem,
            bt_finalizado   as Finalizado,
            dt_cadastro     as Cadastro
                FROM tb_tarefa 
	                WHERE bt_finalizado = true`
    
    const [resposta] = await conexao.query(comando, [finalizadas]);
    return resposta;
}

export async function alterarTarefa(id, tarefa) {
    const comando = 
    `UPDATE tb_tarefa
	        SET  ds_tarefa      = ?,
                 nr_ordem       = ?,
                 bt_finalizado  = ?,
                 dt_cadastro    = ?
		   WHERE id_tarefa      = ?`

    const [resposta] = await conexao.query(comando, [tarefa.tarefa, tarefa.ordem, tarefa.finalizado, tarefa.cadastro, id]);
    return resposta.affectedRows;
}


export async function deletarTarefa(id) {
    const comando = 
    `DELETE FROM tb_tarefa
	        WHERE id_tarefa = ?`

    const [resposta] = await conexao.query(comando, [id]);
    return resposta.affectedRows;
}