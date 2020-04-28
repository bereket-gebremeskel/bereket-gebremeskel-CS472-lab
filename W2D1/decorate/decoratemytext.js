window.onload = decorate;

function decorate(){
    "user strict";
    let btn = document.getElementById("btn");
    let blnBtn = document.getElementById("bling");
    let textArea = document.getElementById("txt");
    let igpayBtn = document.getElementById("igpay");
    let malkovitchbtn = document.getElementById("malkovitch");
   function styleTextarea(){

    // let fontSize =   textArea.style.fontSize;
        // if(fontSize === "12pt"){
        //     textArea.style.fontSize = "14pt";
        // }
        let size = 2;
        setInterval(() => {
            let fontSize =   textArea.style.fontSize;
            textArea.style.fontSize = (parseInt(fontSize) + 2)+ "pt";
        }, 500);
    }
    

    function styleByBlButton(){
        if(blnBtn.checked){
            textArea.style.fontWeight = "bold";
            textArea.style.color = "green";
            textArea.style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        }else{
            textArea.style.fontWeight = "initial";
            textArea.style.color = "black";
            textArea.style.textDecoration = "initial";
        }
    }

    let bigLatain = () => {
        let word = document.getElementById("igpayword")
        let firschar = word.value.charAt(0) ;

        if(firschar== 'a' || firschar== 'e' ||firschar== 'i' || firschar== 'o' ||firschar==  'u' ){
         console.log(word)
         word.value =  word.value + 'yay';
        }else{
            word.value.substring(1,word.length);
            word.value = word.value.substring(1,word.length) + firschar +'ay';
          
        }
    }

    let malkovich = ()=> {
        let word = document.getElementById("malkovitchword");
        if(word.value.length >= 5){
            word.value = 'Malkovich';
        }
    }

    blnBtn.onclick = styleByBlButton;
    btn.onclick = styleTextarea;
    igpayBtn.onclick = bigLatain;
    malkovitchbtn.onclick = malkovich;

    
}