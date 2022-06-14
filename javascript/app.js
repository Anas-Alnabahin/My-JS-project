let p1TotalScore,p2TotalScore,p1CurrentScore,p2CurrentScore;
p1TotalScore = 0;
p2TotalScore = 0;
p1CurrentScore = 0;
p2CurrentScore = 0;
let currentPlayer = 1;
function onloead(){
    document.getElementById('ts1').innerHTML = `Total Score:0`;
    document.getElementById('cs1').innerHTML = `Current Score:0`;
    document.getElementById('ts2').innerHTML = `Total Score:0`;
    document.getElementById('cs2').innerHTML = `Current Score:0`;
}
onloead();
document.querySelector('.roll').addEventListener('click', function () {
    let win1 = document.getElementById("win1");
    let win2 = document.getElementById("win2");
    if(win1.innerHTML === "Player1<br>WINNER" || win2.innerHTML === "Player2<br>WINNER"){
        document.getElementById('win1').innerHTML = "Player1";
        document.getElementById('win2').innerHTML = "Player2";
        document.getElementById('ts1').innerHTML  = `Total Score:0`;
        document.getElementById('cs1').innerHTML  = `Current Score:0`;
        document.getElementById('ts2').innerHTML  = `Total Score:0`;
        document.getElementById('cs2').innerHTML  = `Current Score:0`;
        return;
    }
    document.getElementById('ts1').innerHTML = `Total Score:${p1TotalScore}`;
    document.getElementById('cs1').innerHTML = `Current Score:${p1CurrentScore}`;
    document.getElementById('ts2').innerHTML = `Total Score:${p2TotalScore}`;
    document.getElementById('cs2').innerHTML = `Current Score:${p2CurrentScore}`;
    document.querySelector('.dice').style.display = 'block';
    let num = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = './images/face'+ num+'.png';
    if(currentPlayer == 1){
        if(num === 1){
            p1CurrentScore = 0;   
            currentPlayer = 2; 
            document.getElementById('cs1').innerHTML = `Current Score:0`;
        }else{
            p1CurrentScore+=num;
            document.getElementById('cs1').innerHTML = `Current Score:${p1CurrentScore}`;
        }
    }else if(currentPlayer == 2){
        if(num === 1){
            p2CurrentScore = 0;   
            currentPlayer = 1; 
            document.getElementById('cs2').innerHTML = `Current Score:0`;
        }else{
            p2CurrentScore+=num;
            document.getElementById('cs2').innerHTML = `Current Score:${p2CurrentScore}`;
        }
    }
    if(p1TotalScore >= 30 || p1CurrentScore >= 30 || p1TotalScore+p1CurrentScore >= 30){
        document.getElementById('win1').innerHTML = "Player1<br>WINNER";
        currentPlayer= 1;
        document.getElementById('ts1').innerHTML = `Total Score:0`;
        document.getElementById('cs1').innerHTML = `Current Score:0`;
        document.getElementById('ts2').innerHTML = `Total Score:0`;
        document.getElementById('cs2').innerHTML = `Current Score:0`;
        p1TotalScore = 0;
        p2TotalScore = 0;
        p1CurrentScore = 0;
        p2CurrentScore = 0;
        document.querySelector('.dice').style.display = 'none';
        p1TotalScore = 0;
        p2TotalScore = 0;
        p1CurrentScore = 0;
        p2CurrentScore = 0;
        currentPlayer = 1;
    }else if(p2TotalScore >= 30 || p2CurrentScore >= 30 || p2TotalScore+p2CurrentScore >= 30){
        document.getElementById('win2').innerHTML = "Player2<br>WINNER";
        currentPlayer= 1;
        document.getElementById('ts1').innerHTML = `Total Score:0`;
        document.getElementById('cs1').innerHTML = `Current Score:0`;
        document.getElementById('ts2').innerHTML = `Total Score:0`;
        document.getElementById('cs2').innerHTML = `Current Score:0`;
        p1TotalScore = 0;
        p2TotalScore = 0;
        p1CurrentScore = 0;
        p2CurrentScore = 0;
        document.querySelector('.dice').style.display = 'none';
        p1TotalScore = 0;
        p2TotalScore = 0;
        p1CurrentScore = 0;
        p2CurrentScore = 0;
        currentPlayer = 1;
    }
});
document.querySelector('.hold').addEventListener('click',function(){
    if(currentPlayer === 1){
        p1TotalScore += p1CurrentScore;
        document.getElementById('ts1').innerHTML = `Total Score:${p1TotalScore}`;
        document.getElementById('cs1').innerHTML = `Current Score:0`
        p1CurrentScore = 0;
        currentPlayer = 2;
    }else if(currentPlayer == 2){
        p2TotalScore += p2CurrentScore;
        document.getElementById('ts2').innerHTML = `Total Score:${p2TotalScore}`;
        document.getElementById('cs2').innerHTML = `Current Score:0`
        p2CurrentScore = 0;
        currentPlayer = 1;
    }
});
document.querySelector('.newGame').addEventListener('click',function(){
    document.querySelector('.dice').style.display = 'none';
    p1TotalScore = 0;
    p2TotalScore = 0;
    p1CurrentScore = 0;
    p2CurrentScore = 0;
    currentPlayer = 1;
    document.getElementById('win1').innerHTML = "Player1";
    document.getElementById('win2').innerHTML = "Player2";
    document.getElementById('ts1').innerHTML  = `Total Score:0`;
    document.getElementById('cs1').innerHTML  = `Current Score:0`;
    document.getElementById('ts2').innerHTML  = `Total Score:0`;
    document.getElementById('cs2').innerHTML  = `Current Score:0`;
});
