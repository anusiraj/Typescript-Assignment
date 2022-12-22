import { Bank } from "./types/bank"
import { Customer } from "./types/Customer"
import { Branch } from "./types/Branch"


const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("John")

arizonaBank.addBranch(westBranch) //West Branch added successfully
arizonaBank.addBranch(sunBranch) //Sun Branch added successfully
arizonaBank.addBranch(westBranch) //West Branch already exists

arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")

arizonaBank.addCustomer(westBranch, customer1)//John added successfully
arizonaBank.addCustomer(westBranch, customer3)//John added successfully
arizonaBank.addCustomer(sunBranch, customer1)//John added successfully
arizonaBank.addCustomer(sunBranch, customer2)//Anna added successfully

arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000)
arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000)

customer1.addTransactions(-1000)
console.log(customer1.getBalance())
console.log(arizonaBank.listCustomers(westBranch, true))
console.log(arizonaBank.listCustomers(sunBranch,true))