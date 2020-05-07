import Account from './account.js';
export default class SavingsAccount extends Account{

    constructor(accNumber,interest = 0.5){
        // this.balance = balance;
        super(accNumber);
        this._interest = interest;
    }

    getInterest(){
        return this._interest;
    }

    setInterest(interest){
        this._interest = interest;
    }

    addInterest(){
        console.log(this.getBalance());
        let interest = (this.getBalance()*this.getInterest())/100;
       
         super.deposit(interest);
        //  console.log(super.getBalance())
        return interest;
    }
    toString() {
        return "Saving Account " + this._number + ": balance " + this._balance;
    }
    endOfMonth(){
        this.addInterest();
        return "Interest added SavingAccount:" + this.getNumber() + " balance: " + this.getBalance() + " interest: " + this.getInterest();
    }
}


