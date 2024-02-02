let boxes = document.querySelectorAll(".btn")
let reset = document.querySelector("#reset")
let newGame = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let O_turn = true

const winpatterns = [

    [ 0, 1, 2],
    [ 0, 3, 6],
    [ 0, 4, 8],
    [ 1, 4, 7],
    [ 2, 5, 8],
    [ 2, 4, 6],
    [ 3, 4, 5],
    [ 6, 7, 8]
    
]

const resetGame = ()=>{
    O_turn = true
    enabledBtn()
    msgcontainer.classList.add("hide")
}

boxes.forEach((x)=>{
   x.addEventListener("click",()=>{
        if (O_turn === true){
            x.innerText = "O"
            O_turn = false
        }
        else{
            x.innerText = "X"
            O_turn = true
        }
            x.disabled = true

        checkWinner()
   }) 
})

const disabledBtn = ()=>{
    for(let box of boxes){
        box.disabled = true
    }
}

const enabledBtn = ()=>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

const showWinner =(winner)=>{
    msg.innerText = `congrats winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disabledBtn()
}

const checkWinner = ()=>{
    for (pattern of winpatterns){
      let pos1 = boxes[pattern[0]].innerText
      let pos2 = boxes[pattern[1]].innerText
      let pos3 = boxes[pattern[2]].innerText

      if (pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
        }
      }
    }
}

newGame.addEventListener("click", resetGame)
reset.addEventListener("click",resetGame)