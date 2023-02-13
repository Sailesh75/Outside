let playerfirstsetscore,
playersecondsetscore,
playerthirdsetscore,
playerscore = 0,
dealerscore = 0;

const wrongSound = new Audio();
wrongSound.src = 'assets/audio/wrong.mp3';

const cashSound = new Audio();
cashSound.src = 'assets/audio/cash.mp3';

const awwSound = new Audio();
awwSound.src = 'assets/audio/aww.mp3';

const yaySound = new Audio();
yaySound.src = 'assets/audio/yay.mp3';

export default class CompareRank {
    constructor() 
    {}

    getPlayerScore(firstscore, secondscore, thirdscore) {
        playerfirstsetscore = firstscore;
        playersecondsetscore = secondscore;
        playerthirdsetscore = thirdscore;

        if (playerfirstsetscore <= playersecondsetscore && playersecondsetscore <= playerthirdsetscore) {
            const button2 = document.querySelector(".savebutton");
            const button = document.querySelector(".showbutton");
            button.style.backgroundColor = 'green';
            button2.innerHTML = 'Saved';
            
        } else {
            wrongSound.play();
            window.alert('Ranked it well first!!');
            console.log(`Not in ranked!!`);
        }
    }

    compareFirstset(dealerscore) {
        console.log('ds:',dealerscore);
        console.log('ps:',playerfirstsetscore);
        let dealer = document.querySelector('.result-indicator--dealerfirstset');
        let player = document.querySelector('.result-indicator--playerfirstset');

        if (dealerscore < playerfirstsetscore) {
            dealer.style.backgroundColor = 'green';
            player.style.backgroundColor = 'red';
            wrongSound.play();
            dealerscore++;
        } else {
            dealer.style.backgroundColor = 'red';
            player.style.backgroundColor = 'green';
            cashSound.play();
            playerscore++;
        }
    }

    compareSecondset(dealerscore)
    {
        let dealer = document.querySelector('.result-indicator--dealersecondset');
        let player = document.querySelector('.result-indicator--playersecondset');
        if(dealerscore < playersecondsetscore)
        {
            dealer.style.backgroundColor = 'green';
            player.style.backgroundColor = 'red';
            wrongSound.play();
            dealerscore++;
        }
        else
        {
            dealer.style.backgroundColor = 'red';
            player.style.backgroundColor = 'green';
            cashSound.play();
            playerscore++;
        }
    }

    compareThirdset(dealerscore)
        {
            let dealer = document.querySelector('.result-indicator--dealerthirdset');
            let player = document.querySelector('.result-indicator--playerthirdset');
            if(dealerscore < playerthirdsetscore)
            {
                dealer.style.backgroundColor = 'green';
                player.style.backgroundColor = 'red';
                wrongSound.play();
                dealerscore++;
            }

            else
            {
                dealer.style.backgroundColor = 'red';
                player.style.backgroundColor = 'green';
                cashSound.play();
                playerscore++;
            }
        }

     showResult()
     {
        if(dealerscore>playerscore){
            window.alert("you lost!!");
            awwSound.play();
        }
        else if(playerscore>dealerscore)
        {
            window.alert("you won!!");
            yaySound.play();
        }
     }   
}