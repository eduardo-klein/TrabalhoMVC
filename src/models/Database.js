require("dotenv").config();

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return

}