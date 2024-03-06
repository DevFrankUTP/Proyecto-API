
let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database: "componentes",
    user: "root",
    password:""
});



conexion.connect(function(error){


    if(error){
        /*Si existe error */
        throw error;
    }else{
        /*Si no hay error */
        console.log("conexion exitosa");
    }
});








const productos="SELECT * FROM productos";

conexion.query(productos,function(error,lista){

    if(error){
        /*Si existe error */
        throw error;
    }else{
        /*Si no hay error imprimir datos de la BD */
        console.log(lista);
    }
});

conexion.end();