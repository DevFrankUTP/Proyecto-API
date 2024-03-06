
const mysql = require("mysql");

const conexion = mysql.createConnection({
    host: "localhost",
    database: "componentes",
    user: "root",
    password:""
});

/* conexion.connect(function(error){

    if(error){
        throw error;
    }else{
        console.log("conexion exitosa");
    }
})*/

conexion.connect( (error) => {
    if(error) throw error
    console.log("conexion exitosa");
}) 








const productos="SELECT * FROM productos";

conexion.query(productos,function(error,datos){

    if(error){
        /*Si existe error */
        throw error;
    }else{
        /*Si no hay error imprimir datos de la BD */
        console.log("Estos son los datos de la tabla: ");
        console.log(datos);

        console.log("La cantidad de datos es: ");
        console.log(datos.length);

    }
});

conexion.end();