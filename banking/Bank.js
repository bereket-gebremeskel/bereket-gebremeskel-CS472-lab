import Account from "./account.js";
import SavingsAccount from "./SavingsAccount.js";
import { CheckingAcount } from "./CheckingAcount.js";

export default class Bank{
    constructor(accounts=[]){
        this._accounts = accounts;
    }

    getAccounts(){
        return this._accounts;
    }

    numberOfAccounts(){
      return  this._accounts.length;
    }

    addAccount(number){
        this._accounts.push(new Account(number));
        return this.numberOfAccounts();
    }

   addSavingsAccount(accountNumber,interest){
       this._accounts.push(new SavingsAccount(accountNumber,interest));
       return this.numberOfAccounts();
   }
   addCheckingAccount(accountNumber,overdraft){
    this._accounts.push(new CheckingAcount(accountNumber,overdraft));
    return this.numberOfAccounts();
   }

   closeAccount(number){
    this.getAccounts.filter(value => value.number == number).pop();
    return this.numberOfAccounts();
   }

   accountReport(number){
       return this._accounts.find(number => number == number).toString();
   }
   endOfMonth(){
    this._accounts.forEach(a => {
        console.log( a.endOfMonth());
    });

   }
}