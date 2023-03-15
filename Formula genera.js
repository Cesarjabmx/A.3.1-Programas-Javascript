//Calcular formula general
function calcularF()
{
    let a=parseInt(prompt("Ingrese el valor de a"))
    let b=parseInt(prompt("Ingrese el valor de  b"))
    let c=parseInt(prompt("Ingrse el valor de c"))

    dis=(Math.pow(b,2))-4*a*c

    if (dis >=0 && a!=0)
    {
        x1= (-b + (Math.sqrt(dis)))/(2*a)
        x2= (-b - (Math.sqrt(dis)))/(2*a)
        console.log("Valor de x1",x1 ,"    ","Valor de x2",x2)
        document.write("Valor de x1",x1 ,"","Valor de x2",x2)
        //window.alert("Valor de x1",x1 ,"","Valor de x2",x2)
    }
    else
    {
        console.log("No pude papito")
    }

}
calcularF()