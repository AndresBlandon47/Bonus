//Variable candidato para capturar la información de consola con ayuda de yargs
const candidato = {
    id_curso:{
        demand:true,
        alias:'i'
    },
    nombre:{
        demand:true,
        alias:'n'
    },
    cedula:{
        demand:true,
        alias:'c'
    }
};
const express = require('express')
const app = express()
const argv = require('yargs')
             .command('inscribir','Inscribe el curso',candidato)
             .argv


//---------------------------------------------------------
//Aqui estan los require necesarios
const {cursos,enlistar,enlistarmejor} = require('./Datos');
const fs = require ('fs');
//----------------------------------------------------------

//--------------------------------------------
/*Aqui esta la función de busqueda, que es muy parecido a lo que recomendaron 
en el archivo, simplemente utilizo la variable argv para saber cual es el 
dato en especifico para buscar*/
let busqueda = cursos.find(function(c){
    return c.id === argv.id_curso;
}); 
//--------------------------------------------


//----------------------------------------------------------------------------------------------------------------------------------------------
//La siguiente función me permite crear el archivo con la información del interesado y del curso buscado
let creararchivo = (cursos) =>{
    bus = busqueda;//Se crea un objeto que guardara la el objeto encontrado
    if(bus){//Se verifica que el objeto exista

        texto = 'El nombre del aspirante es '+argv.nombre+
        ' identificado con cedula '+argv.cedula+'\n'+'\n'+
        '<p>Pretende cursar el curso de '+bus.nombre+
        ' el cual se identica con el ID: '+ bus.id+' y tiene un costo de '+bus.valor+
        ' y que tiene una duracion de '+bus.duracion+ ' semanas.';
        
        fs.writeFile('reporte.txt',texto,(err) => {
            if (err) throw ("error");
            else console.log('Se creo el archivo')
        });
    }else{//En caso de no existir el objeto, se manda error y se listara los cursos exitentes
        console.log('Lo siento compañero pero no existe algun curso con ese id \n'+
        'Se tienen los siguientes cursos disponibles \n');
        enlistarmejor(cursos,0);
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------


//Con está condición crea como el menuu
if(argv._ == 'inscribir'){//Si por consola decidio insbrir, hara la siguientes instrucciones
    creararchivo(cursos);
    app.get('/', function (req, res) {
        res.send(texto)
      })
}else{//Si no inscribio la palabra "Inscribir, entonces solo enlistara los cursos exitentes"
    
    //-----------------------------------------------------------------//
    //Aqui podemos notar la función que me va a llamar para enlistar los cursos
    enlistarmejor(cursos,0);

    /*Aqui podemos ver otra función que sirve para enlistar, y funciona con un for, donde el 
    llenar los atributos, utilizo la posicion del arreglo con el for, el problema es que se llama 
    3 veces la función y lo hacen al mismo tiempo, ṕor lo tanto para hacer que tengan 2 segundos
    entre cada impresión de pantalla, se requiere aumentar el tiempo de del atributo timeOut, arranca
    2 seg, 4 seg y 6 seg por lo tanto no es recomendable
    */ 
    /*contador=0;
    for (var i = 0;i<3;i++){
        enlistar(cursos[i].id,cursos[i].nombre,cursos[i].duracion,cursos[i].valor,contador);
        contador = contador +2000;
    } */
    //-------------------------------------------------------------------//
}

app.listen(3000)

