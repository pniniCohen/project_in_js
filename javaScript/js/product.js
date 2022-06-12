console.log('My script');
//מחלקת מוצר
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
        return (` שם הבגד!:  ${this.name} קטגוריה:  ${this.category}  כמות במלאי:  ${this.countP}  מחיר:  ${this.price}`);
    }

    //עדכון מחיר
    updatePrice = function () {
        const valName = document.querySelector('input[name="inputNameEdit"]').value;
        const val = document.querySelector('input[name="inputPriceEdit"]').value;
        console.log("checking!!!!");
        shop.items.forEach(element => {
            if (element.name == valName) {
                element.price = val;
            }
        });
    }

    //עדכון כמות
    updateCount = function (num) {
        const valName = document.querySelector('input[name="inputNameEdit"]').value;
        const val = document.querySelector('input[name="inputCountEdit"]').value;
        console.log("checking!!!!");
        shop.items.forEach(element => {
            if (element.name == valName) {
                element.countP = val;
            }
        });
    }

    showProduct = function () {
        let section = document.querySelector('#data');
        section.insertAdjacentHTML("beforeend", `<div id=product-${this.id}>
        ${this.toString()}
      <br>
       </div>`)
    };
    // <div class="buttons">
    // <button onclick="this.etidProduct">עריכה</button>
    // </div> 
}

//מחלקת מנהל
class Manager {
    constructor(idM, name) {
        this.idM = idM;
        this.name = name;
    }
}
//מחלקת חנות
class Shop {
    items = [];
    length = 6;
    constructor() {
        this.items = [];
    }

    //חיפוש לפי שם!
    FindByNameProduct = function () {
        document.getElementById('data').innerHTML = "";
        console.log("check");
        const val = document.querySelector('input[name="inputName"]').value;
        this.items.forEach(element => {
            if (element.name == val) {
                console.log(element);
                element.showProduct();
            }
        });
    }

    //חיפוש לפי מחיר!
    FindByPriceProduct = function () {
        document.getElementById('data').innerHTML = "";
        console.log("check");
        const val = document.querySelector('input[name="inputPrice"]').value;
        console.log(this.items);

        this.items.forEach(element => {
            if (element.price == val) {
                console.log(element);
                element.showProduct();
            }
        });
    }

    //חיפוש לפי טווח מחיר
    FindBetweenPriceProduct = function () {
        document.getElementById('data').innerHTML = "";
        const val1 = document.querySelector('input[name="inputPrice1"]').value;
        const val2 = document.querySelector('input[name="inputPrice2"]').value;

        this.items.forEach(element => {
            if (element.price >= val1 && element.price <= val2) {
                console.log(element);
                element.showProduct();
            }
        });
        console.log("check");

    }

    //מציאת פריט שאזל מהמלאי!
    FindProductOutof = function () {
        document.getElementById('data').innerHTML = "";
        this.items.forEach(element => {
            if (element.countP == 0)
                element.showProduct();
        });
    }

    // מציאת פריט שכמעט אזל מהמלאי!
    FindProductRealyOutof = function () {
        document.getElementById('data').innerHTML = "";
        this.items.forEach(element => {
            if (element.countP < 4 && element.countP != 0)
                element.showProduct();
        });
    }

    // חיפש לפי קטגוריה!
    FindByCategory = function () {
        document.getElementById('data').innerHTML = "";
        var select = document.getElementById('selectOp');
        var value = select.options[select.selectedIndex].text;
        this.items.forEach(element => {
            if (element.category == value)
                element.showProduct();
        });
    }

    // הוספת מוצר חדש!
    addProduct = function () {
        //קטגוריה
        var select = document.getElementById('selectOp_');
        var valueCategory = select.options[select.selectedIndex].text;
        //מחיר
        const valPrice = document.querySelector('input[name="inputNewPrice"]').value;
        //שם
        const valName = document.querySelector('input[name="inputNewName"]').value;
        //כמות
        const valCount = document.querySelector('input[name="inputNewCountP"]').value;
        console.log("check_1")
        let newProduct = new Product(valName, valueCategory, valPrice, valCount);
        this.items.push(newProduct);
        console.log("check_2")
        clear();
    }
}
window.shop = new Shop();
window.product = new Product();

//העליה של הדום
document.addEventListener(`DOMContentLoaded`, start);
//הפונקציה שעולה עם הדום
function start() {
    putProducts();
}

// הכנסת המוצרים!
function putProducts() {
    shop.items[0] = new Product("שמלת ערב", "נשים", 270, 9);
    shop.items[1] = new Product("חולצת טומי הילפיגר", "גברים", 89, 20);
    shop.items[2] = new Product("חצאית פלסה", "נשים", 95, 15);
    shop.items[3] = new Product("חולצה מקושקשת", "ילדים", 60, 30);
    shop.items[4] = new Product("חצאית קומות", "ילדות", 70, 1);
    shop.items[5] = new Product("מכנס קורדרוי", "ילדים", 60, 0);
    shop.items[6] = new Product("כוכע", "תינוקות", 22, 13);
}

//הדפסת המוצר!
// function showProducts(product) {
//     let insert = document.querySelector('#data');
//     insert.insertAdjacentHTML("beforeend", `<div id=product-${product.id}>
//          ${product.toString()}
//     </div>`)
// };

//הדפסת המוצר!
function showProducts() {
    document.getElementById('data').innerHTML = "";

    // document.getElementById('#data').innerHTML=' ';
    console.log("inerhtml");
    shop.items.forEach(element => {
        element.showProduct()
    });

};

//לנקות את ההוספת מוצרים החדשים!
function clear() {
    document.querySelector('input[name="inputNewPrice"]').value = "";
    document.querySelector('input[name="inputNewName"]').value = "";
    document.querySelector('input[name="inputNewCountP"]').value = "";
}
