import {Transaction} from './Transaction'

export class Customer {
    private id: string
    private transactions: Transaction[]

    constructor(private customer_name: string) {
        this.customer_name = customer_name
        this.id = String(Math.floor(Math.random() * 1000))
        this.transactions = []

    }
    getName() {
        return this.customer_name
    }
    get getId() {
        return this.id
    }
    getTransactions(): Transaction[] {
        return this.transactions
    }
    getBalance(): number {
        let initialValue = 0;
        this.transactions.map(transaction => {
            return initialValue += transaction.amount;
        })
        if(initialValue<0){
            initialValue = 0
        }
        console.log(`Balance amount is: ${initialValue}`);
        return initialValue;

    }
    addTransactions(new_amount: number): boolean {
       let addAmount = new_amount + this.getBalance()
       if(addAmount<0) {
        addAmount = 0
        console.log(`Transaction amount is ${addAmount}`)
        return false
        }
       else {   
        const new_transaction : Transaction = {
            amount: new_amount,
            date: new Date()
        }
        this.transactions.push(new_transaction)
        console.log(`${this.customer_name}'s New Transaction amount is ${new_amount}`)
        return true
        }
        
    }
}