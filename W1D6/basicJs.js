function testFunction(expected,found){
    if(expected === found){
        return "TEST EXPECTED";
    }else{
        return "TEST FAILD. Expected " + expected + " found " + found; 
    }
}

function testArrayEquality(expected=[],found=[]){

    if(expected.length === found.length){

        return "TEST EXPECTED";
    }else{
        return "TEST FAILD. Expected " + expected + " found " + found; 
    }
}

function max(number1,number2){
    if(number1>number2){
        return number1;
    }else{
        return number2;
    }
}

function maxOfThree(num1,num2,num3){
  return max(max(num1,num2),num3);
}

function isVowel(a){
    if(a === undefined || a === null || a.length>1 || a.length<1){
        return false;
    }else{
        if(a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u'){
            return true;
        }else{
            return false;
        }
    }
}

const sum = function(nums=[]){
    return nums.reduce(function(prev,elm,i,array){
        return prev + elm;
    })
}

const multiply = function(nums=[]){
    return nums.reduce(function(prev,elm,i,array){
        return prev * elm;
    })
}

const reverse = function(a){
    if(typeof(a)=="string"){
        let str = "";
        for (let i = a.length - 1; i >= 0; i--) {
            str += a[i];
        }
        return str;
        }
       return a;
}
const findLongestWord = function(word=[]){
    let max = word[0];
  
  return   word.reduce(function(prev,elm,i,array){
        if(prev.length > elm.length && prev.length > max.length){
            max = prev;
        }else if(prev.length <elm.length && elm.length > max.length){
            max = elm
        }
        return max;
    })
}

const filterLongWords = function(word=[] ,i){
    if(word.length !=0 && word != null && typeof(i) === "number"){
      let words=  word.filter(function(elm,index,array){
            return elm.length > i;
        });
        return words;
    }
}

/* sfiddle on the map/filter/reduce slide */
const a = [1,3,5,3,3]; 

const multiplyByTen = function(){
    return a.map(function(elm,i,array){
        return elm * 10;
    })
}
document.writeln(a.toString() +" elements multiply By Ten " + multiplyByTen().toString() + "<br/>");

const elemEqualtothree = function(){
    return  a.filter(function(elem, i, array) {
          return elem == 3;
        })
  }
  document.writeln(a.toString() + " elements that are Equal to Three " + elemEqualtothree().toString() + "<br/>");

  const productOfElements = function(){
    return  a.reduce(function(prev,elm,i,array) {
          return prev * elm;
        })
  }

  document.writeln("product of all elements of array " +a.toString() + " is "  + productOfElements().toString() + "<br/>");
  
console.log("Expected output of max(20,10) is 20 " +testFunction(20,max(20,10)));
console.log("===============================================================================")
console.log("Expected output of maxOfThree(20,10,30) is 30 " +testFunction(30,maxOfThree(20,10,30)) );
console.log("===============================================================================")
console.log("Expected output of isVowel('e') is true " +testFunction(true,isVowel('e')));
console.log("===============================================================================")
console.log("Expected output of sum([5,5,5,5]) is 20 " +testFunction(20,sum([5,5,5,5])));
console.log("===============================================================================")
console.log("Expected output of multiply([5,5,5,5]) is 625 " +testFunction(625,multiply([5,5,5,5])));
console.log("===============================================================================")
console.log("Expected output of reverse('bek') is keb " +testFunction('keb',reverse('bek')));
console.log("===============================================================================")
console.log("Expected output of findLongestWord(['chilli,'ch','mum']) is chilli " +testFunction('chilli',findLongestWord(['chilli','ch','mum'])));
console.log("===============================================================================")
console.log("Expected output of findLongestWord(['mum,'mu','compro']) is ['mum','compro'] " +testArrayEquality(["mum","compro"],filterLongWords(["mum","m","compro"],1)));
// console.log("===============================================================================")
// console.log("Expected output of multiplyByTen([1,3,5,3,3]) is [10,30,50,30,30] " +testArrayEquality([10,30,50,30,30],multiplyByTen(a)))
// console.log("===============================================================================")
// console.log("Expected output of elemEqualtothree([1,3,5,3,3]) is [3,3,3] " +testArrayEquality([3,3,3] ,elemEqualtothree(a)));
// console.log("===============================================================================")
// console.log("Expected output of productOfElements([1,2,3]) is 6 " +testFunction(6 ,productOfElements([1,2,3])))

