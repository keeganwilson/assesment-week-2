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
const summedPrice = cart.reduce((a, c) => a + c.price, 0)

//console.log(summedPrice)


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
calcFinalPrice = (cartTotal, couponValue, tax) => (cartTotal + (cartTotal * tax) - couponValue).toFixed(2); 

//console.log(calcFinalPrice(27.95, 5, 0.07));

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
    TEXT ANSWER HERE
I would want each customer to have the following properties: 
    name string (something to id them by)
    phone number string (a method of contact for when their order is ready)
    email string (someplace to send their receipt to)
    card on file array of nums (an array containing cc info so be saved for frequent use)
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer1 = {
    name: 'Keegan',
    phoneNumber: '(555) 555-5555',
    email: 'someguy@gmail.com',
    ccInfo: [256378456985, 0225, 895]
}