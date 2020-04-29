(function(){
    "use strict";
    //gloabl variabls
    let speed = 250;
    let selecteAnimType = null;
    let timer =null;
    let animations = null;

    //DOM initializer
    window.onload = function(){
        let turboBtn = document.getElementById("turbo");
        let animStarter = document.getElementById("start");
        let animStopper = document.getElementById("stop");
        let animationSelector = document.getElementById("animationSelector");
        let animationFontSize = document.getElementById("animationFontSize");
       
        animStarter.onclick = animationStarterFun;
        animStopper.onclick = animationStopperFun;
        animationSelector.onchange = setAnimationType;
        animationFontSize.onchange = setAnimationSize;
        turboBtn.onclick = speedUpFun;
    };


    
    function animationStarterFun (){
        document.getElementById("start").disabled  = true;
        document.getElementById("stop").disabled  = false;

        const textArea = document.getElementById("text-area");

        if(selecteAnimType == 'Juggler'){
            animations = ANIMATIONS["Juggler"].split("=====\n");
            animationloop();
        }else if(selecteAnimType == 'Bike'){
            animations = ANIMATIONS["Bike"].split("=====\n");
            animationloop();
        }
        else if(selecteAnimType == 'Exercise'){
            animations = ANIMATIONS["Exercise"].split("=====\n");
            animationloop();
        }
        else if(selecteAnimType == 'Dive'){
            animations = ANIMATIONS["Dive"].split("=====\n");
            animationloop();
        }
    }

    //animation looper
    function animationloop(){
        let count = 0;
        const textArea = document.getElementById("text-area");
        clearInterval(timer );
            timer =  setInterval(() => {
                textArea.value =  animations[count++]; 
                if(animations.length == count){
                    count = 0;
                }
            }, speed);
    }

    //animation type setter
    function setAnimationType(){
       selecteAnimType = document.getElementById("animationSelector").value;
    }

    //animation stopper function
    function animationStopperFun(){
        document.getElementById("text-area").value = null;
        clearInterval(timer );
        document.getElementById("start").disabled  = false;
        document.getElementById("stop").disabled  = true;
        const textArea = document.getElementById("text-area");
        textArea.value = null;
    }


function speedUpFun(){
    let turboBtn = document.getElementById("turbo");
    if(turboBtn.checked){
        timer = null;
        speed = 50;
        // animationStopperFun();
        animationloop();
    }else{
        // animationStopperFun();
        speed = 250;
        animationloop();
    }
   
}

function setAnimationSize(){
    const textArea = document.getElementById("text-area");
    let size = document.getElementById("animationFontSize");
    if(size.value == 'Tiny'){
        textArea.style.fontSize = "7pt";
    }else if(size.value == 'Small'){
        textArea.style.fontSize = "10pt";
    }else if(size.value == 'Medium'){
        textArea.style.fontSize = "12pt";
    }
    else if(size.value == 'Large'){
        textArea.style.fontSize = "16pt";
    }
    else if(size.value == 'ExtraLarge'){
        textArea.style.fontSize = "24pt";
    }
    else if(size.value == 'XXL'){
        textArea.style.fontSize = "42pt";
    }
    
}

})();