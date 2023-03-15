function leerDatos()
{

    var nombre =document.getElementById("nom").value;
    var ap = document.getElementById("ap").value;
    var am = document.getElementById("am").value; 
    var fecha = document.getElementById("fecha").value; 

    suAp = ap.substr(0,2);
    suAm = am.substr(0,1);
    suNo = nombre.substr(0,1)

    anio = fecha.substr(2,2)
    mes = fecha.substr(4,4)
    dia = fecha.substr(8,8)

    //window.alert("Tu RFC es: " + suAp.toUpperCase() + suAm.toUpperCase() + suNo.toUpperCase() + anio + mes + dia);
    document.write("Tu RFC es: " + suAp.toUpperCase() + suAm.toUpperCase() + suNo.toUpperCase() + anio + mes + dia)
}
leerDatos()
