"use strict";
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];
const addNewPizza = (pizzaObj) => {
    return menu.push(pizzaObj);
};
const placeOrder = (pizzaName) => {
    const selectedPizza = menu.find((item) => item.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "order"
    };
    orderQueue.push(newOrder);
    return newOrder;
};
const completeOrder = (orderId) => {
    const order = orderQueue.find(item => item.id === orderId);
    order.status = 'completed';
    return order;
};
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
