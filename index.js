const express = require('express')
const  TarefaController = require('./src/controllers/TarefaController')
const app = express();
const port = 3000;
app.set('view engine', 'ejs')
app.set('views','./src/view')

app.use(express.urlencoded({extended:true}))
app.get('/', (req,res) => res.send("<h1>MVC</h1>"))
app.get('/tarefas', TarefaController.getTarefas);
app.post('/tarefas',TarefaController.addTarefa)
app.listen(port, () =>{
    console.log(`Rodando em http://localhost:${port}`)
})