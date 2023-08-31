alert("usted no se ha registrado")

let nombre = prompt("Ingrese su nombre");
let password = prompt("Ingrese su contraseña");
let mail = prompt ("Ingresa tu direccion de correo electronico");
       
alert("Bienvenido " + nombre + "! Estamos muy felices de que estes aqui" + "\nTu correo es: " + mail + "\n Y tu contraseña es: " + password );
    console.log("ingreso de datos de usuario");



const nam = nombre;
const contra = password;

console.log(nam);
console.log(contra);

function validarDatos(){
    let user = prompt("Ingrese su nombre de usuario");
    let pass = prompt("Ingrese su contraseña");

    if (user != nam || pass != contra){
        alert("no es un usuario valido");
    }else {
        alert("Bienvenido " + nombre);
        
        interaccionDeCompra();
        console.log("La interaccion de compra se ejecuto correctamente")
    }
}

validarDatos();
console.log("se valido el dato");




function interaccionDeCompra(){
    let compra = confirm("Desea comprar alguna campera?");

    switch(compra){
        case true:
            iniciarCarrito();
            console.log("se inicia el carrito")
            break;
        case false:
            alert("Ahh listo, sos re pobre");
            console.log("no se inicia el carrito")
            break;    
    }
}


function aniadirAlCarrito(codigo){

    let producto ;

    switch(codigo){
        case "1" :
            producto = "Campera 1" + "$" + 10000;
            break;
        case "2" :
            producto = "Capmera 2" + "$" + 20000;
            break; 
        case "3" : 
            producto = "Campera 3" + "$" + 30000;
            break;
        case "4" : 
            producto = "Campera 4" + "$" + 40000;
            break;       
        default :        
            producto = false;
    }
    return producto ;
}



function iniciarCarrito(){

    let lista = "";
    let finalizar_carrito = false;
    
    while (!finalizar_carrito){

        let codigo = prompt("Ingrese codigo de producto");
        let producto = aniadirAlCarrito(codigo);

        if (producto){
            console.log("Se agrego : " + producto + " al carrito");
            lista += "\n" + producto;
        }else{
            if (codigo === null){
                finalizar_carrito = true;
            }else{
                alert("Ingrese un codigo de producto valido");
            }
        }
    }
    if (lista != ""){
        let resp = confirm ("Desea comprar las siguientes camperas? :"+lista);
        if (resp){
            alert("Gracias por su compra");
        }
    }
}