window.onload= func;
function func() {
     "user strict";
    let addbtn = document.getElementById("addbtn");
    
    function calc(){
        let nums = [10,2,3];
        let words = ["mum","international","university"];
        let i = 3;
        let sumResult =sum(nums);
        let multResult =multiply(nums);
        let filterdWords = filterWords(words,i);
        let revStr = reverse("hello");
    
        document.getElementById("sum1").value =sumResult;
        document.getElementById("mult").value =multResult;

        document.getElementById("revrs").value =revStr;
    }

    let sum = (nums) => {
       let result =  nums.reduce((x,y) =>  x + y);
         return result;
    }

    let multiply = (nums) => {
        let result =  nums.reduce((x,y) =>  x * y);
        return result;
    }

    let reverse = (str) => {
       return str.split("").reverse().join("");
    }

    let filterWords = (words,n) => {
    //     let ww = ["mum","mu","bereket","jerry"];
    //   const x =  ww.findIndex(x => x.length > 3);
     
        let filterdWords = words.filter((elem, i, array) =>  elem.length > n);
        console.log("filter longest words that are greater than 3 :" +filterdWords);
       return filterWords;
    };

   
  
    addbtn.onclick = calc;
}