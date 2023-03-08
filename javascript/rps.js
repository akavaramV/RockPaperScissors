
//Vaishnav Akavaram; 991578795; Professor Andy Pak; Assignment 1: Rock_Paper_Scissors; JavaScript file

//Initializing or assigning values to variables below
  var userScore = 1;
  var computerScore = 1;
  var tieMssg = "Tie &#128084";
  var winMssgRock = "Rock &#9994 beats Scissors &#9996";
  var loseMssgRock = "Rock &#9994 loses to Paper &#9995";
  var winMssgPaper = "Paper &#9995 beats Rock &#9994";
  var loseMssgPaper = "Paper &#9995 loses to Scissors &#9996";
  var winMssgScissors = "Scissors &#9996 beats Paper &#9995";
  var loseMssgScissors = "Scissors &#9996 loses to Rock &#9994";

  var userScore_pTag = document.getElementById("uScore");
  var computerScore_pTag = document.getElementById("cScore");
  var mssgFinal_pTag = document.getElementById('finalMssg');
  var gameMssg_pTag = document.getElementById('fightMssg');
  var soundEffect = document.getElementById('buttonClickSound')

  var notes_display = document.getElementById('notes')

//This function generates a random choice of rock, paper or scissors
  function getComputerChoice(){
      var computerChoices = ['Rock &#9994', 'Paper &#9995', 'Scissors &#9996'];
      var randomChoice = Math.floor(Math.random() * 3); //value between 0 to 2 with 0 included
      return computerChoices[randomChoice];  //returns the string in the array computerChoices
  }

//This function adds the score of user if the computer's choice loses to the user's choice
  function addScoreUser(){
      if(userScore === 10){
        userScore_pTag.innerHTML = userScore++;
        mssgFinal_pTag.innerHTML = 'You win!&#128513<br>Click Restart to play again';
        mssgFinal_pTag.style.color = 'lime';
        //addScoreUser();
        disableButtons();
      }
      else
        userScore_pTag.innerHTML = userScore++;
  }

//This function adds the score of computer if the computer's choice beats the user's choice
  function addScoreComputer(){
      if(computerScore === 10){
        computerScore_pTag.innerHTML = computerScore++;
        mssgFinal_pTag.innerHTML = 'You Lose!&#128546 <br>Click Restart to play again';
        mssgFinal_pTag.style.color = 'deeppink';
        disableButtons();
      }
      else  
        computerScore_pTag.innerHTML = computerScore++;
  } 

//This function compares the computer's choice of rock, paper or scissors with users' choice of rock and returns the output
  function rockPower(){
      var message;
      var comp = getComputerChoice();
          if(comp === "Scissors &#9996"){
              addScoreUser();
              message = winMssgRock;
          }
          else if(comp === "Paper &#9995"){
              addScoreComputer();
              message = loseMssgRock;
          }
          else if (comp === "Rock &#9994")
              message = tieMssg;     
      gameMssg_pTag.innerHTML = "You picked: Rock &#9994" + "<br>Computer picks: " + comp + "<br>====================<br>" + message;
    }

//This functions compares the computer's choice of rock, paper or scissors with users' choice of paper and returns the output
    function paperPower(){
        var message2;
        var comp = getComputerChoice();
            if(comp === "Rock &#9994"){
                addScoreUser();
                message2 = winMssgPaper;
            }
            else if(comp === "Scissors &#9996"){ 
                addScoreComputer();
                message2 = loseMssgPaper;
            }
            else if(comp === "Paper &#9995")
                message2 = tieMssg;     
        gameMssg_pTag.innerHTML = "You picked: Paper &#9995" + "<br>Computer picks: " + comp + "<br>====================<br>" + message2;
    }

//This function compares the computer's choice of rock, paper or scissors with users' choice of scissors and returns the output
    function scissorsPower(){
        var message3;
        var comp = getComputerChoice();
            if(comp === "Paper &#9995"){
                addScoreUser();
                message3 = winMssgScissors;
            }
            else if(comp === "Rock &#9994"){
                addScoreComputer();
                message3 = loseMssgScissors;
            }
            else if(comp === "Scissors &#9996")
                message3 = tieMssg;     
        gameMssg_pTag.innerHTML = "You picked: Scissors &#9996" + "<br>Computer picks: " + comp + "<br>====================<br>" + message3;
    }
  
//This function quits the on-going game by disabling the buttons
  function quitGame(){
      mssgFinal_pTag.innerHTML = "Game Over!&#128520 <br>Click Restart to start over";
      mssgFinal_pTag.style.color = 'deeppink';
      disableButtons();
  }

//This function disables the buttons
  function disableButtons(){
      document.getElementById('rock_button').disabled = true; //disable rock button on the webpage
      document.getElementById('paper_button').disabled = true; //disable paper button on the webpage
      document.getElementById('scissors_button').disabled = true; //disable scissors button on the webpage
      document.getElementById('quit_button').disabled = true; //disable quit button on the webpage
  }

//This function restarts the game
  function restartGame(){
    location.reload(); //reloads the current webpage and thus unlocks all the button
    }

//This function plays the sound when a user selects Rock, Paper, Scissors, or Quit button
  function clickSound() { 
    soundEffect.play(); 
  } 

//This function displays message when user moves cursor over rock button
  function notes_rock(){
    notes_display.innerHTML = 'Select Rock';
  }

//This function displays message when user moves cursor over paper button
  function notes_paper(){
    notes_display.innerHTML = 'Select Paper';
  }

//This function displays message when user moves cursor over scissors button
  function notes_scissors(){
    notes_display.innerHTML = 'Select Scissors';
  }

//This function displays message when user moves cursor over quit button
  function notes_quit(){
    notes_display.innerHTML = 'Quit Game?';
  }

//This function displays message when user moves cursor over restart button
  function notes_restart(){
    notes_display.innerHTML = 'Restart Game?';
  }

//This function displays message when user moves cursor away from the buttons
  function notes_empty(){
    notes_display.innerHTML = '';
  }

