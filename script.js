let userscore = document.querySelector("#userscore h1")
let oponentscore = document.querySelector("#oponentscore h1")
let history = document.querySelector(".lastround h1")
let uscore = 0 ;
let oscore = 0 ;

function start() {
  alert("Are you Ready for fun.....")
  game()  
}

function getcomputerInput() {
    const options = ["stone" , "paper" ,"scissor"];
    let index = parseInt((Math.random()*3))
    let computerInput = options[index]
    return computerInput 
}

document.getElementById('stone').addEventListener('click' , function () {
    playgame('stone')
})
document.getElementById('paper').addEventListener('click' , function () {
    playgame('paper')
})
document.getElementById('scissor').addEventListener('click' , function () {
    playgame('scissor')
})
 
function game(user , oponent) {
    if(oponent === user){
        end() ;
        console.log("drow!!");
    }else if( oponent === "stone" && user === "paper" || 
              oponent === "scissor" && user === "stone" ||
              oponent === "paper" && user === "scissor"){
                end() ;
                uscore++
        console.log("user won !! 😊");
    }else{
        end() ;
        oscore++ ;
        console.log("oponent won!! 😂");
    }
}

function playgame(userinput) {
    oponent = getcomputerInput() ;
    user =  userinput ;
    console.log(`oponent = ${oponent}`);
    console.log(`you = ${user}`);
    game(user , oponent);
    displayresult();
}
function updatehistory() {
    history.innerHTML =`<h3>`+`you ${user} , oponent ${oponent}`+`</h3>`
    history.style.fontSize = '15px' ;
}
function displayresult() {
    userscore.innerHTML = `${uscore}`
    oponentscore.innerHTML = `${oscore}`
    updatehistory()
}

function end(){
    if(uscore === 10 || oscore === 10){
        if(uscore === 10) alert("You Won")
        else alert("You Lose")
    uscore = 0 ;
    oscore = 0 ;
    }
    else{

    }
}
start()

