const events = require("node:events");
class PizzaShop extends events {
    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(size, toppings) {
        this.orderNumber++;
        this.emit('order', size, toppings);
    }

    display_order(){
        console.log("Currently We are on", this.orderNumber);
    }
}

module.exports = PizzaShop