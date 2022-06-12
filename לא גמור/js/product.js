console.log('My script');

class Product {
    static id = 1;

    constructor(name, category, price, countP) {
        this.id = Product.id;
        Product.id++;
        this.name = name;
        this.category = category;
        this.price = price;
        this.countP = countP;
    }

    toString() {
        return (` שם הבגד:  ${this.name}   קטגוריה:  ${this.category}  כמות במלאי:  ${this.countP}  מחיר:  ${this.price}`);
    }

    updatePrice=function(newPrice) {
        this.price = newPrice;
    }

    updateLessCount=function(num) {
        this.countP = this.countP - num;
    }
    updateMoreCount=function(num) {
        this.countP = this.countP + num;
    }
}


class Manager {
    constructor(idM, name) {
        this.idM = idM;
        this.name = name;
    }
}

class Shop {
    items = [];
    length = 0;
    constructor() {
        this.items = [];
    }

    searchNameProduct=function(nameProduct) {
        this.items.forEach(element => {
            if (element.name == nameProduct)
                showProducts(element)
        });
    }
}

document.addEventListener(`DOMContentLoaded`, start);

function start() {
    putProducts();
    shop.items.forEach(element => {
        showProducts(element)
    });
    shop.searchNameProduct("שמלה");

}

function putProducts() {
    window.shop = new Shop;
    shop.items[0] = new Product("שמלה", "נשים", 150, 9);
    shop.items[1] = new Product("חולצת צוארון", "גברים", 89, 20);
    shop.items[2] = new Product("חצאית", "נשים", 95, 15);
    shop.items[3] = new Product("חולצה", "ילדים", 60, 30);
    console.log('check')

}

function showProducts(product) {
    let insert = document.querySelector('#data');
    insert.insertAdjacentHTML("beforeend", `<div id=product-${product.id}>
         ${product.toString()}
    </div>`)

};
