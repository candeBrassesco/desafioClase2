//desafío clase 2 ECMAScript y ECMAScript avanzado

class ProductManager {
    constructor () {
        this.products = []
    }

    addProduct (title, description, price, thumbnail, newCode, stock) {

        // ID autoincrementable.
        const id =
          this.products.lenght === 0 ? 1
          : this.products[this.products.length - 1].id + 1
        
        // cargo en la variable product el   
        const product = this.products.find(p => p.code === newCode)

        const newProduct = {
            id,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: newCode,
            stock: stock
        }

        // verificación del ingreso de todos los parámetros y unicidad del code establecido.

        if ((title || description || price || thumbnail || code || stock) === undefined ) {
            console.log('Please enter all the parameters to add a new product: title, description, price, thumbnail, code ande stock')
        } else if (product) {
            console.log(`The code: ${newCode} already exists. Please enter another one!`)
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
            console.log('Not found')
        } else {
            return product
        }
    }
}

