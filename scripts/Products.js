import { getProducts } from "./database.js"
import { getCustomers } from "./database.js"

const products = getProducts()
const customers = getCustomers()
const customerRatings = getCustomerRatings()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type == 'product') {
        let reviewCount = 0
        let ratingTotal = 0
        //Calculates total customer rating to get the averages of all customer input
        for (const customer of customers) {
            for (const review of customer.customerRatings) {
                if (review.productId === parseInt(clickTarget.dataset.id)) {
                    reviewCount++
                    ratingTotal += review.rating
                }
            }
        }
        let averageRating = isNaN(ratingTotal / reviewCount) ? 0 : (ratingTotal / reviewCount).toFixed(2)

            //Product pricing event
            for (const product of products) {
                if (product.id === parseInt(clickTarget.dataset.id)) {
                    //Product name + cost + customer name + customer's rating
                    let customerString = ``
                    for (const customer of customers) {
                        // customerString += `${customer.name}: `
                        let customerName = customer.name
                        for (const review of customer.customerRatings) {
                            if (review.productId === parseInt(clickTarget.dataset.id)) {
                                customerString += `
                                ${customerName}: ${review.rating}`
                            }
                        }
                    }
                    window.alert(`
                        ${product.name} costs $${product.price}.
                        This item has been reviewed ${reviewCount} times.
                        This item has an average rating of ${averageRating}.
                        This item has been reviewed by: 
                        ${customerString}
                        `)
                }
            }
            //Customer reviews event

        }
    }
)

export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li 
        data-type="product"
        data-id="${product.id}"
        >${product.name}
        </li>`
    }
    html += "</ul>"
    return html
}

