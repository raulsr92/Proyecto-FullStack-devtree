import server from "./server"

//Inicializar

server.listen("4000", ()=>{
    console.log("Servidor Funcionando")
    console.log(`Servidor: http://localhost:4000`)
}
)