// $( '<span class="iconify" data-icon="la:fist-raised" data-inline="false" data-rotate="90deg"></span>' ).insertAfter( ".inner" );
var username = window.prompt("Enter Your Name?","User");
var computername='Vijeta';
var userscore = 0;
var computerscore = 0;
const r=document.getElementById('rock')
const userhead=document.getElementById('userhead')
const comphead=document.getElementById('comphead')
const e=document.getElementById('endgame')
const pa=document.getElementById('playagain')
const last=document.getElementById('last')
const p=document.getElementById('paper')
const s=document.getElementById('scissors')
const result=document.getElementById('result')
const result1=document.getElementById('result1')
const user_score=document.getElementById('user_score')
const computer_score=document.getElementById('computer_score')

$("#after").hide();
// comphead.innerHTML=computername;
// userhead.innerHTML=username;
user_score.innerHTML=userscore;
computer_score.innerHTML=computerscore;
document.getElementById("vs").innerHTML = username + " VS " + computername;
p.addEventListener("click", () => {
	result.innerHTML = game('P');
});
r.addEventListener("click", () => {
	result.innerHTML = game('R');
});
s.addEventListener("click", () => {
	result.innerHTML = game('S');
});
e.addEventListener("click", () => {
	last.innerHTML = endgame();
});
pa.addEventListener("click", () => {
	location.reload(true);
});

function game (U_Choice) {
    var arr = ['R', 'P','S'];
    var C_Choice = arr[Math.floor(Math.random() * arr.length)] ;
    c_choice(C_Choice);
    if(U_Choice == C_Choice)
    {
        return('Uggh! It is a Draw!');
    }
    // else
    // {
    //     alert('Not a Draw')
    // }
    else if(U_Choice=='R' && C_Choice=='P')
    {
        lose();
        // result1.innerHTML='PAPER COVERS ROCK';
        return(computername +' Got this!');
    }
    else if(U_Choice=='R' && C_Choice=='S')
    {
        win();
        // result1.innerHTML='ROCK SMASHES SCISSORS';
        return(username +' Got this!');
    }
    else if(U_Choice=='P' && C_Choice=='R')
    {
        win();
        // result1.innerHTML='PAPER COVERS ROCK';
        return(username +' Got this!');
    }
    else if(U_Choice=='P' && C_Choice=='S')
    {
        lose();
        // result1.innerHTML='SCISSORS CHOPS OFF PAPER';
        return(computername +' Got this!');
    }
    else if(U_Choice=='S' && C_Choice=='R')
    {
        lose();
        // result1.innerHTML='ROCK SMASHES SCISSORS';
        return(computername +' Got this!');
    }
    else if(U_Choice=='S' && C_Choice=='P')
    {
        win();
        // result1.innerHTML='SCISSORS CHOPS OFF PAPER';
        return(username +' Got this!');

    }

    
    
}

function c_choice(c) {
    // var arr = ['R', 'P','S'];
    // var C_Choice = arr[Math.floor(Math.random() * arr.length)] ;
    

    if (c=='R')
    {
        // cchoice.insertAdjacentHTML=<span class="iconify" data-icon="la:fist-raised" data-inline="false"></span>;
        $("#cc").prevAll().remove();
        $( '<span class="iconify" data-icon="la:fist-raised" data-inline="false" data-rotate="270deg"></span>' ).insertBefore( "#cc" );

    }
    else if(c=='P')
    {
        // cchoice.insertAdjacentHTML=<span class="iconify" data-icon="ph:hand-palm" data-inline="false"></span>;
        $("#cc").prevAll().remove();
        $( '<span class="iconify" data-icon="ph:hand-palm" data-inline="false" data-rotate="270deg" data-flip="horizontal" ></span>' ).insertBefore( "#cc" );
    }
    else if(c=='S')
    {
        // cchoice.insertAdjacentHTML=<span class="iconify" data-icon="akar-icons:victory-hand" data-inline="false"></span>;
        $("#cc").prevAll().remove();
        $( '<span class="iconify" data-icon="akar-icons:victory-hand" data-inline="false" data-rotate="270deg"></span>' ).insertBefore( "#cc" );
    }
    

}



function win() {
    userscore++;
    user_score.innerHTML=userscore;
    
}

function lose() {
    computerscore++;
    computer_score.innerHTML=computerscore;
    
}

function endgame() {

    $("#main").hide();
    $("#after").show();
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