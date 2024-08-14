/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    //Regular entities: employees, products, orders, locations, customers
    //Join table entities: employees_locations, products_locations, customerRating_products
    employees: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        hourlyRate: 11.50,
        location: 1,
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        hourlyRate: 10.75,
        location: 1,
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        hourlyRate: 12.30,
        location: 2,
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        hourlyRate: 12.00,
        location: 3,
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        hourlyRate: 12.30,
        location: 4,
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
        hourlyRate: 11.50,
        location: 2,
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        hourlyRate: 11.80,
        location: 4,
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        hourlyRate: 21.00,
        location: 1,
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        hourlyRate: 12.10,
        location: 3,
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        hourlyRate: 13.00,
        location: 4
    }],
    products: [{
        id: 1, name: "Large Coffee", price: 6.00,
    }, {
        id: 2, name: "Latte", price: 8.99, 
    }, {
        id: 3, name: "Blueberry Muffin", price: 9.49,
    }, {
        id: 4, name: "Scone", price: 7.56,
    }, {
        id: 5, name: "Bran Muffin", price: 9.10,
    }, {
        id: 6, name: "Mocha Latte", price: 12.99,
    }, {
        id: 7, name: "Espresso", price: 11.80,
    }, {
        id: 8, name: "Americano", price: 11.00,
    }, {
        id: 9, name: "Cubano", price: 14.99,
    }, {
        id: 10, name: "Cappucino", price: 12.49,
    }],
    orders: [{
        id: 1, productId: 10, employeeId: 5, timestamp: 1613538111396
    }, {
        id: 2, productId: 5, employeeId: 1, timestamp: 1613038102396
    }, {
        id: 3, productId: 2, employeeId: 7, timestamp: 1612837112396
    }, {
        id: 4, productId: 8, employeeId: 5, timestamp: 1612836112396
    }, {
        id: 5, productId: 9, employeeId: 7, timestamp: 1612735112396
    }, {
        id: 6, productId: 4, employeeId: 1, timestamp: 1614528112396
    }, {
        id: 7, productId: 5, employeeId: 8, timestamp: 1614598112396
    }, {
        id: 8, productId: 2, employeeId: 9, timestamp: 1614630112396
    }, {
        id: 9, productId: 3, employeeId: 2, timestamp: 1612538112396
    }, {
        id: 10, productId: 9, employeeId: 6, timestamp: 1612438112396
    }, {
        id: 11, productId: 4, employeeId: 1, timestamp: 1612338112396
    }, {
        id: 12, productId: 6, employeeId: 4, timestamp: 1612238112396
    }, {
        id: 13, productId: 10, employeeId: 8, timestamp: 1630538112396
    }, {
        id: 14, productId: 9, employeeId: 9, timestamp: 1612738112396
    }, {
        id: 15, productId: 3, employeeId: 3, timestamp: 1612938112396
    }, {
        id: 16, productId: 4, employeeId: 7, timestamp: 1612638112396
    }, {
        id: 17, productId: 4, employeeId: 10, timestamp: 1612638112396
    }],
    locations: [
        {id: 1, name: `The Coffee House`},
        {id: 2, name: `Black Heart Brewery`},
        {id: 3, name: `Bitter Sweet Bar`},
        {id: 4, name: `Cream It Up Cafe`},
    ],
    customers: [
        {id: 1, name: `James Thomas`},
        {id: 2, name: `Terrance Blanard`},
        {id: 3, name: `Kyle Cordara`},
        {id: 4, name: `Benjamin Baker`},
        {id: 5, name: `Carlos Santos`},
        {id: 6, name: `Pompadillo Armadillio`},
        {id: 7, name: `Curt Arborcurds`},
        {id: 8, name: `Candace Traveca`},
        {id: 9, name: `Jennifer Jackson`},
        {id: 10, name: `Priscilla Bowman`},
    ],
    //Join table entities
    customerRatings: [
        {id: 1, customerId: 1, productId: 1, rating: 5, reviewMessage: 'I LOVE this product!'},
        {id: 2, customerId: 2, productId: 1, rating: 4, reviewMessage: 'This product is great!'},
        {id: 3, customerId: 2, productId: 2, rating: 3, reviewMessage: 'I hate this place!'},
        {id: 4, customerId: 3, productId: 1, rating: 5, reviewMessage: 'Who wouldnt love this!'},
        {id: 5, customerId: 4, productId: 1, rating: 5, reviewMessage: 'I could eat or drink this all day long!'},
        {id: 6, customerId: 5, productId: 4, rating: 1, reviewMessage: 'It is so so!'},
        {id: 7, customerId: 6, productId: 2, rating: 5, reviewMessage: 'I always come back to get this!'},
        {id: 8, customerId: 7, productId: 1, rating: 5, reviewMessage: 'SO GOOD!'},
        {id: 9, customerId: 7, productId: 5, rating: 5, reviewMessage: 'This is my favorite!'},
        {id: 10, customerId: 8, productId: 2, rating: 5, reviewMessage: 'Second to none!'},
        {id: 11, customerId: 9, productId: 3, rating: 4, reviewMessage: 'First place in my heart!'},
        {id: 12, customerId: 9, productId: 5, rating: 4, reviewMessage: 'YUM!'},
        {id: 13, customerId: 10, productId: 3, rating: 4, reviewMessage: 'Nothing is better than this!'},
        {id: 14, customerId: 10, productId: 2, rating: 4, reviewMessage: 'SUPER!'},
    ],
    productLocations: [
        {id: 1, productId: 1, locationId: 1},
        {id: 2, productId: 2, locationId: 1},
        {id: 3, productId: 8, locationId: 1},
        {id: 4, productId: 7, locationId: 2},
        {id: 5, productId: 9, locationId: 2},
        {id: 6, productId: 1, locationId: 2},
        {id: 7, productId: 3, locationId: 2},
        {id: 8, productId: 1, locationId: 3},
        {id: 9, productId: 4, locationId: 3},
        {id: 10, productId: 6, locationId: 3},
        {id: 11, productId: 10, locationId: 3},
        {id: 12, productId: 1, locationId: 4},
        {id: 13, productId: 5, locationId: 4},
    ],
    employeesLocations: [
        {id: 1, employeeId: 1, locationId: 1},
        {id: 2, employeeId: 1, locationId: 2},
        {id: 3, employeeId: 2, locationId: 1},
        {id: 4, employeeId: 3, locationId: 4},
        {id: 5, employeeId: 4, locationId: 3},
        {id: 6, employeeId: 4, locationId: 4},
        {id: 7, employeeId: 4, locationId: 1},
        {id: 8, employeeId: 5, locationId: 2},
        {id: 9, employeeId: 5, locationId: 3},
        {id: 10, employeeId: 6, locationId: 1},
        {id: 11, employeeId: 7, locationId: 1},
        {id: 12, employeeId: 8, locationId: 4},
        {id: 13, employeeId: 9, locationId: 3},
        {id: 14, employeeId: 10, locationId: 4},
        {id: 15, employeeId: 10, locationId: 3},
    ]
}

export const getProducts = () => {
    return database.products.map(product => ({...product}))
}
export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}

export const getEmployees = () => {
    return database.employees.map(employee => ({...employee}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

export const getCustomers = () => {
    return database.customers.map(customer => ({...customer}))
}
export const getCustomerRatings = () => {
    return database.customerRatings.map(rating => ({...rating}))
}
export const getProductLocations = () => {
    return database.productLocations.map(location => ({...location}))
}
export const getEmployeesLocations = () => {
    return database.employeesLocations.map(location => ({...location}))
}
