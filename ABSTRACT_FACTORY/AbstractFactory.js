




//Vamos a crear un ejemplo den js para explicar como funciona el patron de diseño abstract factory

//Primero vamos a crear una clase que se va a llamar Factory que va a ser la clase abstracta que va a tener un metodo que se va a llamar createProduct que va a ser el metodo que se va a implementar en las clases concretas que hereden de esta clase abstracta

class Factory {
    createProduct() {
        throw new Error("This method must be overwritten!");
    }
}

//Ahora vamos a crear una clase que se va a llamar ConcreteFactory1 que va a heredar de la clase Factory y va a implementar el metodo createProduct que va a devolver un objeto de la clase ConcreteProduct1

class ConcreteFactory1 extends Factory {
    createProduct() {
        return new ConcreteProduct1();
    }
}

//Ahora vamos a crear una clase que se va a llamar ConcreteFactory2 que va a heredar de la clase Factory y va a implementar el metodo createProduct que va a devolver un objeto de la clase ConcreteProduct2

class ConcreteFactory2 extends Factory {
    createProduct() {
        return new ConcreteProduct2();
    }
}

//Ahora vamos a crear una clase que se va a llamar Product que va a ser la clase abstracta que va a tener un metodo que se va a llamar operation que va a ser el metodo que se va a implementar en las clases concretas que hereden de esta clase abstracta

class Product {
    operation() {
        throw new Error("This method must be overwritten!");
    }
}

//Ahora vamos a crear una clase que se va a llamar ConcreteProduct1 que va a heredar de la clase Product y va a implementar el metodo operation que va a devolver un string

class ConcreteProduct1 extends Product {
    operation() {
        return "ConcreteProduct1";
    }
}

//Ahora vamos a crear una clase que se va a llamar ConcreteProduct2 que va a heredar de la clase Product y va a implementar el metodo operation que va a devolver un string

class ConcreteProduct2 extends Product {
    operation() {
        return "ConcreteProduct2";
    }
}

//Ahora vamos a crear una clase que se va a llamar Client que va a tener un metodo que se va a llamar main que va a recibir un objeto de la clase Factory y va a devolver un string

class Client {
    main(factory) {
        return factory.createProduct().operation();
    }
}

//Ahora vamos a crear un objeto de la clase Client

const client = new Client();

//Ahora vamos a crear un objeto de la clase ConcreteFactory1

const concreteFactory1 = new ConcreteFactory1();


//Ahora vamos a llamar al metodo main del objeto client y le vamos a pasar el objeto concreteFactory1

console.log(client.main(concreteFactory1)); //Output: ConcreteProduct1

//Ahora vamos a crear un objeto de la clase ConcreteFactory2

const concreteFactory2 = new ConcreteFactory2();

//Ahora vamos a llamar al metodo main del objeto client y le vamos a pasar el objeto concreteFactory2

console.log(client.main(concreteFactory2)); //Output: ConcreteProduct2

//Este patron de diseño se utiliza cuando se quiere crear una familia de objetos que estan relacionados entre si y que tienen una jerarquia de clases

