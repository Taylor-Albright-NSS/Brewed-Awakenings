import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"
import { getLocations } from "./database.js"
import { getEmployeesLocations } from "./database.js"

const employees = getEmployees()
const orders = getOrders()
const locations = getLocations()
const employeesLocations = getEmployeesLocations()


document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === 'employee') {
            // If what you're click on's ID matches the Join Table's ID of that type (clickTarget's data ID === joinTable.employeeId),
            // then check the Join Table's other ID with the other value you're trying to find (joinTable.customerId === customer.id)
            // In this many to many relationship, it's looking like the logic steps are FOR -> IF -> FOR -> IF

            let orderCount = 0
            for (const order of orders) {
                if (order.employeeId === parseInt(clickTarget.dataset.id)) {
                    orderCount++
                }
            }
            let locationsWorkedByEmployee = ''

            for (const employeeLocation of employeesLocations) {
                if (employeeLocation.employeeId === parseInt(clickTarget.dataset.id)) {
                    for (const location of locations) {
                        if (employeeLocation.locationId == location.id) {
                            locationsWorkedByEmployee += `${location.name}\n`
                        }
                    }
                }
            }

            window.alert(`
${clickTarget.dataset.name} works at these locations:\n${locationsWorkedByEmployee}
${clickTarget.dataset.name} has sold ${orderCount} orders.`)
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


















// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const clickTarget = clickEvent.target
//         if (clickTarget.dataset.type === "employee") {
//             let fulfilledOrders = 0
//             for (const order of orders) {
//                 if (order.employeeId === parseInt(clickTarget.dataset.id)) {
//                     fulfilledOrders++
//                 }
//             }
//             window.alert(`${clickTarget.dataset.name} sold ${fulfilledOrders} products.`)
//         }
//     }
// )