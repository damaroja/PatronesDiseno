






//Creamos una clase para elaborar un ejemplo de patron de diseño llamado singleton

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.assert(instance1 !== instance2, 'Son objetos diferentes'); // true

//El patron de diseño singleton es un patrón de diseño creacional que garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.

//En este caso, se crea una instancia de la clase Singleton y se asigna a la variable instance1. Luego, se crea otra instancia de la clase Singleton y se asigna a la variable instance2. Al verificar si instance1 y instance2 son iguales, se obtiene false, lo que significa que son objetos diferentes. Esto demuestra que el patrón de diseño singleton garantiza que solo haya una instancia de la clase Singleton en todo el programa.

// Para ejecutar este código, simplemente copie y pegue el código en un archivo llamado app.js y ejecútelo con Node.js. Debería ver la salida "Son objetos diferentes" en la consola.






function SingletonFoo() {

    let fooInstance = null;
 
    // For our reference, let's create a counter that will track the number of active instances
    let count = 0;
 
    function printCount() {
        console.log("Number of instances: " + count);
    }
 
    function init() {
        // For our reference, we'll increase the count by one whenever init() is called
        count++;
 
        // Do the initialization of the resource-intensive object here and return it
        return {}
    }
 
    function createInstance() {
        if (fooInstance == null) {
            fooInstance = init();
        }
        return fooInstance;
    }
 
    function closeInstance() {
        count--;
        fooInstance = null;
    }
 
    return {
        initialize: createInstance,
        close: closeInstance,
        printCount: printCount
    }
 }
 
 let foo = SingletonFoo();
 
 foo.printCount() // Prints 0
 foo.initialize()
 foo.printCount() // Prints 1
 foo.initialize()
 foo.printCount() // Still prints 1
 foo.initialize()
 foo.printCount() // Still 1
 foo.close()
 foo.printCount() // Prints 0

