//desafío clase 2 ECMAScript y ECMAScript avanzado

class ProductManager {
    constructor () {
        this.products = []
    }

    addProduct (title, description, price, thumbnail, code, stock) {
        const id =
          this.products.lenght === 0 ? 1
          : this.products[this.products.length - 1].id + 1

        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        
    

    }

    getProduct () {
        return this.products
    }

    getProductById (idProduct) {
        const product = this.products.find(p => p.id === idProduct)

        if (!product){
            console.log('Not found')
        } else {
            
        }
    }
}