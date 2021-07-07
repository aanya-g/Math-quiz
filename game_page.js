var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name+"=";
document.getElementById("player2_name").innerHTML=player2_name+"=";


function send(){
    number1 = document.getElementById("no1").value;
    number2 = document.getElementById("no2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>"+number1+"X"+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button><br><br>";
    var row = question_number + input_box + check_button;
    document.getElementById("final").innerHTML = row;
    document.getElementById("no1").value="";
    document.getElementById("no2").value="";

}
question_turn = "player_1";
answer_turn = "player_2";

function check(){
  get_answer = document.getElementById("input_check_box").value;
  if (get_answer == actual_answer) {
      if (answer_turn == "player_2"){
          player2_score= player2_score + 1;
          document.getElementById("player2_score").innerHTML = player2_score;
      }
      else{
          player1_score = player1_score + 1;
          document.getElementById("player1_score").innerHTML = player1_score;
      }
  }

  if (question_turn == "player_1") {

    console.log("qt-"+question_turn+"   --- at- "+answer_turn);
      question_turn="player_2";
      answer_turn = "player_1";
      console.log("qt-"+question_turn+"   --- at- "+answer_turn);
      document.getElementById("player_question").innerHTML = "Question turn -" + player2_name;
     
      document.getElementById("player_answer").innerHTML = "Answer turn -" + player1_name;
  }
  else{
    console.log("elseqt-"+question_turn+"   --- at- "+answer_turn);
    question_turn="player_1";
    answer_turn = "player_2";
    console.log("qt-"+question_turn+"   --- at- "+answer_turn);
      document.getElementById("player_question").innerHTML = "Question turn -" + player1_name;
      
      document.getElementById("player_answer").innerHTML = "Answer turn -" + player2_name;
   }
   document.getElementById("final").innerHTML = "";
}
