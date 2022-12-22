import {Customer} from './Customer'

export class Branch {
    private customers: Customer[]
    constructor(private name: string) {
        this.name = name
        this.customers = []

    }
    getName() {
        return this.name
    }
    getCustomers() {
        return this.customers
    }
    addCustomer(customer:Customer):boolean {
        if(this.customers.includes(customer)) {
            console.log(`${customer.getName()} already exists`)
            return false
        }
        else {
            this.customers.push(customer)
            console.log(`${customer.getName()} added successfully`)
            return true
        }
    }
    addCustomerTransaction(id: string, amount: number): boolean {
        return this.customers.some((value) => {
            if (value.getId === id) {
                value.addTransactions(amount)
                return true
            }
            return false
        })
    }
    findCustomer(id: string): Customer|null {
        let customer = this.customers.find((cust) => cust.getId === id)
        if(customer){
            console.log("Customer exist")
        }
        return null
    }
}
