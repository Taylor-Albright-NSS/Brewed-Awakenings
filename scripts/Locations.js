import { getLocations } from "./database.js"
import { getProducts } from "./database.js"
import { getProductLocations } from "./database.js"

const locations = getLocations()
const products = getProducts()
const productLocations = getProductLocations()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === "location") {
            // If what you're click on's ID matches the Join Table's ID of that type (clickTarget's data ID === joinTable.locationId),
            // then check the Join Table's other ID with the other value you're trying to find (joinTable.customerId === customer.id)
            // In this many to many relationship, it's looking like the logic steps are FOR -> IF -> FOR -> IF

            let locationName = clickTarget.dataset.name
            let productsSold = ''
            for (const pLocation of productLocations) {
                if (pLocation.locationId === parseInt(clickTarget.dataset.id)) {
                    for (const product of products) {
                        if (product.id === pLocation.productId) {
                            productsSold += `${product.name}\n`
                        }
                    }
                }
            }
            window.alert(`${locationName} sells these products: \n${productsSold}`)
        }
    }
)

export const Locations = () => {
    let html = `<ul>`

    for (const location of locations) {
        html += `<li 
        data-type="location"
        data-id="${location.id}"
        data-name="${location.name}"
        >${location.name}
        </li>`
    }
    html += "</ul>"
    return html
}