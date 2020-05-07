import Account from "./account.js";

export class CheckingAcount extends Account{

    constructor(){
        super();
        this._overDraft = 100;
    }

    getOverDraft(){
        return this._overDraft;
    }

    setOverDraft(value){
        this._overDraft = value;
    }

    withdraw(amount) {
       
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount >= this._balance) {
           let rem =  Math.abs( this.getBalance() - amount);
            if(rem > this.getOverDraft()){
                throw new RangeError("Withdraw amount has to be less than or equal to over draft value of " + this.getOverDraft() );
            }else{
                    return this._balance -= amount;
            }
          
        }else{
            this._balance -= amount;
        }
        
    }

    endOfMonth(){
        if(super.getBalance()< 0 ){
            return "Warnning, low blanace Checking Account " + this.getNumber()+ " balance: "+ this.getBalance() + " overdraft limit :"+ this.getOverDraft();
        }
        return toString();
    }

    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance + " overdraft limit :" + this.getOverDraft();
    }
}