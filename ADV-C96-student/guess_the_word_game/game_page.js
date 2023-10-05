player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player72_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn -"+ player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn -"+ player2_name;


function submit()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in Lowercase -"+ word);

    CharAt1=word.charAt(1);
    console.log(CharAt1);

    CharAt2=word.charAt( Math.floor (word.length/2));
    console.log(CharAt2);

    CharAt3=word.charAt(word.length-1);
    console.log(CharAt3);

    removeCharAt1=word.replace(CharAt1,"_");
    removeCharAt2=removeCharAt1.replace(CharAt2,"_");
    removeCharAt3=removeCharAt2.replace(CharAt3,"_");
    console.log(removeCharAt3);

    question_word="<h4 id='word_display' >Q."+ removeCharAt3+"</h4>";
    input_box="<br> Answer :<input type='text'id='input'>";
    check_button="<br><br><button class='btn btn-info'onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;

}
var question_turn="player_1";
var answer_turn="player_2";
function check()
{
    get_answer=document.getElementById("input").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case - "+ answer);

    if(answer==word)
    {
        if(answer_turn=="player_1")
        player1_score=player1_score + 1;
    document.getElementById("player1_score").innerHTML=player1_score;
    }
    else
    {
        player2_score=player2_score + 1;
    document.getElementById("player2_score").innerHTML=player2_score;
    }
    

    if(question_turn=="player_1")
    {
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="QuestionTurn-"+player2_name;
    }
    else
    {
        question_turn="player_1";
        document.getElementById("player_question").innerHTML="QuestionTurn-"+player1_name;
    }


    if(answer_turn=="player_1")
    {
        answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="AnswerTurn-"+player2_name;
    }
    else
    {
        answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="AnswerTurn-"+player1_name;
    }
    document.getElementById("output").innerHTML="";

}
