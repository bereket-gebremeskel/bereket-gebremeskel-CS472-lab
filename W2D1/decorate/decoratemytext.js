window.onload = decorate;

function decorate(){
    let btn = document.getElementById("btn");
    let blnBtn = document.getElementById("bling");
    let textArea = document.getElementById("txt");
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
    

    function showAlrt(){
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


    
    blnBtn.onclick = showAlrt;
    btn.onclick = styleTextarea;
    
}