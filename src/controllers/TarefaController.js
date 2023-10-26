const TarefaModel = require('../models/TarefaModel');

const tarefas= TarefaModel.listarTarefas();

async function  getTarefas (req,res){
    res.render('tarefas', {tarefas});
}

async function addTarefa(req,res){
    const title = req.body;
    const tarefa = new Tarefa(Date.now(), title, false)
    tarefas.push(tarefa)
    res.redirect('/tarefas')

}

module.exports={getTarefas, addTarefa}