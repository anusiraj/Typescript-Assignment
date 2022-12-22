import {Branch} from './Branch'
import {Customer} from './Customer'

export class Bank {
    private branches: Branch[] 

    constructor(private name: string) {
        this.branches = []
    }
    addBranch(branch: Branch): boolean {
        if(this.branches.includes(branch)) {
            console.log(`${branch.getName()} already exists`)
            return false
        }
        else {
            this.branches.push(branch)
            console.log(`${branch.getName()} added successfully`)
            return true
        }
    }
    addCustomer(branch: Branch, customer: Customer): boolean {
        if (branch.addCustomer(customer)) {
            return true;
            }
            return false;
    }
    addCustomerTransaction(branch: Branch, id: string, amount: number): boolean {
        if(branch.addCustomerTransaction(id, amount)){
            return true
        }
        return false
    }
    findBranchByName(branchName: string): Branch[] | null {
        let newArray: Branch[] = []
        this.branches.forEach((branch) => {
            if (branch.getName().includes(branchName)) {
                newArray.push(branch)
            }
            console.log(`${branchName} not exists`)
        })
        return newArray.length > 0 ? newArray : null
        
    }
    checkBranch(branch: Branch):boolean {
        if(this.branches.includes(branch)) {
            console.log("branch exists")
            return true
        }
        else {
            console.log("branch not exist")
            return false
        }

    }
    listCustomers(branch: Branch, bhoolean: boolean): boolean {
        if (bhoolean) {
            this.branches.forEach((branch) => {branch.getCustomers().forEach((customer) => {
                console.log("Customer Name", customer.getName())
                console.log("Customer Id", customer.getId)
                console.log("Customer Transactions", customer.getTransactions())
                console.log("Customer branch", branch.getName())
                })
            })
        }
        return this.checkBranch(branch)
    }
}
