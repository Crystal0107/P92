player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

question_turn = "player1";
answer_turn = "player2";

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    number1 = document.getElementById("player1_name_input").value;
    number2 = document.getElementById("player2_name_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
}

function check(){
    get_answer = document.getElementById("answer");
    if(get_answer = actual_answer){
        if(answer_turn = "player_1"){
            update_player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else{
            update_player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }


        if(question_turn == "player1"){
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
        }
        else{
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
        }

        if(question_turn == "player2"){
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
        }
        else{
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
        }
    }
    input_check_box = " ";
    player1_name_input = " ";
    player2_name_input = " ";
}