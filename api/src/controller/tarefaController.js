import { alterarTarefa, buscarFinalizadas, buscarTarefas, deletarTarefa, inserirTarefa } from '../repository/tarefaRepository.js';

import { Router } from 'express';
const server = Router();

server.post('/tarefa', async (req, resp) => {
    try {
        const inserir = req.body;

        if(!inserir.tarefa)
            throw new Error('Tarefa inválida.');

        if(inserir.ordem == undefined || isNaN(inserir.ordem))
            throw new Error('Ordem inválida.');

        if(inserir.finalizado == undefined)
            throw new Error('Finalização inválida.');

        if(!inserir.cadastro)
            throw new Error('Data inválida.');

        const tarefaInserida = await inserirTarefa(inserir);
        resp.send(tarefaInserida);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })        
    }
})

server.get('/tarefa', async (req, resp) => {
    try {
        const dados = await buscarTarefas();
        resp.send(dados);
        
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.get('/tarefas/finalizadas', async (req, resp) => {
    try {
        const finalizadas = req.query;
        const tarefaFinalizada = await buscarFinalizadas(finalizadas);

        if(tarefaFinalizada.length == 0)
            throw new Error('Não há nenhuma tarefa finalizada.');

        resp.send(tarefaFinalizada);
        
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })        
    }
})


server.put('/tarefa/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const alteracao = req.body;

        if(!alteracao.tarefa)
            throw new Error('Tarefa inválida.');

        if(alteracao.ordem == undefined || isNaN(alteracao.ordem))
            throw new Error('Ordem inválida.');

        if(alteracao.finalizado == undefined)
            throw new Error('Finalização inválida.');

        if(!alteracao.cadastro)
            throw new Error('Data inválida.');

        const resposta = await alterarTarefa(id, alteracao);

        if(resposta != 1)
            throw new Error('A tarefa não pode ser alterada.');
        else
        resp.status(200).send();

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.delete('/tarefa/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const resposta = await deletarTarefa(id);

        if(resposta != 1)
            throw new Error('A tarefa não pode ser deletada.');

        resp.status(204).send();
        
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
        
    }
})

export default server;