/**
 * Autor: Andres Felipe Blandón
 */

//Creo un arreglo de cursos con la información de los disponibles
let cursos=[{
    id:1,
    nombre:'Marketing Digital',
    duracion:6,
    valor:150000

},
{
    id:2,
    nombre:'Algoritmos',
    duracion:10,
    valor:250000
},
{
    id:3,
    nombre:'Formulación de proyectos',
    duracion:8,
    valor:120000
}];

//--------------------------------------------------------------------------------
//Cree 2 metodos para practicar y ver cúal es mejor
/*En está primer función pide en sus atributos que le entren cada uno de los datos,
  y adicionalmente pide un contador, el cual ira marcando cuanto se demora en 
  ejecutarce esa funcion, entenderas mejor cuando veas como se implementa en el main*/
let enlistar = (id,nombre,duracion,valor,contador)=>{
    setTimeout(function(){
        console.log('El id es '+id);
        console.log('El nombre es '+nombre);
        console.log('La duracion es '+duracion+' semanas');
        console.log('El valor es '+valor);
        console.log('El contador es '+ contador);
    },contador);
}

/*En la segunda funcíon es más facil en teoria, ya que utilizo el principio de 
  de recursividad. Simplemente entro por atributo el objeto cursos y un contador
  que sera la variable de desición para llegar al caso base.
  Utilizo el if para finalizae la recursividad (Me gusta más esta porque el tiempo siempre es 2) 
 */
let enlistarmejor=(cursos,cont)=>{
    console.log('El id es '+cursos[cont].id);
    console.log('El nombre es '+cursos[cont].nombre);
    console.log('La duracion es de '+cursos[cont].duracion+' semanas');
    console.log('El valor es '+cursos[cont].valor);
    console.log('');
    setTimeout(function(){  
        if (cont<2){
            enlistarmejor(cursos,cont+1);
        }
    },(2000)); 
}
//--------------------------------------------------------------------------------

//Exporto el arreglo cursos y los dos metodos 
module.exports ={
    cursos,
    enlistar,
    enlistarmejor
   
};

