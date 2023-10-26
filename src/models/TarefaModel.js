const db = require('./Database.js')

class Tarefa{
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }
}

async function listarTarefas(){
    
    let resp = await db.query('SELECT * FROM tarefa');
    console.log(resp);
    return resp;
}

module.exports = {listarTarefas};