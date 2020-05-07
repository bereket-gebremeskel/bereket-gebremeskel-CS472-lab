import SavingsAccount from './SavingsAccount.js';
import { CheckingAcount } from './CheckingAcount.js';
import  Bank  from './Bank.js';


(function(){

    let accounts = [];
    let bank = new Bank(accounts);
    describe("SavingAccount", function() {
        context("when 0.5 interest entered and deposit amount 500 entered", function() {
            let  saving = new SavingsAccount("125-10");
            saving.setInterest(0.5);
             saving.deposit(500);
             accounts.push(saving);
             it("the current deposited ammount is 500", function() {
                assert.equal(saving.getBalance(), 500);
            });
            it("the interest Rate is 2.5", function() {
                assert.equal(saving.addInterest(), 2.5);
            });
            it("the balance after the interest rate is added is 502.5", function() {
               
                assert.equal(saving.getBalance(), 502.5);
            });
        });
    });

    describe("CheckingAccount", function() {
        context("when $600 entered to withdaw for current balance of 500", function() {
        let checking = new CheckingAcount();
        accounts.push(checking);
        checking.deposit(500);
            it("reamining amount after withdraw is -100 for over draft limit of -100", function() {
                assert.equal(checking.withdraw(600), -100);
            });
        });
    });
    describe("Bank", function() {
        context("when additional bank account is added", function() {
           
            it("when account is adedd and the created accounts becomes 3", function() {
                assert.equal(bank.addAccount("101"), 3);
            });
            it("when Saving account is adedd and the created accounts becomes 4", function() {
                assert.equal(bank.addSavingsAccount("102"), 4);
            });
            it("when Checking account is adedd and the created accounts becomes 5", function() {
                 assert.equal(bank.addCheckingAccount("102"), 5);
            });
            it("it should throw an error", function() {
                expect(function(){
                    bank.endOfMonth();
                }).to.throw(RangeError);
            });
        });
    });
})();

