var username = window.prompt("Enter Your Name?","User");
var computername='Vijeta';
var userscore = 0;
var computerscore = 0;
document.getElementById("vs").innerHTML = username + " VS " + computername;
const r=document.getElementById('rock')
const p=document.getElementById('paper')
const s=document.getElementById('scissors')
const result=document.getElementById('result')
const user_score_header=document.getElementById('user_scoreheader')
const computer_score_header=document.getElementById('computer_scoreheader')
const user_score=document.getElementById('user_score')
const computer_score=document.getElementById('computer_score')
const e=document.getElementById('endgame')
const last=document.getElementById('last')

user_score_header.innerHTML=username;
computer_score_header.innerHTML=computername;
user_score.innerHTML=userscore;
computer_score.innerHTML=computerscore;
function win() {
    userscore++;
    user_score.innerHTML=userscore;
}
function lose() {
    computerscore++;
    computer_score.innerHTML=computerscore;
}
function endgame() {
    if(computerscore==userscore)
    {
        return("Ultimate Draw!")
    }
    else if(computerscore>userscore)
    {
        return(computername+ " Wins this Round!")
    }
    else if(computerscore<userscore)
    {
        return(username+ " Wins this Round!")
    }
}
function game (U_Choice) {
    var arr = ['ROCK', 'PAPER','SCISSORS'];
    var C_Choice = arr[Math.floor(Math.random() * arr.length)] ;
    if(U_Choice == C_Choice)
    {
        return('Uggh! It is a Draw!')
    }
    // else
    // {
    //     alert('Not a Draw')
    // }
    else if(U_Choice=='ROCK' && C_Choice=='PAPER')
    {
        lose()
        return('PAPER COVERS ROCK \n'+ computername +' Got this!')
    }
    else if(U_Choice=='ROCK' && C_Choice=='SCISSORS')
    {
        win()
        return('ROCK SMASHES SCISSORS \n'+ username +' Got this!')
    }
    else if(U_Choice=='PAPER' && C_Choice=='ROCK')
    {
        win()
        return('PAPER COVERS ROCK \n'+ username +' Got this!')
    }
    else if(U_Choice=='PAPER' && C_Choice=='SCISSORS')
    {
        lose()
        return('SCISSORS CHOPS OFF PAPER \n'+ computername +' Got this!')
    }
    else if(U_Choice=='SCISSORS' && C_Choice=='ROCK')
    {
        lose()
        return('ROCK SMASHES SCISSORS \n'+ computername +' Got this!')
    }
    else if(U_Choice=='SCISSORS' && C_Choice=='PAPER')
    {
        win()
        return('SCISSORS CHOPS OFF PAPER \n'+ username +' Got this!')
    }
    
}
p.addEventListener("click", () => {
	result.innerHTML = game('PAPER');
});
r.addEventListener("click", () => {
	result.innerHTML = game('ROCK');
});
s.addEventListener("click", () => {
	result.innerHTML = game('SCISSORS');
});
e.addEventListener("click", () => {
	last.innerHTML = endgame();
});




// const c=document.getElementById('comp');
// function Computer_Response() {
//     c.innerHTML = 
//         arr[Math.floor(Math.random() * arr.length)];
// } 



