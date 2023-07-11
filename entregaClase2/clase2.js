//desafío clase 2 ECMAScript y ECMAScript avanzado

class ProductManager {
    constructor () {
        this.products = []
    }

    addProduct (title, description, price, thumbnail, code, stock) {

        // ID autoincrementable.
        const id =
          this.products.length === 0 
          ? 1
          : this.products[this.products.length - 1].id + 1
        
        const codeExist = this.products.find(p => p.code === code)

        const newProduct = {
            id: id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        // verificación del ingreso de todos los parámetros y unicidad del code establecido.
        // para luego agilizar los ejemplos los errores serán mostrados en consola con un console.log y no con un throw new Error.

        if (title === undefined || description === undefined || price === undefined || thumbnail === undefined || code === undefined || stock === undefined) {
             console.log('ERROR! Please enter all the parameters to add a new product: title, description, price, thumbnail, code and stock')
        } else if (codeExist) {
             console.log(`ERROR! The code: ${code} already exists. Please enter another one!`)
        } else {
            // Si se pasan las dos verificaciones anteriores se suma al array product el nuevo producto.
            this.products.push(newProduct)
        }   
    }

    getProduct () {
        return this.products
    }

    getProductById (idProduct) {
        //se busca la existencia de un 
        const product = this.products.find(p => p.id === idProduct)

        if (!product){
            throw new Error('Not found')
        } else {
            return product
        }
    }
}


//ejemplos de prueba:


// 1RO: se carga todo correctamente

const productManager1 = new ProductManager ()

productManager1.addProduct('product1', 'this is the first product', 500, 'https://i.postimg.cc/NMMTyd7R/absextract.png', 'produ1', 50)

//console.log(productManager1.getProduct())

// 2DO: no se cargan todos los campos del producto.

productManager1.addProduct('product2', 'this is the second product', 300)

//console.log(productManager1.getProduct())

// 3RO: se carga un code repetido. 

productManager1.addProduct('product3', 'this is the third product', 700, 'https://i.postimg.cc/NMMTyd7R/absextract.png', 'produ1', 57)

//console.log(productManager1.getProduct())

// 4TO: se carga un producto correctamente para comprobar que el ID autoincrementable funciona.

productManager1.addProduct('product4', 'this is the fourth product', 670,'https://i.postimg.cc/NMMTyd7R/absextract.png', 'produ4', 90 )

console.log(productManager1.getProduct())

//5TO: Se buscan dos peoductos por ID.

console.log(productManager1.getProductById(1))

console.log(productManager1.getProductById(4))
