let boxes = document.querySelectorAll(".box")
let turn0 = true
let a=document.querySelector(".h1")
let b=document.querySelector(".reset")
let wins = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let aft = () => {
    for(let box of boxes){
        box.disabled=true
    }
}

boxes.forEach((box) => {
    box.addEventListener("click" ,()=>{
    if(turn0){
     box.innerText="X"  
        turn0= false  
    }   
    else{
         box.innerText="O" 
        turn0=true
    }
    box.disabled=true
    checkwinner()
})
   
})

const checkwinner = () =>{
    for(let w of wins){
        if(boxes[w[0]].innerText!='' && boxes[w[1]].innerText!='' && boxes[w[2]].innerText!=""){
            if(boxes[w[0]].innerText === boxes[w[1]].innerText && boxes[w[1]].innerText === boxes[w[2]].innerText){
                a.innerHTML=`WINNER IS ${boxes[w[0]].innerText}`
                aft()
            }
           
        }
        
    }
}

b.addEventListener("click", () =>{
    let turn0 = true
    for(let box of boxes){
        box.disabled=false 
        box.innerText=""
    }
    a.innerHTML="TIC TAC TOE"
})