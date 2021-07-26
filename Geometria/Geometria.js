/*

Para calcular la area perimetro e identificar la figura, se manejara:
    circulo, 
    cuadrado, 
    rectangulo,
    triangulo

De sus formulas extraemos lo siguiente:
    Base
    Altura
    N. Lados

    PI 


*/

const PI = 3.14159

function getFigureAreaPerimeter (Base, Height, Sides) {

    //si tiene 0 o 360 como lados, hablamos de un circulo
    if(Sides == 0 || Sides == 360){

        //manipulamos la base como el radio del circulo

        let CircleArea = PI * (Base ** 2)

        let CirclePerimeter = (2 * PI) * Base

        console.group("Circulo")

        console.log(`La figura es un circulo con un radio de:  ${Base} cm, tiene un area de ${CircleArea} cm2 y un perimetro de ${CirclePerimeter} cm.`)

        console.groupEnd()

    }

    //si tiene 3 lados, se entiende que es un triangulo
    if(Sides == 3){

        let TriangleArea = (Base * Height) / 2

        let TrianglePerimeter = Base * 3

        console.group("Triangulo")

        console.log(`La figura es un Triangulo con una base de:  ${Base} cm, tiene un area de ${TriangleArea} cm2 y un perimetro de ${TrianglePerimeter} cm.`)

        console.groupEnd()

    }
    
    //si tiene 4 entendemos que es un cuadrado o rectangulo, a posteriore evaluaremos cual es
    if(Sides == 4){

        //si base y altura son iguales se entiende que son cuadrados, si no, se considera un rectangulo
        if(Base == Height){

            let SquareArea = Base * Base

            let SquareArea = Base * 4

            console.group("Cuadrado")

            console.log(`La figura es un Cuadrado con una base de:  ${Base} cm, tiene un area de ${SquareArea} cm2 y un perimetro de ${SquareArea} cm.`)

            console.groupEnd()

        }

        else{

            let RectangleArea = Base * Height

            let RectanglePerimeter = (Base * 2) + (Height * 2)

            console.group("Rectangulo")

            console.log(`La figura es un Rectangulo con una base de:  ${Base} cm, tiene un area de ${RectangleArea} cm2 y un perimetro de ${RectanglePerimeter} cm.`)

            console.groupEnd()

        }
    }
}