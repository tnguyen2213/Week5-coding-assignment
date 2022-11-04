//Menu App for a burger and hotdog place

class Food {
    constructor(name){
        this.name = name;
    }
}

class Order {
    constructor(name) {
        this.name = name;
        this.items = [];
    }
}

class Menu {
    constructor() {
        this.orders = [];
        this.selectedOrder = null;

    }

    start() {
        let selection = this.showMainMenuOptions();

        while(selection != 0) {
            switch(selection){
                case '1':
                    this.viewMenu();
                    break;
                case '2':
                    this.createOrder();
                    break;
                case '3':
                    this.viewOrder();
                    break;
                case '4':
                    this.deleteOrder();
                    break;
                case '5':
                    this.displayOrder();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Come again');
    }
    showMainMenuOptions() {
        return prompt(`
        Welcome, what would you like to order?
        -----------------------------------------
        0)Not hungry
        1)View Menu
        2)Create Order
        3)View Order
        4)Delete Order
        5)Display Order
        `)
    }
    showOrderMenuOptions(orderInfo) {
        return prompt(`
        0)Back
        1)Add To Order
        2)Delete Order
        ----------------
        ${orderInfo}
        `);
    }
    // Display all order that was made
    displayOrder() {
        let orderStr = '';
        for(let i = 0; i < this.orders.length; i++) {
            orderStr += i + ') ' + this.orders[i].name + '\n';
        }
        alert(orderStr);
    }
    // Create order and push the order to the menu array
    createOrder() {
        let name = prompt('Enter your order:');
        this.orders.push(new Order(name));
        alert('Thanks for ordering.');
    }
    // This just print out the menu 
    viewMenu() {
        alert(`
                 Burgers and Hotdogs Menu
        -------------------------------------------
            Burgers:                    Hotdogs:
        - CheeseBurger              - Classic Dog
        - Mushroom Burger           - Chili Dog
        - Bacon Burger              - Chili Cheese Dog

        `)
    }
    // Allow the user to view order
    viewOrder() {
        let index = prompt('What order would you like to view?');
        if(index > -1 && index < this.orders.length) {
            this.selectedOrder = this.orders[index];
            let description = 'Order: ' + this.selectedOrder.name + '\n';

            for(let i = 0; i < this.selectedOrder.items.length; i++) {
                description += i + ') ' + this.selectedOrder.items[i].name + '\n';
            }
            let selection = this.showOrderMenuOptions(description);
            switch(selection) {
                case '1':
                    this.addOn();
                    break;
                case '2':
                    this.deleteFromOrder();
             }
        }
    }
    // Add an item to existing order in the view order menu
    addOn() {
        let name = prompt('What would you like to add to your order:');
        this.selectedOrder.orders.push(new Order(name));
        alert('Thank you for your order.');
    }
    // Allow you to delete item from the order
    deleteFromOrder() {
        let index = prompt('What would you like to delete from your order:');
        if(index > -1 && index < this.selectedOrder.orders.length) {
            this.selectedOrder.orders.splice(index, 1);
            alert('Your order hasd been deleted.');
        }
    }
    // This allow you to delete an order
    deleteOrder() {
        let index = prompt('Enter the order you would like to delete:');
        if(index > -1 && index < this.orders.length) {
            this.orders.splice(index, 1);
        }
    }
}
//Create an instance in order to run the code
let menu = new Menu();
menu.start();