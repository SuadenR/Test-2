///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const totalPrice = cart.reduce((acc, food) => {
    return acc + food.price;
}, 0);

//const summedPrice = cart.reduce(sum)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cart, couponValue, tax) {
    cartTotal = (cart + tax) - couponValue
    return cartTotal
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
I created an object with the name seatingChart in the perspective of a restaurant seating customers on a waiting list. I chose name (string), party size (number), kids (number) (for booster seats), and an inside boolean (incase there are outside seating options). This will ensure we seperate parties respectively while creating enough seats and booster seats needed. We will know who to call next and their expected party size in order to create a table for them.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let seatingChart = {
    name: "Wilson",
    partysize: 5,
    kids: 0,
    inside: true
}