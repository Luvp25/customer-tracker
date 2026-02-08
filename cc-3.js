// Three customers and their names, emails, and purchases
let customers = [
    {
        Name: "Luv Patel",
        Email: "luvp@usf.edu",
        Purchases: ["Soccer ball", "Cleats", "Jersey"]
    },

    {
        Name: "Mike Tyson",
        Email: "Mike02@gmail.com",
        Purchases: ["Water Bottle", "Boxing gloves"]
    },

    {
        Name: "Tom Brady",
        Email: "Tombrady@gmail.com",
        Purchases: ["Football", "Helmet"]
    }
];

//Adding new customer
customers.push(
    {
    Name: "Cristiano Ronaldo",
    Email: "Suiiiii7@gmail.com",
    Purchases: ["Cleats, Soccer Ball"]
    }
);

//remove first customer
customers.shift(0);

//Update customer info
customers[2].Email = "Suiii7@yahoo.com";

//add a new purchase to a customer's purchases
customers[1].Purchases.push("Shoulder pads");

//Display customer info
console.log(customers);