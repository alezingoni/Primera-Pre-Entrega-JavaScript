let usuario = prompt("Bienvenido a nuestra tienda! Por favor ingresa tu nombre: ");

let bienvenida = prompt("Bienvenido " + usuario + "!" +"\n" + "Por favor ingrese una de las siguientes opciones: " + "\n" + "Cargar una bebida al carrito: 'SI'" + "\n" + "No cargar ninguna bebida al carrito: 'NO'" );

bienvenida = bienvenida.toLowerCase();

function Product() {
this.name ="";
this.cantidad= 0;
this.costo= 0;
this.precioVenta= 0;
}

if (bienvenida == "si"){
    const producto1 = new Product();
    producto1.name = prompt("Selecciona el nombre del producto: ");
    producto1.cantidad = parseInt(prompt("Cantidad de unidades: "));
    producto1.costo = parseFloat(prompt("Costo: "));
    producto1.precioVenta = function(){
        return this.cantidad * this.costo;
    }
   

    console.log(producto1);

    console.log("Nombre: " + producto1.name);
    console.log("Cantidad: " + producto1.cantidad);
    console.log("Costo: " + producto1.costo);
    console.log("Total de la venta: " + producto1.precioVenta());
    
    alert("Felicitaciones, su producto ha sido cargado satisfactoriamente!") //se carga el producto en la consola
} else if (bienvenida =="no") {
    alert("Gracias por visitar nuestra tienda!")
} else{
    alert("Su opción no es valida, por favor intente nuevamente!")
}