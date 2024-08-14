import { getProducts } from "./database.js"
import { getCustomers } from "./database.js"
import { getCustomerRatings } from "./database.js"

const products = getProducts()
const customers = getCustomers()
const customerRatings = getCustomerRatings()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type == 'product') {
            let productNameAndPriceString = ``
            let timesReviewed = 0
            let totalRatingValue = 0
            let customerName = ''
            for (const product of products) {
                if (product.id === parseInt(clickTarget.dataset.id)) {
                    productNameAndPriceString += `${product.name} costs $${product.price}.`
                }
            }
            for (const rating of customerRatings) {
                if (rating.productId === parseInt(clickTarget.dataset.id)) {
                    totalRatingValue += rating.rating
                    timesReviewed++
                }
            }
            for (const rating of customerRatings) {
                if (rating.productId === parseInt(clickTarget.dataset.id)) {
                    for (const customer of customers) {
                        if (customer.id === rating.customerId) {
                            customerName += `${customer.name}: ${rating.rating}\n${rating.reviewMessage}\n\n`
                        }
                    }
                }
            }
            customerName = customerName.length == 0 ? 'nobody' : customerName
            let averageRating = isNaN(totalRatingValue / timesReviewed) ? '(no average rating because nobody has rated)' : `This product has an average rating of ` + (totalRatingValue / timesReviewed).toFixed(2)
            window.alert(`${productNameAndPriceString}
This product has been reviewed ${timesReviewed} times.
${averageRating}.
This product has been reviewed by:
${customerName}                
`)
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

