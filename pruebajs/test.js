/*
¿Qué es una variable y para qué sirve?
¿Cuál es la diferencia entre declarar e inicializar una variable?
¿Cuál es la diferencia entre sumar números y concatenar strings?
¿Cuál operador me permite sumar o concatenar?
*/

console.log("Una variable sirve para asignar un valor a un operador por medio de el operador de asignacion el cual asigna un espacio de memoria para almacenar la informacion")

console.log("una variable se declara para generar la asignacion del espacio en memoria, y cuando se inicializa se determina el tamaño de la signacion asi como su almacenamiento")

console.log("ambas operaciones usan el signo de +  pero el comoprtamiento depende en funciond del tipo de dato de los operandos, si son cadenas, concatena, de otro modo, suma")

console.log("El operador suma para ambas +");

/*
Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre
Apellido
Nombre de usuario en Platzi
Edad
Correo electrónico
Mayor de edad
Dinero ahorrado
Deudas
*/

var firstName  = ''
var lastName  = '';
var userName  = ''; 
var userAge  = 0; 
var underageUser  = false; 
var moneySaved  = 28.75; 
var debtAmount  = 0.00

/*
Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)
*/

console.log(firstName + '' +lastName);
console.log(moneySaved - debtAmount)

/*

Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?
¿Cuándo me sirve usar una función en mi código?
¿Cuál es la diferencia entre parámetros y argumentos de una función?

*/

console.log('una funcion es la generacion de un bloque de codigo que funciona solo cuando este es invocado')
console.log('para reducir el codigo redundante')
console.log('Parametro es una variable que está en la definición de una función, argumento son los datos que se le pasan a los parametros de una función')

/*

 Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

*/ 

function SayHello (name, lastName, userId) {

    let completeName = name + '' + lastName;

    console.log("mi nombre es " + completeName + " , pero prefiero que me digas " + userId + ".")
    
}

/* 

Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una condicional?
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
¿Puedo combinar funciones y condicionales?

*/

console.log("son instrucciones que permiten definir diferentes flujos al programa base, y permiten que su comportamiento cambie segun las condiciones de ciertos parametros")
console.log("if -> si la condicion es verdadera entra a subrutina. else -> si la condicion dada por If no aplica, entra a esta subrutina, else if -> si no aplica la condicion dada en el if, evaluara esta previo al else")
console.log("")

/*

Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

*/

function Validatemembership (MembershipType) {
    if (MembershipType == "free"){
        console.log("Solo puedes tomar los cursos gratis");
    }
    else if (MembershipType == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else if (MembershipType == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    else{
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}


/* 

Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?
¿Qué tipos de ciclos existen en JavaScript?
¿Qué es un ciclo infinito y por qué es un problema?
¿Puedo mezclar ciclos y condicionales?

*/


console.log("es la repeticion de una subrutina de codigo la cual esta limitada por un valor o condicion")
console.log("ciclos for y while")
console.log("es un ciclo que no cuenta con un limite de ejecucion o que su logica hace que no se termine, pudiendo afectar el rendimiento del programa o afectando el rendimiento del hardware")
console.log("si, se pueden generar combinaciones de ciclos y condicionales en funcion de las necesidades del programa")
