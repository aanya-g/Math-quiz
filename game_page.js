var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;


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
