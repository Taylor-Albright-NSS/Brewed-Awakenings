import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === "employee") {
            let fulfilledOrders = 0
            for (const order of orders) {
                if (order.employeeId === parseInt(clickTarget.dataset.id)) {
                    fulfilledOrders++
                }
            }
            window.alert(`${clickTarget.dataset.name} sold ${fulfilledOrders} products.`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li
        data-type="employee"
        data-name="${employee.name}"
        data-id=${employee.id}
        >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

