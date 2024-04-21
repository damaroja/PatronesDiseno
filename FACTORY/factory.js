




//Vamos a crear un ejemplo de patron de diseño llamado Factory en js

//Factory es un patron de diseño que se encarga de crear objetos, pero no sabemos que tipo de objeto va a crear, es decir, no sabemos que tipo de objeto va a crear hasta que se ejecute el codigo

//Vamos a crear un ejemplo de una fabrica de autos, donde se crearan autos de diferentes marcas

//Primero vamos a crear una clase llamada Auto

class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInfo() {
        console.log(`Auto: ${this.marca} ${this.modelo}`);
    }
}


//Ahora vamos a crear la fabrica de autos

class FabricaDeAutos {
    crearAuto(marca, modelo) {
        return new Auto(marca, modelo);
    }
}

//Ahora vamos a crear un objeto de la clase FabricaDeAutos

const fabrica = new FabricaDeAutos();

//Ahora vamos a crear autos de diferentes marcas

const auto1 = fabrica.crearAuto('Toyota', 'Corolla');

const auto2 = fabrica.crearAuto('Ford', 'Fiesta');

const auto3 = fabrica.crearAuto('Chevrolet', 'Onix');

auto1.mostrarInfo();
auto2.mostrarInfo();
auto3.mostrarInfo();

//Con esto hemos creado una fabrica de autos que crea autos de diferentes marcas
//Este es un ejemplo de como se puede utilizar el patron de diseño Factory en js
//Este patron de diseño es muy util cuando no sabemos que tipo de objeto vamos a crear hasta que se ejecute el codigo
//Este patron de diseño nos permite crear objetos de diferentes tipos sin tener que modificar el codigo


//Este es el ejemplo de Factory en js
