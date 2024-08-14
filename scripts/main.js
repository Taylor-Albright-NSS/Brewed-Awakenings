import { Employees } from "./Employees.js"
import { Orders } from "./Orders.js"
import { Products } from "./Products.js"
import { Locations } from "./Locations.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <section class="detail--column list details__employees">
        <h2>Employees</h2>
        ${Employees()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
        ${Products()}
    </section>
    <section class="orders">
        <h2>Orders</h2>
        ${Orders()}
    </section>
    <section class="locations">
        <h2>Locations</h2>
        ${Locations()}
    </section>
`

mainContainer.innerHTML = applicationHTML

